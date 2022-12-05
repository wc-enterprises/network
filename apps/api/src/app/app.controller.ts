import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { error } from './utils/error-codes';
import {
  LoginCred,
  Response,
  SignUpData,
  AddContactDto,
  AddTagDto,
} from './utils/interfaces';
import { responseObj } from './utils/util';
import { throwIfMandatoryParamsMissing } from './utils/validator';

@Controller('contact')
export class AppController {
  private logger: Logger;
  constructor(private readonly appService: AppService) {
    this.logger = new Logger('APP_CONTROLLER');
  }

  /**
   * Auth APIs
   */
  @Post('sign-up')
  signUp(
    @Body() signupData: SignUpData
  ): ReturnType<typeof responseObj> | Promise<ReturnType<typeof responseObj>> {
    try {
      //Mandatory param validation
      throwIfMandatoryParamsMissing(
        ['email', 'username', 'password'],
        signupData
      );

      return this.appService.signUp(signupData);
    } catch (err) {
      this.logger.log(`Unhandled error occured at signUp. ${err.message}`);
      if (err.status === 'ERROR') return err;
      return responseObj('ERROR', error.unhandledError);
    }
  }
  @Post('login')
  login(
    @Body() loginData: LoginCred
  ): Promise<ReturnType<typeof responseObj>> | ReturnType<typeof responseObj> {
    try {
      this.logger.log(`login called with data ${JSON.stringify(loginData)}`);
      let id = loginData.username;
      if (!id && loginData.email) id = loginData.email;
      if (!id)
        return responseObj('ERROR', error.isRequired('username or email'));

      if (!loginData.password)
        return responseObj('ERROR', error.isRequired('password'));

      return this.appService.login(loginData);
    } catch (err) {
      this.logger.log(`Unhandled error occured. ${err.message}`);
      return responseObj('ERROR', error.unhandledError);
    }
  }

  /**
   * Contact APIs.
   */
  @Post('add-contact-to-user')
  addContactToUser(
    @Body() contact: AddContactDto
  ): Response | Promise<Response> {
    try {
      this.logger.log(
        `addContactToUser called with data ${JSON.stringify(contact)}`
      );

      //Validations
      throwIfMandatoryParamsMissing(['userId', 'fullName', 'tags'], contact);
      return this.appService.addContactToUser(contact);
    } catch (err) {
      this.logger.log(
        `Unhandled error occured while adding contact. ${err.message}`
      );
      if (err.status === 'ERROR') return err;
      return responseObj('ERROR', error.unhandledError);
    }
  }

  @Get('get-all-contacts-of-user')
  getAllContactsOfUser(@Body() data: { userId: string }): any {
    //Validations
    if (!data.userId) return responseObj('ERROR', error.isRequired('userId'));
    return this.appService.getAllContactsOfUser(data.userId);
  }

  /**
   * Tag APIs.
   */
  @Post('add-tag-for-user')
  addTagForUser(@Body() data: AddTagDto): Response | Promise<Response> {
    try {
      //Mandatory param validation
      throwIfMandatoryParamsMissing(['userId', 'tagName'], data);

      return this.appService.addTagForUser(data);
    } catch (err) {
      this.logger.error(
        `Unhandled error occured while adding tag. ${err.message}`
      );
      if (err.status === 'ERROR') return err;
      return responseObj('ERROR', error.unhandledError);
    }
  }

  @Get('get-tags-of-user')
  getTagsOfUser(@Body() data: { userId: string }): any {
    try {
      this.logger.log(`getTagsOfUser called with data ${JSON.stringify(data)}`);

      //Validating if mandatory param present.
      if (!data.userId)
        return responseObj('ERROR', error.missingMandatoryParam('userId'));

      return this.appService.getTagsOfUser(data);
    } catch (err) {
      this.logger.error(
        `Unhandled error occured while fetching tags of user. ${err.message}`
      );
      return responseObj('ERROR', error.unhandledError);
    }
  }
}

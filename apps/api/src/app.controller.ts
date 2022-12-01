import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { SignUpDetails, AddContactDetails } from '../src/utils/app.interface';
import { ResponseObj } from './utils/response-object';
import { Logger } from '@nestjs/common';
import { NetworkLogger } from './utils/networkLogger';

@Controller()
export class AppController {
  private readonly logger: NetworkLogger;
  UserEntity: any;
  constructor(private readonly appService: AppService) {
    this.logger = new NetworkLogger(new Logger('APP_CONTROLLER'));
  }

  @Post('signUp')
  signUp(@Body() signUpDetails: SignUpDetails) {
    try {
      this.logger.log(`Signup endpoint called with data: ${signUpDetails}`);
      ['emailId', 'userName', 'password'].forEach((userProperties) => {
        const fetchedUserDetailsFromBody = Object.keys(signUpDetails);
        const isEveryUserDetailsPresent =
          fetchedUserDetailsFromBody.includes(userProperties);
        if (!isEveryUserDetailsPresent) {
          throw `Invaid User Details. Missing ${userProperties}`;
        }
      });
      return this.appService.signUp(signUpDetails);
    } catch (error) {
      this.logger.logError(
        `Errored while signing up in network application with message: ${error.message}`,
      );
      return ResponseObj('ERROR', `${error}`);
    }
  }

  @Post('addContactOfUser')
  addContactOfUser(@Body() contactDetails: AddContactDetails) {
    this.logger.log(`Add contact of user called with data: ${contactDetails}`);
    try {
      console.log(`Received request to addContact ${contactDetails.userId}`);
      ['userId', 'fullName', 'tags'].forEach((propertiesOfContacts) => {
        const fetchedPropertiesFromData = Object.keys(contactDetails);
        const isMandatoryContactDetailsPresent =
          fetchedPropertiesFromData.includes(propertiesOfContacts);
        if (!isMandatoryContactDetailsPresent) {
          throw `Invalid Contact details. Missing ${propertiesOfContacts}`;
        } else if (contactDetails.tags.length == 0) {
          throw `Invalid Contact details. Tags shouldn't be empty. Expecting atleast one tag.`;
        }
      });
      return this.appService.addContactOfUser(contactDetails);
    } catch (error) {
      this.logger.logError(
        `Errored while adding contact of an user with message: ${error.message}`,
      );
      return ResponseObj('ERROR', `${error}`);
    }
  }

  @Get('getAllContactsOfUser')
  async getAllContactsOfUser(@Body() incomingData) {
    try {
      this.logger.log(
        `Get all contacts of user called with data: ${incomingData}`,
      );
      if (incomingData.userId) {
        return this.appService.getAllContactsOfUser(incomingData);
      }
      throw 'UserId not found.';
    } catch (e) {
      this.logger.logError(
        `Errored while getting all the contacts of an user with message: ${incomingData}`,
      );
      return ResponseObj('ERROR', `${e}`);
    }
  }

  @Get('getContactById')
  async getContactById(@Body() contactDetails) {
    try {
      this.logger.log(`Get contact by id called with data: ${contactDetails}`);
      if (contactDetails.contactId) {
        return this.appService.getContactById(contactDetails);
      }
      console.log(contactDetails.contactId);
      throw `Invalid Contact Details. Missing ContactId`;
    } catch (e) {
      this.logger.logError(
        `Errored while getting contact by id with message: ${e.message}`,
      );
      return ResponseObj('ERROR', `${e}`);
    }
  }

  @Get('getAllTagsOfUser')
  async getAllTagsOfUser(@Body() userDetails) {
    try {
      this.logger.log(`Get all tags of user called with data: ${userDetails}`);
      if (userDetails.userId) {
        return this.appService.getAllTagsOfUser(userDetails);
      }
      throw `Invalid user details. Missing userId.`;
    } catch (e) {
      this.logger.logError(
        `Errored while getting tags of user with message: ${e.message}`,
      );
      return ResponseObj('ERROR', `${e}`);
    }
  }

  @Get('createTagOfUser')
  async createTagOfUser(@Body() tagDetails) {
    try {
      this.logger.log(`Create tag of user called with data: ${tagDetails}`);
      if (tagDetails.tagName) {
        return this.appService.createTagOfUser(tagDetails);
      } else throw 'TagName is not present';
    } catch (e) {
      this.logger.logError(
        `Errored while creating a tag of an user with message: ${e.message}`,
      );
      return ResponseObj('ERROR', `${e}`);
    }
  }
}

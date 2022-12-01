import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';


@Controller("contact")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("signup")
  postData(@Body() signupData): any {
    return this.appService.postData(signupData);
  }
  @Post("login")
  loginData(@Body() loginData):any{
    return this.appService.loginData(loginData);
  } 
  @Post("addContactofUser")
  addContact(@Body() contact):any{
    return this.appService.addContact(contact);
  }
  @Get("getAllContact")
  allContact(@Body() allContact):any{
    return this.appService.allContact(allContact);
  }
  @Get("contactbyid")
  contactByid(@Body() contactByid):any{
    return this.appService.contactById(contactByid)
  }
  @Post("addTag")
  addTag(@Body() tagName):any{
    return this.appService.addTag(tagName)
  }
  @Get("getAlltags")
  getAlltags(@Body() user):any{
    return this.appService.getAllTags(user)
  }
}

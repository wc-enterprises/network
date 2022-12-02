import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { contacts, tags, Users } from './app.entity';
import { v4 as uid } from 'uuid';
@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Users)
    private usersRepo:Repository<Users>,
    @InjectRepository(contacts)
    private contactRepo:Repository<contacts>,
    @InjectRepository(tags)
    private tagsRepo:Repository<tags>){}
    
    postData(signupData): any {
      try{
        let user = `u_${uid()}`;
        try {
          let response = this.usersRepo.insert({userid:user,tags:['t_b37978a0-5afe-408e-80c6-855d01b941cd','t_87e34794-d0e9-4516-811b-6608d34a547e','t_40089761-8ced-4dff-a7ec-a90ccdbe0fd9','t_05577e51-9429-48c1-8092-690734d3bc2a'],...signupData})
        } catch (error) {
          console.log(error);
        }
    
      return {
        'Status':'Success',
        'Message':'Account created Successfully',
        'userid':user
      }
      }
      catch(err){
        console.log(err)
        return err
      }
  }
    loginData(loginData):any{
       try {
        let user1 =this.usersRepo.query(`select username from users where userid=${loginData.userid};`)
       let pass=this.usersRepo.query(`select password from users where userid=${loginData.userid};`)
      // let user1=this.usersRepo.find(login_data.userid)
      if(loginData.username == user1 && loginData.password==pass){
        return{
          "status":"success",
          "message":"Logged in Successfully "
        }
      }
       } catch (err) {
        console.log(err);
        return err
       }
    }
    async addContact(contact){
      try {
        let contactId = `c_${uid()}`;
        let userId=contact.userid;
        let responseFromUser
        delete contact.userid;

        try {
          let responseFromContact = await this.contactRepo.insert({contactid:contactId,...contact})
           responseFromUser = await this.usersRepo.findOne({where:{userid:userId}})
        } catch (error) {
          console.log(error);
        }
          let contactArray=responseFromUser.contacts
          if(contactArray==null){
            contactArray=[]
            contactArray.push(contactId)
          }
          else{
            contactArray.push(contactId)
          }
          try {
            let responseforUpdate = await this.usersRepo.update(userId,{contacts:contactArray})
          } catch (error) {
            console.log(error);
          }
        
        let tagIds=contact.tags
        let userTag= await this.usersRepo.findOne({where:{userid:userId}})
        var userTagids = userTag.tags
        tagIds.forEach(async (tagId) => {
          if(!(userTagids.includes(tagId))){
            userTagids.push(tagId)
          }
            })
          console.log(userTagids);
          try {
            let response= await this.usersRepo.update(userId,{tags:userTagids})
          } catch (error) {
            console.log(error);
          }
        return {
          'Status':'Success',
          'Message':'contact saved',
          'data':{userId,contactId},
        }
      } catch (err) {
        console.log(err);
        return  {
          'Status':'failed',
          'Message':'contact not saved'
        }
      }
    }
    async allContact(allContact){
      try {
        let user=allContact.userid
        let contacts=[]
            let contactIdsfromUser = await this.usersRepo.findOne({where:{userid:user},select:['contacts']})
            console.log("contact ids",contactIdsfromUser);
            for (let contactid of contactIdsfromUser.contacts) {
              contacts.push(await this.contactRepo.findOne({where:{contactid:contactid}}))
            }
          return{ 
              'Status':'Success',
              'Message':'fetched all contacts successfully',
              'data':contacts
            }
      } catch (err) {
        console.log(err);
        return err
      }
    }
    async contactById(contactbyId){
      try {
        let contactId=contactbyId.contactid
        let contact=[]
        contact.push(await this.contactRepo.findOne({where:{contactid:contactId}}))
        return{
          'Status':'Success',
          'Message':'fetched  contact successfully',
          'data': contact
        }
      } catch (error) {
        console.log(error);
        return error
      }
    }
    async addTag(tagname){
      try {
        let tagId = `t_${uid()}`
        try{
          let response= await this.tagsRepo.insert({tagid:tagId,...tagname})
        }
       catch(err){
        console.log(err);
       }
       return tagId
      } catch (error) {
        throw error;
      }
    }
    async getAllTags(user){
      try {
        let tags=[]
        let userTagids 
        let userId = user.userid
        try {
          userTagids  = await this.usersRepo.findOne({where:{userid:userId}})
        } catch (error) {
          console.log(error);
        }
        console.log(userTagids);
        for (let tagId of userTagids.tags){
          let response= await this.tagsRepo.findOne({where:{tagid:tagId}})
          tags.push(response)
        }
         console.log(tags);
         return tags
      } catch (error) {
        console.log(error);
      }
    }
 }

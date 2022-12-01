import { Injectable } from '@nestjs/common';
import {
  UserRepository,
  ContactsRepository,
  TagsRepository,
} from './app.entity';
import {
  SignUpDetails,
  //LogInCredentials,
  AddContactDetails,
} from '../src/utils/app.interface';
import { ResponseObj } from './utils/response-object';
import { Logger } from '@nestjs/common';
import { NetworkLogger } from './utils/networkLogger';

@Injectable()
export class AppService {
  private readonly logger: NetworkLogger;
  constructor(
    private readonly userRepo: UserRepository,
    private readonly contactsRepo: ContactsRepository,
    private readonly tagsRepo: TagsRepository,
  ) {
    this.logger = new NetworkLogger(new Logger('APP_SERVICE'));
  }

  async signUp(data: SignUpDetails): Promise<any> {
    try {
      this.logger.log(`Signup endpoint called with data: ${data}`);
      const passwordRegex = /^(?=.*[A-Za-z!@#$%&*^])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (passwordRegex.test(data.password)) {
        await this.userRepo
          .create({
            emailId: data.emailId,
            userName: data.userName,
            password: data.password,
          })
          .save();
        const createdUserId = await this.userRepo.findOne({
          where: { userName: data.userName },
          select: { userId: true },
        });
        this.logger.log('Account created successfully.');
        return ResponseObj(
          'SUCCESS',
          'Account created successfully',
          createdUserId,
        );
      } else if (!passwordRegex.test(data.password)) {
        throw 'Password must contain an Upper case, Lower case, number and a minimum of 8 characters.';
      }
    } catch (error) {
      this.logger.logError(
        `Errored while signing up with message: ${error.message}`,
      );
      return ResponseObj('ERROR', `${error}`);
    }
  }

  async addContactOfUser(data: AddContactDetails): Promise<any> {
    try {
      this.logger.log(`Add contact of user called with data: ${data}`);
      console.log('Tags', data.tags);
      await this.contactsRepo
        .create({
          userId: data.userId,
          fullName: data.fullName,
          place: data.place,
          contactNumber: data.contactNumber,
          instagram: data.instagram,
          facebook: data.facebook,
          linkedIn: data.linkedIn,
          photo: data.photo,
          description: data.description,
          tags: data.tags,
        })
        .save();

      const incomingTags = data.tags;
      const tagIdsArray = [];

      for (let i = 0; i < incomingTags.length; i++) {
        const tagId = await (
          await this.tagsRepo.findOne({
            where: { tagName: data.tags[i] },
          })
        ).tagId;
        tagIdsArray.push(tagId);
      }
      console.log('tagIdsArray', tagIdsArray);

      const queriedContactId = await (
        await this.contactsRepo.findOne({
          where: { contactNumber: data.contactNumber },
          select: ['contactId'],
        })
      ).contactId;
      console.log('queriedContactId', queriedContactId);

      await this.contactsRepo
        .createQueryBuilder()
        .update()
        .set({ tags: tagIdsArray })
        .where({ contactId: queriedContactId })
        .execute();

      const contactsArray = await this.userRepo.findOne({
        where: { userId: data.userId },
        select: ['contacts'],
      });

      //  If the array is null, a new array should be initialized and contact should be pushed inside that array..
      console.log('contactsArray', contactsArray);

      if (contactsArray !== null) {
        const contactsArrayInUserRepo = contactsArray.contacts;
        contactsArrayInUserRepo.push(queriedContactId);

        await this.userRepo
          .createQueryBuilder()
          .update()
          .set({ contacts: contactsArrayInUserRepo })
          .where({ userId: data.userId })
          .execute();

        this.logger.log(`Contact added successfully.`);
        return ResponseObj('SUCCESS', 'Contact added successfully', {
          userId: data.userId,
          contactId: queriedContactId,
        });
        //const createdContactArray = queriedContactId.push(contactsArray);
      } else if (contactsArray == null) {
        await this.userRepo
          .createQueryBuilder()
          .update()
          .set({ contacts: [queriedContactId] })
          .where({ userId: data.userId })
          .execute();

        this.logger.log(`Contact added successfully.`);
        return ResponseObj('SUCCESS', 'Contact added successfully', {
          userId: data.userId,
          contactId: queriedContactId,
        });
      }
    } catch (error) {
      this.logger.logError(
        `Errored while adding contact with message: ${error.message}`,
      );
      return ResponseObj('ERROR', `${error}`);
    }
  }
  async getAllContactsOfUser(incomingData) {
    try {
      this.logger.log(
        `Get all contacts of user called with data: ${incomingData}`,
      );
      const contactsArrayInDb = await this.contactsRepo.find({
        where: { userId: incomingData.userId },
        select: {
          userId: true,
          fullName: true,
          place: true,
          instagram: true,
          facebook: true,
          linkedIn: true,
          photo: true,
          description: true,
          tags: true,
        },
      });
      console.log(contactsArrayInDb);

      if (contactsArrayInDb.length == 0) {
        throw `No contacts found.`;
      } else {
        this.logger.log('All contacts fetched successfully.');
        return ResponseObj(
          'SUCCESS',
          'All contacts fetched successfully.',
          contactsArrayInDb,
        );
      }
    } catch (err) {
      this.logger.logError(
        `Errored while getting all contacts of user with message: ${err.message}`,
      );
      return ResponseObj('ERROR', `${err}`);
    }
  }

  async getContactById(contactDetails) {
    try {
      this.logger.log(`Get contact by id called with data: ${contactDetails}`);
      console.log(contactDetails);
      const fetchedContactFromDb = await this.contactsRepo.findOne({
        where: {
          contactId: contactDetails.contactId,
        },
      });

      if (fetchedContactFromDb != null) {
        this.logger.log(`Contact fetched successfully.`);
        return ResponseObj(
          'SUCCESS',
          'Contact fetched successfully.',
          fetchedContactFromDb,
        );
      } else {
        throw 'ContactId is invalid.';
      }
    } catch (e) {
      this.logger.logError(
        `Errored while fetching contact with message: ${e.message}`,
      );
      return ResponseObj('ERROR', `${e}`);
    }
  }

  async createTagOfUser(tagDetails) {
    try {
      this.logger.log(`Create tag of user called with data: ${tagDetails}`);
      await this.tagsRepo
        .create({
          tagName: tagDetails.tagName,
        })
        .save();

      const tagsArray = await this.userRepo.findOne({
        where: { userId: tagDetails.userId },
        select: ['tags'],
      });
      console.log('tagsArray', tagsArray);

      const tagId = await (
        await this.tagsRepo.findOne({
          where: { tagName: tagDetails.tagName },
        })
      ).tagId;
      console.log('tagId', tagId);

      if (tagsArray == null) {
        await this.userRepo
          .createQueryBuilder()
          .update()
          .set({ tags: [tagId] })
          .where({ userId: tagDetails.userId })
          .execute();

        this.logger.log(`Tag saved successfully.`);
        return ResponseObj('SUCCESS', 'Tag saved successfully.', {
          tagId: tagId,
        });
      } else if (tagsArray != null) {
        const tagsArrayInUserRepo = tagsArray.tags;
        tagsArrayInUserRepo.push(tagId);
        await this.userRepo
          .createQueryBuilder()
          .update()
          .set({ tags: tagsArrayInUserRepo })
          .where({ userId: tagDetails.userId })
          .execute();

        this.logger.log(`Tag saved successfully.`);
        return ResponseObj('SUCCESS', 'Tag saved successfully.', {
          tagId: tagId,
        });
      }
    } catch (e) {
      this.logger.logError(
        `Errored while creating a tag of user with message: ${e.message}`,
      );
      return ResponseObj('ERROR', `${e.message}`);
    }
  }
  async getAllTagsOfUser(userDetails) {
    try {
      this.logger.log(`Get all tags of user called with data: ${userDetails}`);
      const incomingUserId = userDetails.userId;
      const tagIdsArrayInDb = await this.userRepo.findOne({
        where: { userId: incomingUserId },
        select: ['tags'],
      });
      console.log(tagIdsArrayInDb);

      this.logger.log(`Tags fetched successfully.`);
      return ResponseObj('SUCCESS', 'Tags fetched successfully.', {
        tags: tagIdsArrayInDb,
      });
    } catch (e) {
      this.logger.logError(
        `Errored while getting all tags of user with message: ${e.message}`,
      );
      return ResponseObj('ERROR', `${e.message}`);
    }
  }
}

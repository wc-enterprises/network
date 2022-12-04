import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Contacts, Relations, Tags, Users } from './app.entity';
import { v4 as uid } from 'uuid';
import { commonTags, responseObj } from './utils/util';
import { error } from './utils/error-codes';
import {
  AddContactDto,
  AddTagDto,
  LoginCred,
  Response,
  SignUpData,
} from './utils/interfaces';

@Injectable()
export class AppService {
  private logger;
  constructor(
    @InjectRepository(Users)
    private usersRepo: Repository<Users>,
    @InjectRepository(Contacts)
    private contactRepo: Repository<Contacts>,
    @InjectRepository(Tags)
    private tagsRepo: Repository<Tags>,
    @InjectRepository(Relations)
    private relationsRepo: Repository<Relations>
  ) {
    this.logger = new Logger('APP_SERVICE');
  }

  /**
   * Auth APIs.
   */
  async signUp(
    signupData: SignUpData
  ): Promise<ReturnType<typeof responseObj>> {
    try {
      this.logger.log(
        `singUp data called with data ${JSON.stringify(signupData)}`
      );
      const userId = `u_${uid()}`;

      const usernameTaken = await this.usersRepo.findOne({
        where: {
          name: signupData.username,
        },
      });
      if (usernameTaken) return responseObj('ERROR', error.usernameTaken);

      await this.usersRepo.insert({
        id: userId,
        ...signupData,
        name: signupData.username,
      });

      return responseObj('SUCCESS', `Account created successfully`, { userId });
    } catch (err) {
      this.logger.error(`Unhandled error occured. ${err.message}`);
      return responseObj('ERROR', error.unhandledError);
    }
  }

  async login(loginData: LoginCred): Promise<ReturnType<typeof responseObj>> {
    try {
      let user: Users;
      if (loginData.email) {
        user = await this.usersRepo.findOne({
          where: {
            email: loginData.email,
            password: loginData.password,
          },
        });
      } else {
        user = await this.usersRepo.findOne({
          where: {
            name: loginData.username,
            password: loginData.password,
          },
        });
      }

      if (!user) return responseObj('ERROR', error.invalidCred);

      return responseObj('SUCCESS', `Login successful`, {
        userId: user.id,
      });
    } catch (err) {
      this.logger.error(`Unhandled error occured. ${err.message}`);
      return responseObj('ERROR', error.unhandledError);
    }
  }

  /**
   * Contact APIs
   */
  private async _throwIfInvalidUser(userId: string) {
    // eslint-disable-next-line no-useless-catch
    try {
      const user = await this.usersRepo.findOne({
        where: { id: userId },
      });
      if (!user) throw responseObj('ERROR', error.invalidId('userId'));
    } catch (err) {
      throw err;
    }
  }

  async addContactToUser(data: AddContactDto): Promise<Response> {
    try {
      this.logger.log(
        `addContactToUser called with data ${JSON.stringify(data)}`
      );
      const { userId, ...contact } = data;

      await this._throwIfInvalidUser(userId);

      //Insert contact to contact table
      const res = await this.contactRepo.save({
        id: `c_${uid()}`,
        ...contact,
      });

      //Link contact to user
      await this.relationsRepo.insert({
        id1: userId,
        id2: res.id,
        relation: 'user_contact',
      });

      return responseObj('SUCCESS', `Contact saved successfully`, {
        contactId: res.id,
      });
    } catch (err) {
      this.logger.error(
        `Unhandled error occured while adding contact ${err.message}`
      );
      if (err.status === 'ERROR') return err;
      return responseObj('ERROR', error.unhandledError);
    }
  }

  async getAllContactsOfUser(userId: string) {
    try {
      this.logger.log(`getAllContactsOfUser called for user ${userId}`);

      await this._throwIfInvalidUser(userId);

      const userContactRelations = await this.relationsRepo.find({
        where: [
          {
            id1: userId,
            relation: 'user_contact',
          },
          {
            id2: userId,
            relation: 'user_contact',
          },
        ],
      });

      if (!userContactRelations || userContactRelations.length === 0)
        return responseObj('SUCCESS', `No contacts for user.`, []);

      const contactIds = userContactRelations.map((item) => {
        if (item.id1 === userId) return item.id2;
        return item.id1;
      });

      const contacts = await this.contactRepo.find({
        where: {
          id: In(contactIds),
        },
      });

      return responseObj(
        'SUCCESS',
        `Fetched contacts of user successfully`,
        contacts
      );
    } catch (err) {
      this.logger.error(
        `Unhandled error occured while adding contact ${err.message}`
      );
      if (err.status === 'ERROR') return err;
      return responseObj('ERROR', error.unhandledError);
    }
  }

  async addTagForUser(data: AddTagDto): Promise<Response> {
    try {
      this.logger.log(`addTagForUser called with data ${JSON.stringify(data)}`);

      await this._throwIfInvalidUser(data.userId);

      //Add new tag in tags table if not present already
      let tagId;
      const tagAlreadyPresent = await this.tagsRepo.findOne({
        where: {
          name: data.tagName,
        },
      });

      if (tagAlreadyPresent) {
        tagId = tagAlreadyPresent.id;
        //Link user with the incoming tag if not already linked.
        const userTagRelated = await this.relationsRepo.find({
          where: [
            {
              id1: tagId,
              id2: data.userId,
              relation: 'user_tag',
            },
            {
              id1: data.userId,
              id2: tagId,
              relation: 'user_tag',
            },
          ],
        });

        if (userTagRelated)
          return responseObj('SUCCESS', `Tag added to user already.`, {
            tagId,
          });
      }

      // If tag not present
      else {
        tagId = `t_${uid()}`;
        await this.tagsRepo.insert({
          id: tagId,
          name: data.tagName,
        });
      }

      await this.relationsRepo.insert({
        id1: data.userId,
        id2: tagId,
        relation: 'user_tag',
      });

      return responseObj('SUCCESS', `Tag added successfully`, { tagId });
    } catch (err) {
      this.logger.error(
        `Unhandled error occured while adding tag. ${err.message}`
      );
      return responseObj('ERROR', error.unhandledError);
    }
  }

  async getTagsOfUser(data: { userId: string }): Promise<Response> {
    try {
      const user = await this.usersRepo.findOne({
        where: { id: data.userId },
      });

      if (!user) return responseObj('ERROR', error.invalidId('userId'));

      let userTags = [];

      const userTagsRelations = await this.relationsRepo.find({
        where: [
          { id1: data.userId, relation: 'user_tag' },
          { id2: data.userId, relation: 'user_tag' },
        ],
      });

      if (userTagsRelations && userTagsRelations.length > 0) {
        const userTagsIds = userTagsRelations.map((item) => {
          if (item.id1 === data.userId) return item.id2;
          return item.id1;
        });

        userTags = await this.tagsRepo.find({
          where: {
            id: In(userTagsIds),
          },
          select: ['id', 'name'],
        });
      }

      return responseObj('SUCCESS', `User tags fetched successfully`, [
        ...commonTags,
        ...userTags,
      ]);
    } catch (err) {
      this.logger.error(
        `Unhandled error occured while fetching tags of user. ${err.message}`
      );
      return responseObj('ERROR', error.unhandledError);
    }
  }
}

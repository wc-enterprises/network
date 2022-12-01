import { SetMetadata } from '@nestjs/common';
import {
  Entity,
  Column,
  BaseEntity,
  Repository,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public userId: string;

  @Column()
  public emailId: string;

  @Column()
  public userName: string;

  @Column()
  public password: string;

  @Column('simple-array')
  public contacts: string[];

  @Column('simple-array', { nullable: true, array: true })
  public tags: string[];
}

@Entity('contacts')
export class Contacts extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public contactId: string;

  @Column()
  @Column()
  public userId: string;

  @Column()
  public fullName: string;

  @Column({ nullable: true })
  public place: string;

  @Column({ nullable: true })
  public contactNumber: string;

  @Column({ nullable: true })
  public instagram: string;

  @Column({ nullable: true })
  public facebook: string;

  @Column({ nullable: true })
  public linkedIn: string;

  @Column({ nullable: true })
  public photo: string;

  @Column({ nullable: true })
  public description: string;

  @Column('simple-array', { array: true, nullable: true })
  public tags: string[];
}

@Entity('tags')
export class Tags extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public tagId: string;

  @Column()
  public tagName: string;
}

@CustomRepository(User)
export class UserRepository extends Repository<User> {}

@CustomRepository(Contacts)
export class ContactsRepository extends Repository<Contacts> {}

@CustomRepository(Tags)
export class TagsRepository extends Repository<Tags> {}

export const TYPEORM_EX_CUSTOM_REPOSITORY = 'TYPEORM_EX_CUSTOM_REPOSITORY';

// eslint-disable-next-line @typescript-eslint/ban-types
export function CustomRepository(entity: Function): ClassDecorator {
  return SetMetadata(TYPEORM_EX_CUSTOM_REPOSITORY, entity);
}

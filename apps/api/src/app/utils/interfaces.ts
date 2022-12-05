import { responseObj } from './util';

export type Response = ReturnType<typeof responseObj>;

export interface LoginCred {
  email?: string;
  username?: string;
  password: string;
}

export interface SignUpData {
  email: string;
  username: string;
  password: string;
}

export interface AddTagDto {
  userId: string;
  tagName: string;
}

export interface AddContactDto {
  userId: string;
  fullName: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  description?: string;
  contactno?: string;
  place?: string;
  photo?: string;
  tags: string[];
}

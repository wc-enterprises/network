export interface SignUpDetails {
  emailId: string;
  userName: string;
  password: string;
}

export interface LogInCredentials {
  userId: string;
  userName: string;
  password: string;
}

export interface AddContactDetails {
  userId: string;
  fullName: string;
  place: string;
  contactNumber: string;
  instagram: string;
  facebook: string;
  linkedIn: string;
  photo: string;
  description: string;
  tags: string[];
}

export interface responseFormat {
  status: string;
  message: string;
  data: any;
  warnings: any;
}

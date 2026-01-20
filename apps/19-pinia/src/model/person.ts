export type Person = {
  id: string;
  photo: string;
  firstname: string;
  lastname: string;
  entity: string;
  entryDate: string;
  birthDate: string;
  gender: string;
  email: string;
  skills: string[];
  geo: {
    lat: number;
    lng: number;
  };
  phone: string;
  address: {
    street: string;
    postalCode: number;
    city: string;
  };
  links: {
    twitter: string;
    slack: string;
    github: string;
    linkedin: string;
  };
  isManager: boolean;
  manager: string;
  managerId: string;
};

export type PersonForm = Pick<Person, 'id' | 'firstname' | 'lastname' | 'photo' | 'email' | 'phone'>;

export const DEFAULT_PERSON: Person = {
  id: '',
  photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
  email: '',
  firstname: '',
  lastname: '',
  phone: '',
} as Person;

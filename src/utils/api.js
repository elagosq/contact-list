import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import capitalize from '../utils/capitalize';

const mapContact = contact => {
  const {
    name, picture, phone, cell, email,
  } = contact;

  return {
    id: uuidv4(),
    name: `${capitalize(name.first)} ${capitalize(name.last)}`,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() >= 0.5, // randomly generate favorite contacts
  };
};

export const fetchContacts = async () => {
  const response = await fetch('https://randomuser.me/api/?results=100&seed=fullstackio');
  const contactData = await response.json();
  
  return contactData.results.map(contact => mapContact(contact));
 
};


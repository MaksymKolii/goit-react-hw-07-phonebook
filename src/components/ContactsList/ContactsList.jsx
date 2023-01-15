import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactItem/ContactItem';
import { ListUl } from './ContactList.styled';

// import {selectContactsOptions} from'../../redux/contacts/contacts-selectors'
//* re export
import { contactsSelectors } from 'redux/contacts';

export const ContactsList = () => {
  const options = useSelector(contactsSelectors.selectContactsOptions);
  return (
    <ListUl>
      {options.map(option => (
        <ContactListItem key={option.id} {...option} />
      ))}
    </ListUl>
  );
};

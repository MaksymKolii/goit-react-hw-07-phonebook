import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactItem/ContactItem';
import { ListUl } from './ContactList.styled';
import {
  selectContacts,
  selectStatusFilter,
} from '../../redux/contacts/contacts-selectors';
// import { deleteContact } from 'redux/contacts/contacts-operations';

export const ContactsList = () => {
  // const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  // const isDeleting = useSelector(selectIsLoading);
  const filterInput = useSelector(selectStatusFilter);
  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterInput)
  );

  const showContactsOptions = () => {
    return filterInput ? getFilteredContacts : contacts;
  };

  const options = showContactsOptions();
  return (
    <ListUl>
      {options.map(option => (
        <ContactListItem key={option.id} {...option} />
      ))}
    </ListUl>
  );
};

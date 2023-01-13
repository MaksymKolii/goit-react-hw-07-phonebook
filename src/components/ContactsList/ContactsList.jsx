import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectStatusFilter,
} from '../../redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filterInput = useSelector(selectStatusFilter);
  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterInput)
  );

  const showContactsOptions = () => {
    return filterInput ? getFilteredContacts : contacts;
  };

  const options = showContactsOptions();
  return (
    <ul>
      {options.map(({ createdAt, name, phone, id }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{phone}</p>
          <p>{createdAt}</p>
          <p>{id}</p>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

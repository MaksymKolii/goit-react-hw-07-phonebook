import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  return (
    <ul>
      {contacts.map(({ createdAt, name, phone, id }) => (
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

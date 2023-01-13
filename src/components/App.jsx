import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from './Button/Button';
import { ContactForm } from './ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  const [isListShown, setIsListShown] = useState(false);
  const [isFormShown, setFormShown] = useState(false);
  const dispatch = useDispatch();

  const showContactsList = () => {
    setIsListShown(true);
    dispatch(fetchContacts());
  };

  const showForm = () => {
    setFormShown(true);
  };

  const closeForm = () => {
    setFormShown(false);
  };
  return (
    <>
      {/* {isFormShown && <ContactForm />} */}
      {/* <Button text="Add contact" clickHandler={showForm}></Button> */}

      {isListShown ? (
        <>
          {' '}
          {!isFormShown && (
            <Button text="Add contact" clickHandler={showForm}></Button>
          )}
          {isFormShown && <ContactForm closeForm={closeForm} />}
          <ContactsList />
        </>
      ) : (
        <Button text="Show contacts" clickHandler={showContactsList}></Button>
      )}
    </>
  );
};

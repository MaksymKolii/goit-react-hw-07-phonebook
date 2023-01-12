import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "./Button/Button";
import { ContactForm } from "./ContactForm/ContactForm";
import { fetchContacts } from "redux/contacts/contacts-operations";
import { ContactsList } from "./ContactsList/ContactsList";

export const App = () => {

  // const{contacts, setContacts} = useState([])
  const [isListShown, setIsListShown] = useState(false)
  const dispatch = useDispatch()

  const showContactsList = ()=>{
    setIsListShown(true)
    dispatch(fetchContacts())

  }
  return (
    <>{isListShown && <ContactsList/>}
    <ContactForm/>
      <Button text='Show contacts' clickHandler ={showContactsList}></Button>
    </>
  );
};

import { useState } from "react";
import { Button } from "./Button/Button";
import { ContactForm } from "./ContactForm/ContactForm";

export const App = () => {

  const{contacts, setContacts} = useState([])
  const {isListShown, setIslistShown} = useState(false)

  const showContactsList = ()=>{
    setIslistShown(true)

  }
  return (
    <>
    <ContactForm/>
      <Button text='Show contacts' clickHandler ={showContactsList}></Button>
    </>
  );
};

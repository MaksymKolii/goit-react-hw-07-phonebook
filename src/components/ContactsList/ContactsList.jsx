import { useSelector } from "react-redux"
import {getContacts} from '../../redux/contacts/contacts-selectors'

export const ContactsList =()=>{

    const contacts = useSelector(getContacts)
    return <ul>
        {contacts.map(({createdAt, name, phone,id})=>(
            <li key={id}>
                <p>{name}</p>
                <p>{phone}</p>
                <p>{createdAt}</p>
            </li>
        ))}
    </ul>
}
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <>
            <ul className={s.wrapperList}>
                {contacts.map((contact) => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                        onDeleteContact={onDeleteContact}
                    />
                ))}
            </ul>
        </>
    );
};
export default ContactList;

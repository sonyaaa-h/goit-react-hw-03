import s from "./Contact.module.css";
import { IoMdContact } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = ({ contact, onDeleteContact }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.contactInfo}> 
                <div className={s.iconWrapper}>
                <IoMdContact className={s.icon} size={22} />
                <p>{contact.name}</p>
                </div>
                <div className={s.iconWrapper}>
                <FaPhoneVolume className={s.icon} size={20} />
                <p>{contact.phone}</p>
                </div>
            </div>
            <button className={s.button} onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </div>
    );
};
export default Contact;

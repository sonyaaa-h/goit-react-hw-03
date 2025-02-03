import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// import s from "./App.modul.css";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) ?? [
      { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
      { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
    ]
  );

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const addContact = (contact) => {
    const isDuplicate = contacts.some(
      (c) => c.name.toLowerCase() === contact.name.toLowerCase() || c.phone === contact.phone
    );

    iziToast.settings({
      timeout: 2000,
      position: 'topRight',
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
  });

    // Якщо контакт вже існує, показуємо повідомлення
    if (isDuplicate) {
      iziToast.warning({
        title: 'Warning',
        message: 'This contact already exists.',
      });
      return;
    }

    setContacts((prev) => [...prev, contact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      {contacts.length > 0 ? (
        <SearchBox value={filter} onChange={setFilter} />
      ) : (
        <p className="notFound">No contacts found.</p>)}
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Contact from './Contact';

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    const fetchContacts = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/users');
      setContacts(result.data);
    };
    fetchContacts();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        {contacts.map((contact) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={contact.id}>
            <Contact contact={contact} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactsList;

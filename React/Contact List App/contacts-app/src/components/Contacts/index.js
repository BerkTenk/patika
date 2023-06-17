import React, { useEffect, useState } from 'react';
import "./styles.css"; 
import  List from "./List";
import  Form from "./Form";

function Contacts() {
    const [contacts, setContacts] = useState([
      {
        fullname:"Berk",
        phone_number:"123456"
      },
      {
        fullname:"Mert",
        phone_number:"125874"
      },
      {fullname:"Begüm",
      phone_number:"963258"
    }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

  return (
    <div id='container'>
      <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts
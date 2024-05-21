import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import EditComponent from "./components/EditComponent.jsx";
import ContactList from "./components/ContactList";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactDetail from "./components/ContactDetail";
import api from "./api/contacts.js";

const App = () => {
  const LOCAL_STORAGE_KEY = "contact";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]); 

  const searchHandler = (searchTerm) => {
      setSearchTerm(searchTerm);
      if(searchTerm != '') {
        const newContactList = contacts.filter((contact) => {
          return Object.values(contact).join(" ").toLowerCase().includes(searchTerm)
        })
        setSearchResults(newContactList)
      }else{
        setSearchResults(contacts)
      }
  }
  //prop as function
  const addContactHandeler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };
    const response = await api.post("/contacts", request);

    // setContacts([...contacts, { id: uuidv4(), ...contact }]);
    setContacts([...contacts, response.data]);
  };

  const editContactHandeler = async (contact) => {
      const response = await api.put(`/contacts/${contact.id}`, contact); 
      const {id,name,email} = response.data; 

      setContacts(
        contacts.map((contact) => {
          return contact.id === id ? {...response.data} : contact
        })
      )
  };

  const removeContactHandeler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  //retrive data from json server
  const retriveContacts = async () => {
    const response = await api.get("/contacts");

    return response.data;
  };

  useEffect(() => {
    //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //   console.log(retriveContacts);
    //   if (retriveContacts) setContacts(retriveContacts);

    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={searchTerm.length < 1 ? contacts : searchResults} 
                getContactId={removeContactHandeler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandeler={addContactHandeler} />}
          />
          <Route
            path="/edit"
            element={
              <EditComponent editContactHandeler={editContactHandeler} />
            }
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

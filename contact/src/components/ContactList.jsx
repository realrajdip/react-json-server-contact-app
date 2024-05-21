import React,{useRef} from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const ContactList = (props) => {
  const inputEl = useRef("");
  const deleteContactHandeler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = () => {
    return props.contacts.map((contact, index) => {
      return (
        <ContactCard
          contact={contact}
          key={index}
          clickHandeler={deleteContactHandeler}
        ></ContactCard>
      );
    });
  }; 
  const getSearchTerm = () => {
      //inputEl.current.value === e.target.value 
      props.searchKeyword(inputEl.current.value); //searchTerm
  }
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="flex w-[30rem] justify-between items-center">
        <h2 className="text-3xl text-center font-semibold py-6">
          Contact List
        </h2>
        <Link to={'/add'}><button className="bg-blue-500 py-4 px-6 text-xl text-white rounded-md hover:bg-blue-400">Add Contact</button></Link>
      </div>

      <div className="flex justify-between items-center mt-5 h-12 w-[32rem] text-xl px-4 outline outline-2 outline-offset-2 rounded-md outline-gray-300 focus-within:outline-blue-500 mb-5">
        <input ref={inputEl} type="text" placeholder="Search Contacts" className="flex-1 h-full px-2 border-none outline-none text-xl" value={props.term} onChange={getSearchTerm}/>
        <IoSearch style={{
          fontSize: '1.8rem',
          cursor: 'pointer',
        }}/>
      </div>

      <div>{renderContactList()}</div>
    </div>
  );
};

export default ContactList;

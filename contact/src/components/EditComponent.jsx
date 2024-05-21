import React,{useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditComponent = ({ editContactHandeler }) => {
  let { state } = useLocation();
  let id = state.contact.id; 
  const [name, setName] = useState(state.contact.name);
  const [email, setEmail] = useState(state.contact.email);
  const navigate = useNavigate();

  const edit = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("Fill the form correctly!");
      return;
    }
    editContactHandeler({ name, email,id  });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-start items-center">
      <h2 className="text-3xl text-center font-semibold py-5">Edit Contact</h2>
      <form onSubmit={edit}>
        <div className="flex flex-col justify-start items-center">
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            value={name}
            className="h-16 w-[30rem] text-xl px-4 outline outline-2 outline-offset-2 rounded-md outline-gray-300 focus:outline-blue-500 mb-5"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            className="h-16 w-[30rem] text-xl px-4 outline outline-2 outline-offset-2 rounded-md outline-gray-300 focus:outline-blue-500 mb-5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-500 py-4 px-6 text-xl text-white rounded-md hover:bg-blue-400"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditComponent;

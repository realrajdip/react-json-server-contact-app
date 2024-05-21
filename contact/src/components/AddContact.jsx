// import React from "react";
// import { useNavigate } from "react-router-dom";

// class AddContact extends React.Component {
//   state = {
//     name: "",
//     email: "",
//   };

//   add = (e) => {
//     e.preventDefault();

//     if (this.state.name === "" || this.state.email === "") {
//       alert("Fill the form correctly!");
//       return;
//     }
//     this.props.addContactHandeler(this.state);
//     this.setState({ name: "", email: "" });
//     //for class components
//     // this.props.history.push('/');  //not working
//     // this.props.history.push("/");
//     //for fnc components
//     //import { useHistory } from 'react-router-dom';
//     // const history = useHistory()
//     console.log(this.props);
//   };

//   render() {
//     return (
//       <div className="flex flex-col justify-start items-center">
//         <h2 className="text-3xl text-center font-semibold py-5">Add Contact</h2>
//         <form onSubmit={this.add}>
//           <div className="flex flex-col justify-start items-center">
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter Name"
//               value={this.state.name}
//               className="h-16 w-[30rem] text-xl px-4 outline outline-2 outline-offset-2 rounded-md outline-gray-300 focus:outline-blue-500 mb-5"
//               onChange={(e) => this.setState({ name: e.target.value })}
//             />

//             <input
//               type="email"
//               id="email"
//               placeholder="Enter Email"
//               className="h-16 w-[30rem] text-xl px-4 outline outline-2 outline-offset-2 rounded-md outline-gray-300 focus:outline-blue-500 mb-5"
//               value={this.state.email}
//               onChange={(e) => this.setState({ email: e.target.value })}
//             />

//               <button
//                 type="submit"
//                 className="bg-blue-500 py-4 px-6 text-xl text-white rounded-md hover:bg-blue-400"
//               >
//                 Add
//               </button>

//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddContact;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({addContactHandeler}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("Fill the form correctly!");
      return;
    }
    addContactHandeler({name, email});
    setName('')
    setEmail('')
    navigate('/')
  };

  return (
    <div className="flex flex-col justify-start items-center">
      <h2 className="text-3xl text-center font-semibold py-5">Add Contact</h2>
      <form onSubmit={add}>
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
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;

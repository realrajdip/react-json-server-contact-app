import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import User from "../assets/user.png";
import { Link } from "react-router-dom";
import { RiEditCircleFill } from "react-icons/ri";

const ContactCard = (props) => {
  let { id, name, email } = props.contact;
  return (
    <div className="px-4 w-full border-b-2 flex justify-between items-center text-2xl gap-20 py-5">
      <div className="flex justify-between items-center gap-4">
        <img src={User} alt="user" className="h-[50px]" />
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div className="">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <a href={`mailto:${email}`}>
              <h3 className="text-blue-600">{email}</h3>
            </a>
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center gap-5">
        <Link to={"/edit"} state={{ contact: props.contact }}>
          <RiEditCircleFill
            style={{
              color: "blue",
              cursor: "pointer",
              fontSize: "1.9rem",
            }}
            // onClick={() => props.clickHandeler(id)}
          />
        </Link>

        <FaTrashAlt
          style={{
            color: "red",
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
          onClick={() => props.clickHandeler(id)}
        />
      </div>
    </div>
  );
};

export default ContactCard;

import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import profile from '../assets/profile.jpg'
const ContactDetail = (props) => {
  // const {name, email} = props.location.state.contact; 
  // console.log(props);
  let { state } = useLocation();
  const { name, email } = state.contact; 
  return (
    <div className='w-full h-full flex flex-col  justify-center items-center py-20'>
      <div className='p-4 border-4 rounded-md'>
        <div className="img ">
          <img src={profile} alt="profile" className='shadow-md h-[24rem] border-2 rounded-md' />
        </div>
        <div className="content">
          <div className='mt-4 text-2xl font-semibold'>{name}</div>
          <div className='text-xl'>{email}</div>
        </div>
      </div>

     <Link to={'/'}>
     <button className="mt-6 bg-blue-500 py-4 px-6 text-xl text-white rounded-md hover:bg-blue-400">Go Back</button>
     </Link>
    </div>
  )
}

export default ContactDetail

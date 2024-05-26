import React from 'react'
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const phoneNumber = '+971 563364437';
 const email = 'pkramees5@gmail.com';
 const githubUrl = 'https://github.com/Rameespk424';
 const linkedinUrl = 'https://www.linkedin.com/in/ramees-pk-28303b1b0/';
 const resumeUrl = 'https://drive.google.com/file/d/1HjBkiCBZbFDu9N3qmdfmvkYQMrWkrMQt/view?usp=sharing';


const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
   if("e",e.target[0].value || "e",e.target[1].value || "e",e.target[2].value === ""){
    toast("Please fill the form completely!👀", {
      style:{
      color: "red",
      }
    })
    return
   }
  emailjs.sendForm('service_ojq4n7a', 'template_f5c9taf', form.current, '63MxNaOEf6QVLLdOj')
  .then((result) => {
   
    toast.success("Message was sent successfully")
    e.target.reset()
      console.log(result.text);
  }, (error) => {
    toast.error("Something went wrong!!")
    console.log(error.text);
  });



    
  };

 

  return (
    <div name='contact' className='w-full h-auto min-h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4'>
      <div><Toaster/></div>
      
        <form  ref={form}  onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-700 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - <a href={`mailto:${email}`}>{email}</a></p>
            </div>
            <input className='placeholder-gray-600 bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='from_name' />
            <input className='placeholder-gray-600 my-4 p-2 bg-[#ccd6f6]' name={""} type="email" placeholder='Email'  />
            <textarea className='bg-[#ccd6f6] p-2 placeholder-gray-600' name={"message"} rows="10" placeholder='Message'  ></textarea>
            <button className='text-white border-2 hover:bg-pink-700 hover:border-pink-700 px-4 py-3 my-8 mx-auto flex items-center' type='submit'>Let's Collaborate</button>
        </form>

        <div className="flex justify-center items-center space-x-4 text-white ">
        <a className='font-sans font-thin' href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl" />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl" />
        </a>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
          <FaFileAlt className="text-2xl" />
        </a>
      </div>
    </div>
  )
}

export default Contact
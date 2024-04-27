'use client'

import React,{useState} from 'react';
import toast from 'react-hot-toast';

const ContactSection = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message, email })
      });
  
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
  
      // Reset form fields after successful submission
      setEmail('');
      setMessage('');
  
      alert('Message sent successfully');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  

  return (
    <section id='contact' className="text-center h-screen flex flex-col justify-center">
      <div className='my-16'>
        <h2 className="text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Contact me
        </h2>
        <div className='w-full max-w-md mx-auto'>
          <p className='text-[#ADB7BE] font-bold my-4'>Your Email here</p>
          <form onSubmit={handleSubmit}>
          <input
            value={email}
            id='email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
            className="block w-full px-4 py-2 border-2 border-gray-500 rounded-md mb-4"
          />
          <p className='text-[#ADB7BE] font-bold my-4'>Your Message here</p>
          <textarea
            value={message}
            id='message'
            name='message'
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="block w-full px-4 py-2 border-2 border-gray-500 rounded-md resize-none"
            rows={4}
          ></textarea>
          <button 
          type='submit'
          className =
          'mt-10 px-5 inline-block py-2 w-full sm:w-fit rounded-full bg-sky-500 hover:bg-slate-700 text-white'>
            Submit
          </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

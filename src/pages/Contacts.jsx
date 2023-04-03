import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsTelegram } from 'react-icons/bs';
const Contacts = () => {
  return (
    <div className='w-full h-screen mx-auto text-center align-center'>
      <h1 className='mr-4 text-4xl'>
        По всем вопросам и предложениям контакты для связи
      </h1>
      <NavLink
        to='https://t.me/asynx'
        target='_blank'
        className='flex justify-center mt-10 text-8xl align-center link link-info'
      >
        <BsTelegram />
      </NavLink>
    </div>
  );
};

export default Contacts;

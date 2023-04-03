import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='mb-8 font-bold text-8xl'>Ой!</h1>
          <p className='mb-8 text-5xl'>
            404 - Страница не найдена!
          </p>
          <Link to='/' className='btn btn-primary btn-lg'>
            <FaHome className='mr-2' />
            Вернуться на домашнюю страницу!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

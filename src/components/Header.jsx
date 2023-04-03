import React from 'react';
import { Link } from 'react-router-dom';
import { SiSpacex } from 'react-icons/si';

const Header = ({ title }) => {
  return (
    <nav className='mb-12 shadow-lg navbar bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <SiSpacex className='inline pr-2 text-6xl' />
          <Link
            to='/'
            className='text-lg font-bold align-middle'
          >
            SpaceX Ships
          </Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link
              to='/contacts'
              className='btn btn-ghost btn-sm rounded-btn'
            >
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

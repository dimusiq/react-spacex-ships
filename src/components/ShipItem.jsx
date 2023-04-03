import React from 'react';
import { Link } from 'react-router-dom';

const ShipItem = ({
  ship: { name, type, id, home_port },
}) => {
  return (
    <div className='flex w-full'>
      <Link
        className='flex w-full shadow-xl card card-compact bg-base-[#22242A] hover:bg-[#22242A] rounded-lg'
        to={`/ship/${id}`}
      >
        <div className=' card-body'>
          <h2 className='text-gray-200 card-title'>
            {name}
          </h2>
          <div className='container flex-row lg:flex'>
            <div className='mr-2'>Тип</div>
            <p className='text-gray-200 '>{type}</p>
            <div className='mr-2'>Порт</div>
            <p className='text-gray-200 '>{home_port}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShipItem;

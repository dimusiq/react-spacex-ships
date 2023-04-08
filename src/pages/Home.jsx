import { useState } from 'react';
import SearchFilter from '../components/SearchFilter';
import ShipsResult from '../components/ShipsResult';
import { ReactComponent as Filters } from '../assets/filters.svg';

import { AiOutlineArrowLeft } from 'react-icons/ai';

const Home = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <label
        htmlFor='my-drawer-2'
        className='mb-5 ml-5 btn drawer-button lg:hidden'
        onClick={() => setToggle((prev) => !prev)}
      >
        {!toggle ? (
          <Filters className='w-5 h-5 mr-4 transition duration-500 ease-in-out transform' />
        ) : (
          <AiOutlineArrowLeft className='w-5 h-5 mr-5 transition duration-500 ease-in-out transform ' />
        )}
        Фильтры
      </label>
      <div className='h-full drawer drawer-mobile drawer-end'>
        <input
          id='my-drawer-2'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='flex flex-col items-start justify-center overflow-hidden drawer-content'>
          <div className='w-full h-full bg-[#151619] flex flex-col-reverse sm:flex sm:flex-row overflow-hidden'>
            <ShipsResult />
          </div>
        </div>
        <div className='drawer-side'>
          <label
            htmlFor='my-drawer-2'
            className='drawer-overlay'
          ></label>
          <ul className='h-[400px] sm:h-screen overflow-hidden rounded-lg sm:w-screen menu md:w-80 bg-base-100 md:visible text-base-content'>
            <div className='overflow-hidden '>
              <SearchFilter />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
  {
  }
};

export default Home;

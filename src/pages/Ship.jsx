import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Ship = () => {
  const [singleShip, setSingleShip] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getShip = async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v4/ships/${id}`
      );
      const data = await response.json();
      setSingleShip(data);
      console.log(data);
    };
    getShip();
  }, [id]);

  return (
    <>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <Link
            to='/'
            className='btn btn-ghost btn-sm rounded-btn'
          >
            <AiOutlineArrowLeft className='inline pr-2 text-3xl' />
            Вернуться
          </Link>
        </div>

        <div className='h-screen sm:h-screen card-body'>
          <h2 className='text-gray-200 card-title'>
            {singleShip.name}
          </h2>
          <div className='container flex-row lg:flex'>
            <div className='mr-2'>Тип</div>
            <p className='text-gray-200 '>
              {singleShip.type}
            </p>
            <div className='mr-2'>Порт</div>
            <p className='text-gray-200 '>
              {singleShip.home_port}
            </p>
            <div className='mr-2'>Масса</div>
            <p>{singleShip.mass_kg} кг</p>
            <div className='mr-2'>Год постройки</div>
            <p>{singleShip.year_built}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ship;

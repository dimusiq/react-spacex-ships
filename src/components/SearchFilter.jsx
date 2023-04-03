import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setShips,
  setSearchQuery,
  setFilterType,
  setFilterHomePort,
  setCurrentPage,
} from '../store/shipsSlice';
import { VscListFilter } from 'react-icons/vsc';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const SearchFilter = () => {
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();

  const ships = useSelector((state) => state.ships.ships);
  const searchQuery = useSelector(
    (state) => state.ships.searchQuery
  );
  const filterType = useSelector(
    (state) => state.ships.filterType
  );
  const filterHomePort = useSelector(
    (state) => state.ships.filterHomePort
  );

  // Fetch data
  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/ships')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setShips(data));
      });
  }, [dispatch]);

  const filteredShips = ships.filter(
    (ship) =>
      ship.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) &&
      (filterType === '' || ship.type === filterType) &&
      (filterHomePort === '' ||
        ship.home_port === filterHomePort)
  );

  // Render filtered ships
  return (
    <>
      <div className='flex flex-col bg-gray-800 shadow sidebar sm:h-screen'>
        <div className='px-4 mb-10'>
          <label className='label'>
            <span className='label-text'>Название</span>
          </label>
          <input
            type='text'
            placeholder='Найти'
            className='w-full max-w-xs mb-6 input'
            onChange={(e) =>
              dispatch(setSearchQuery(e.target.value))
            }
          />

          <select
            className='w-full max-w-xs mb-6 input select select-info'
            value={filterHomePort}
            onChange={(e) =>
              dispatch(setFilterHomePort(e.target.value))
            }
          >
            <option value='All'>All Home Ports</option>
            <option value='Port of Los Angeles'>
              Port of Los Angeles
            </option>
            <option value='Port Canaveral'>
              Port Canaveral
            </option>
            <option value='Fort Lauderdale'>
              Fort Lauderdale
            </option>
          </select>
          <div>
            <input
              type='radio'
              className='mr-2 radio radio-success radio-xs '
              id='tug'
              name='ship-type'
              value='Tug'
              checked={filterType === 'Tug'}
              onChange={() =>
                dispatch(setFilterType('Tug'))
              }
            />
            <label htmlFor='tug'>Tug</label>
          </div>
          <div>
            <input
              type='radio'
              className='mr-2 radio radio-success radio-xs'
              id='cargo'
              name='ship-type'
              value='Cargo'
              checked={filterType === 'Cargo'}
              onChange={() =>
                dispatch(setFilterType('Cargo'))
              }
            />
            <label htmlFor='cargo'>Cargo</label>
          </div>
          <div>
            <input
              type='radio'
              className='mr-2 radio radio-success radio-xs'
              id='barge'
              name='ship-type'
              value='Barge'
              checked={filterType === 'Barge'}
              onChange={() =>
                dispatch(setFilterType('Barge'))
              }
            />
            <label htmlFor='barge'>Barge</label>
          </div>
          <div>
            <input
              type='radio'
              className='mr-2 radio radio-success radio-xs'
              id='high-speed-craft'
              name='ship-type'
              value='High Speed Craft'
              checked={filterType === 'High Speed Craft'}
              onChange={() =>
                dispatch(setFilterType('High Speed Craft'))
              }
            />
            <label htmlFor='high-speed-craft'>
              High Speed Craft
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;

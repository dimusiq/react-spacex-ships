import { useDispatch, useSelector } from 'react-redux';
import { getShips } from '../store/shipsSlice';

import ShipItem from './ShipItem';
import { useEffect } from 'react';

const shipResult = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShips(ships));
  }, []);

  const { ships } = useSelector((state) => state.ship);

  const searchQuery = useSelector(
    (state) => state.ship.searchQuery
  );
  const filterType = useSelector(
    (state) => state.ship.filterType
  );
  const filterHomePort = useSelector(
    (state) => state.ship.filterHomePort
  );

  // Filter ships
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
    <ul className='container w-11/12 px-3 py-10 align-middle sm:h-64 md:w-4/5'>
      <div className='grid grid-cols-1 gap-2 sm:gap-8 '>
        {filteredShips.map((ship) => (
          <ShipItem key={ship.id} ship={ship} />
        ))}
      </div>
    </ul>
  );
};

export default shipResult;

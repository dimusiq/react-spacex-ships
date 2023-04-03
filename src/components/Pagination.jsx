import ReactPaginate from 'react-paginate';

const Pagination = ({ value, onChangePage }) => {
  return (
    <>
      <ReactPaginate
        className='btn'
        breakLabel='...'
        nextLabel='>'
        previousLabel='<'
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={value}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;

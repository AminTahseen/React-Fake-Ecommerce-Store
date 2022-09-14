const Pagination = (props) => {
  const pageNumbers = [];
  const productsPerPage = props.productsPerPage;
  const totalProducts = props.totalProducts;
  const currentPage = props.currentPage;
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      {currentPage !== 1 ? (
        <a href="/#" onClick={() => props.paginate(currentPage - 1)}>
          &laquo;
        </a>
      ) : null}

      {pageNumbers.map((number) =>
        currentPage === number ? (
          <a
            href="/#"
            key={number}
            onClick={() => props.paginate(number)}
            className="active"
          >
            {number}
          </a>
        ) : (
          <a href="/#" key={number} onClick={() => props.paginate(number)}>
            {number}
          </a>
        )
      )}
      {currentPage !== pageNumbers.length ? (
        <a href="/#" onClick={() => props.paginate(currentPage + 1)}>
          &raquo;
        </a>
      ) : null}
    </div>
  );
};
export default Pagination;

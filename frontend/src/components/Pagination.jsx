const Pagination = ({ totalPosts, postsPerPage, currentPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            onClick={() => setCurrentPage(page)}
            className={
              page === currentPage ? 'join-item btn btn-active hover:bg-blue-400' : 'join-item btn hover:bg-blue-500'
            }
            key={index}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default Pagination;
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page) => {
    if (page === currentPage) return;
    onPageChange(page);
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        className={`px-4 py-2 rounded-l-md ${
          isFirstPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        Previous
      </button>

      <span className="px-4 py-2 border-t border-b">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className={`px-4 py-2 rounded-r-md ${
          isLastPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
  );
};
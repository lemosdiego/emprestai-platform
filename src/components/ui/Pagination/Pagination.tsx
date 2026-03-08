import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const goToPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="listPlans-section-plans__pagination gap-2 mt-4 ">
      <button
        type="button"
        onClick={goToPrevious}
        disabled={currentPage === 1}
        aria-label="Página anterior"
        className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed  transition-colors text-purple-600
        cursor-pointer"
      >
        <MdChevronLeft size={24} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          aria-label={`Ir para página ${page}`}
          className={`w-10 h-10 rounded-lg font-bold transition-colors cursor-pointer ${
            currentPage === page
              ? "bg-purple-600 text-white shadow-md"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={goToNext}
        disabled={currentPage === totalPages}
        aria-label="Próxima página"
        className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-purple-600
        cursor-pointer"
      >
        <MdChevronRight size={24} />
      </button>
    </div>
  );
}

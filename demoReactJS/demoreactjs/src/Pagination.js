import { useState } from "react";

const itemsPerPage = 5; // Số sản phẩm trên mỗi trang

const Pagination = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Tính toán danh sách hiển thị
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Nút chuyển trang */}
      <div>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Trang trước
        </button>
        <span> Trang {currentPage} / {totalPages} </span>
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
          Trang sau
        </button>
      </div>
    </div>
  );
};

export default Pagination;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const itemsPerPage = 5; // tạo 1 số sản phẩm trên mỗi trang
const items = Array.from({ length: 53 }, (_, i) => `Sản phẩm ${i + 1}`); // tạo ra danh sách mảng các sản phẩm
// - length: Chiều dài của mảng : 50

const ProductList = () => { 
  const { pageNumber } = useParams();
  // - useParams: Lấy tham số pageNumber từ URL.
  const navigate = useNavigate(); 
  // - useNavigate: Tạo hàm điều hướng để thay đổi trang
  const currentPage = parseInt(pageNumber) || 1;
  // - parseInt: Chuyển đổi pageNumber thành số nguyên
  // Tính toán dữ liệu hiển thị
  const startIndex = (currentPage - 1) * itemsPerPage;
  // Vì mảng trong JavaScript bắt đầu từ chỉ mục 0, nên cần giảm currentPage đi 1 và 
  //  nhân với itemsPerPage: Giúp xác định vị trí bắt đầu của sản phẩm trên trang hiện tại.
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);
  // slice: Cắt sản phẩm mỗi trang ra thành 5 phần tử / trang
  const totalPages = Math.ceil(items.length / itemsPerPage);
  // Math.ceil: Tính tổng số trang bằng chiều dài của mảng ( Dòng 5) chia cho số lượng trang ( Dòng 4)
  // Xử lý sự kiện chuyển trang
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      navigate(`/page/${page}`);
    }
  };
  // Nếu trang lớn hơn hoặc bằng 1 và nhỏ hơn tổng số trang ( 10 trang) => hiển thị trang

  return (
    <div>
      <h2>Danh sách sản phẩm - Trang {currentPage}</h2>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* .map: Hiển thị danh sách và các logic vừa làm bên trên */}

      {/* Nút chuyển trang */}
      <div>
        <button disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)}>
          Trang trước
        </button>
        {/*Disabled: Nếu ở trang 1 sẽ không thể lùi thêm, onClick là sự kiện xảy ra khi click vào trang sẽ sang trang n + 1 */}
        <span> Trang {currentPage} / {totalPages} </span>
        <button disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)}>
          Trang sau
        </button>
      </div>
    </div>
  );
};

export default ProductList;

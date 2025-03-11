import React, { useState } from 'react';
function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h1>Ứng dụng Mở Rộng/Thu Gọn</h1>
      <button onClick={handleExpand}>
        {isExpanded ? 'Đóng Giới Thiệu' : 'Xem Giới Thiệu'}
      </button>
      {isExpanded && (
        <div>
          <h2>Giới Thiệu</h2>
          <p>
            Nội dung giới thiệu sẽ được hiển thị ở đây. Bạn có thể thêm bất
            kỳ thông tin nào bạn muốn.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
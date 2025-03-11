import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/<word>');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      // Thực hiện các công việc dọn dẹp (nếu cần)
    };
  },[]); // Tham số thứ hai là một mảng rỗng, đảm bảo useEffect chỉ chạy một lần khi component được mount

  // Hiển thị nội dung tùy thuộc vào trạng thái
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <input type='text' value={data}/>
      <button onClick={data}>Search</button>
    </div>
  );
};

export default App;

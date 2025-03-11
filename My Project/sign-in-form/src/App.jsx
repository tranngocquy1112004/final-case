import React, { useState } from 'react';

const App = () => {
  // const [login, setLogin] = useState(true); // Trạng thái mặc định là đăng nhập
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleToggle = () => {
  //   // Khi người dùng nhấn chuyển đổi giữa đăng nhập và đăng ký
  //   setLogin((prevLogin) => !prevLogin);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Xử lý đăng nhập hoặc đăng ký tùy thuộc vào trạng thái hiện tại
  //   if (login) {
  //     // Gửi thông tin đăng nhập
  //     alert('Dang nhap thanh cong')
  //   } else {
  //     // Gửi thông tin đăng ký
  //     alert('Dang ki thanh cong')
  //   }
  // };

  return (
    <div>
      {/* <h2>{login ? 'Đăng Nhập' : 'Đăng Ký'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Tên người dùng:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mật khẩu:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">{login ? 'Đăng Nhập' : 'Đăng Ký'}</button>
      </form>
      <button onClick={handleToggle}>
        {login ? 'Đăng ký ngay!' : 'Đăng nhập ngay!'}
      </button> */}
      
    </div>
  );
};

export default App;

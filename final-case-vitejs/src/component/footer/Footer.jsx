import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


export default function Footer () {
     return ( 
        <footer className="footer"> 
        <div style={{textAlign:'center'}}>
         <p style={{fontSize:'30px'}}>
           Về chúng tôi
         </p>
         </div>
         <div className="container">
            <div className="row">
            <div className="col-4">
               <h4 style={{textAlign:'center'}}>Dịch vụ</h4>
               <ul className="foot">
               <li>
                  <a href="">Điều khoản sử dụng</a>
               </li>
               <li>
                  <a href="">Chính sách bảo mật thông tin cá nhân</a>
               </li>
               <li><a href="">Chính sách bảo mật thanh toán</a>
               </li>
               <li>
                 <a href="">Hệ thống trung tâm - nhà sách</a> 
               </li>

               </ul>
               </div>
            <div className="col-4">
                <h4 style={{textAlign:'center'}}>Hỗ trợ</h4>
                <ul className="foot">
               <li>
                  <a href="">Chính sách đổi - trả - hoàn tiền</a>
               </li>
               <li>
                  <a href="">Chính sách bảo hành - bồi hoàn</a>
               </li>
               <li><a href="">Chính sách vận chuyển</a>
               </li>
               <li>
                 <a href="">Chính sách khách sỉ</a> 
               </li>

               </ul>
            </div>
            <div className="col-4">
                <h4 style={{textAlign:'center'}}>Liên hệ</h4>
                <ul className="foot">
               <li>
                  <a href="">
                     <FaMapMarkerAlt/>
                      60-62 Lê Lợi, Q.1, TP. HCM
                  </a>
               </li>
               <li>
                  <a href="">
                     <MdEmail/>
                      cskh@fahasa.com.vn
                  </a>
               </li>
               <li>
                  <a href="">
                  <FaPhone/>
                   1900636467
                  </a>
               </li>
               </ul>
            </div>
          </div>
</div>
        </footer>
     )
}
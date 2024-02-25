import MainLayouts from "../layout/MainLayouts";
import ProductList from "../component/product/ProductList"
export default function CartPage ({cart}) {
    return (
      <div>

      <MainLayouts>
      <h2>Giỏ hàng của bạn</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px" }} />
              <span>{item.title}</span>
              <span>Price: ${item.price}</span>
            </li>
          ))}
        </ul>
      )}
          </MainLayouts>
          </div>
    )
}
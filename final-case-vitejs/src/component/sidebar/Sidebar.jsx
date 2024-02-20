import Brand from "./Brand";
import Category from "./Category";
import Price from "./Price";

export default function Sidebar () {
    return(
        <div className="d-flex flex-column vh-100">
        <div className="accordion accordion-flush">
            <Brand/>
            <Category/>
            <Price/>
        </div>
        </div>
    )
}
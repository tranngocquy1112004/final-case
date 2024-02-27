import { PiStudentBold } from "react-icons/pi";
import { PiSignOutBold } from "react-icons/pi";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container "> 
            <Link to={'/'} className="navbar-brand d-flex align-items-center">
                <PiStudentBold size={30} className="me-2"/>
                Student
            </Link>
            <button className="btn btn-outline-secondary d-flex align-items-center ">
                <PiSignOutBold size={18} className="me-2"/>
                Sign Out
            </button>
            </div>
        </nav>
    )
}
import MainLayout from "../layouts/MainLayout";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { FaList } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

// <IoMdPersonAdd /> <FaList /><IoPerson />



export default function StudentPage() {
    const location = useLocation()
    const {studentId} = useParams()
    const pathname = location.pathname.split('/').pop()
    const isActive = pathname === 'student' || pathname === 'list'
    
    return (
       <MainLayout>
        {/* <Student/> */}
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink to={'/student/list'} className={`nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}>
                <FaList className="me-2"/>
                    Student List
                </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={'/student/create'} className="nav-link d-flex align-items-center">
                <IoMdPersonAdd className="me-2"/>
                    Create Student
            </NavLink>
            </li>
            {
                studentId && (
                   <li className="nav-item">
                    <NavLink to={`${studentId}`} className="nav-link d-flex align-items-center">
                        <IoPerson className="me-2"/>
                    Student Details
                    </NavLink>
                   </li>
                )
                // Nếu có id của student thì hiện Student Details lên không thì thôi
            }
        </ul>
        <Outlet/>
       </MainLayout>
    )
}
import { useEffect, useState } from "react"
import dayjs from 'dayjs'
import { FaUserTimes } from "react-icons/fa"
import { FaUserGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
export default function StudentList () {
    const[studentList, setStudentList] = useState([])
    const[loading, setLoading] = useState(false)
    const [selectedStudent, setSelectedStudent] = useState(null)
    useEffect(() => {
        setLoading(true)
        async function getStudentList() {
            let studentListRes = await fetch('https://65a7ce1e94c2c5762da79a55.mockapi.io/student')
            let data = await studentListRes.json()
            setStudentList(data)
            setLoading(false)
        }
        getStudentList()
    }, [selectedStudent])
    console.log(studentList);
    const handleRemoveStudent = (student) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
            let removeStudentRes = await fetch(`https://65a7ce1e94c2c5762da79a55.mockapi.io/student/${student.id}`,{
                method: 'DELETE'
             })
             let removeStudent = await removeStudentRes.json()
             if(removeStudent) {
                setSelectedStudent(removeStudent)
             }
            //   });
            }
          });
    }
     return (
         <>
           {
            loading ? <p>Loading...</p> : (
                <table className="table table-bordered table-striped table-hover rounded-3 overflow-hidden">
                <thead className="table-secondary">
                    <tr>
                        <th className="text-center">#ID</th>
                        <th className="text-center">Fullname</th>
                        <th className="text-center">Date of Birth</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">Mobile</th>
                        <th className="text-center">Department</th>
                        <th className="text-center">Action</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        studentList?.map((student) => (
                            <tr key={student.id}>
                                <td className="align-middle">{student.id}</td>
                                <td >
                                    <div>
                                        <img className="avatar-sm me-2" src={student.avatarUrl} alt="" />
                                        <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                                    </div>
                                </td>
                                <td className="text-end align-middle">{dayjs(student.dob).format('MMM DD YYYY')}</td>
                                <td className="text-end align-middle">{student.email}</td>
                                <td className="text-end align-middle">{student.mobile}</td>
                                <td className="text-end align-middle">{student.department.name}</td>
                                <td className="text-end align-middle">{student.action}
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <FaUserTimes role="button" size={20} className="text-danger" title="Remove student"
                                        onClick={()=> handleRemoveStudent(student)}
                                        />
                                        <Link to={`/student/${student.id}`}>
                                        <FaUserGear role="button" size={20} className="text-danger" title="Student detail"
                                        />
                                        </Link>
                                        
                                       
                                    </div>
                                </td>
                                   
                            </tr>
                        )
                        )
                    }
                    {/* Toán tử '.?' tương tự như if-else : Nếu có data(dữ liệu) thì hàm map mới được thực thi còn không sẽ là null */}
                </tbody>
            </table>
            )
           }
         </>
     )
}
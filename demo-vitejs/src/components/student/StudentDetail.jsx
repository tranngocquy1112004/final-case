import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import dayjs from "dayjs"
import { Link } from "react-router-dom"
export default function StudentDetail () {
    const {studentId} = useParams()
    const [student, setStudent] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        async function getStudentById() {
            let studentRes = await fetch(`https://65a7ce1e94c2c5762da79a55.mockapi.io/student/${studentId}`,{method:"GET"})
            let data = await studentRes.json()
            setStudent(data)
            setLoading(false)
        }
        getStudentById()

    },[studentId])
    return (
     <>
     {
         
            loading ? <p>Loading...</p> : (
                <>
        <div className="d-flex align-items-center">
                <img className="avatar-lg me-4" src={student?.avatarUrl} alt="" />
                <div className="flex-grow-1 d-flex flex-column">
                    <div className="border-dashed py-2">
                      Fullname:  <span>{student?.fullname}</span>
                    </div>
                    <div className="border-dashed py-2">
                       Email:  <span>{student?.email}</span>
                    </div>
                    <div className="border-dashed py-2">
                       Date:  <span>{dayjs(student?.dob).format('MMMM DD YYYY')}</span>
                    </div>
                    <div className="border-dashed py-2">
                       Gender:  <span>{student?.gender ? 'Male' : 'Female'}</span>
                    </div>
                    <div className="border-dashed py-2">
                        Department:        <span>{student.department?.name}</span>
                    </div>
    
                </div>
        </div>
        <Link to='/student/list'>
        Back to list
        </Link>
       </>
            )
          
     }
   
   </>
    )
}
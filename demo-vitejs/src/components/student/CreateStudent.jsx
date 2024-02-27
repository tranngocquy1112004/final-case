import { useEffect, useState } from "react"
import {useForm} from 'react-hook-form'
// import { FaLiraSign } from "react-icons/fa"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
export default function CreateStudent () {
    const schema = yup.object({
        fullname: yup.string().required('Vui lòng nhập tên đầy đủ'),
        dob: yup.date().required().typeError('Vui lòng nhập ngày tháng năm '),
        mobile: yup.string().required('Vui lòng nhập đúng số điện thoại'),
        gender: yup.boolean().required('Vui lòng điền giới tính'),
        email: yup.string().required('Vui lòng nhập email'),
        department: yup.string().required('Vui lòng điền ngành của bạn'),
        // avatar: yup.string().url().required('Vui lòng điền link ảnh hoặc Url')
    })
    const [isCreating, setIsCreating] = useState(false)
    const [departmentList, setDepartmentList] = useState([])
    useEffect(()=> {
        async function getDepartmentList(){
            let departmentListRes = await fetch('https://65a7ce1e94c2c5762da79a55.mockapi.io/department')
            let data = await departmentListRes.json()
            // lấy data trả về dữ liệu dưới dạng json
            setDepartmentList(data)
        }
        getDepartmentList()
    }, [])
    const {register, handleSubmit, reset, formState: {errors}} = useForm(
        {
            resolver: yupResolver(schema)
        }
    )
                // nếu dùng CÁCH 1 để call API thì không cần async
    // const handleCreateStudent = (values) => {
                // nếu dùng CÁCH 2 để call API thì phải có async
    const handleCreateStudent = async (values) => {
                // truyền vào giá trị values 
        values = {
            ...values,
            // giữ nguyên giá trị values
            department: values.department && JSON.parse(values.department)
            // phần department lấy giá trị của ngành (ô input có chứa ngành đã được
            //  call API từ mockAPI) nhưng phải chuyển từ object về dạng...gì đó để show
            // ra và user hiểu 
        }
        // CÁCH 1: Cách này sẽ không thể xử lí nếu gặp lỗi call API

        // setIsCreating(true)
        // fetch('https://65a7ce1e94c2c5762da79a55.mockapi.io/student', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(values)
        // }).then(res => res.json())
        //     .then((data)=> {
        //         reset()
        //         // toast.success('Đã thêm thành công')
        //         setIsCreating(false)
        //     })

        // CÁCH 2: Cách này sẽ xử lí được lỗi nếu có lỗi đến từ API
        try {
            setIsCreating(true)
            // throw new Error(): check lỗi ở catch (error)
            let createStudentRes = await fetch('https://65a7ce1e94c2c5762da79a55.mockapi.io/student', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(values)
            })
            let result = await createStudentRes.json();
            if (result) {
                reset()
                // toast.success('Thành công', {theme: 'light'})
                console.log(result, 'thành công')
            }
            setIsCreating(false)
        } catch (error) {
            toast.error('Có điều gì đó không đúng')
        }
    }
    return (
        <form onSubmit={handleSubmit(handleCreateStudent)} className="border rounded p-2">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="form-group mb-2">
                        <label className="form-label">Full name</label>
                        <input 
                            type="text" 
                            className={`${errors.fullname?.message ? 'is-invalid' : ''} form-control`}
                            placeholder="Fullname..."
                            {...register('fullname')}
                        />
                        <span className="invalid-feedback">{errors.fullname?.message}</span>
                    </div>
                    <div className="form-group mb-2">
                    <div className="row">
                       <div className="col-md-6">
                        <label className="form-label">Date of birth</label>
                        <input 
                            type="date"
                            className={`${errors.dob?.message ? 'is-invalid' : ''} form-control`}
                            placeholder="fullname..."
                            {...register('dob')}
                         />
                        <span className="invalid-feedback">{errors.dob?.message}</span>

                       </div>
                       <div className="col-md-6">
                        <label className="form-label"> Gender</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input type="radio"
                                className={`${errors.gender?.message ? 'is-invalid' : ''} form-check-input`}
                                value={true} {...register('gender')}
                                />
                                <label className="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" 
                                className={`${errors.gender?.message ? 'is-invalid' : ''} form-check-input`}
                                value={false} {...register('gender')}
                                />
                                <label className="form-check-label">Female</label>
                            </div>
                        </div>
                       </div>
                    </div>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Mobile</label>
                        <input 
                            type="number" 
                            className={`${errors.mobile?.message ? 'is-invalid' : ''} form-control`}
                            placeholder="Mobile..."
                            {...register('mobile')}
                        />
                       <span className="invalid-feedback">{errors.mobile?.message}</span>

                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="form-group mb-2">
                        <label className="form-label">Email</label>
                        <input 
                            type="email" 
                            className={`${errors.email?.message ? 'is-invalid' : ''} form-control`}
                            placeholder="Email..."
                            {...register('email')}
                        />
                        <span className="invalid-feedback">{errors.email?.message}</span>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Department</label>
                        <select className={`${errors.department?.message ? 'is-invalid' : ''} form-select`} defaultValue={''} {...register('department')}>  
                        {/* defaultValue dùng khi trang được tải lại sẽ mặc định
                            option đầu tiên được chọn và sẽ ưu tiên render ra ở ô input
                         */}
                            <option value="" disabled >Please select a department</option>
                            {/* disabled dùng để không cho phép user được chọn lại option đó */}
                            {
                                departmentList?.map((depart)=> (
                                    // nhận vào mỗi phần tử depart trong departmentList(dòng thứ 5) và deparList lại call API để hiển thị ra
                                    <option value={JSON.stringify(depart)} key={depart.id}>{depart.name}</option>
                                ))
                            }
                        </select>
                        <span className="invalid-feedback">{errors.department?.message}</span>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Avatar URL</label>
                        <input 
                            type="url" 
                            className={` form-control`}
                            placeholder="Avatar URL..."
                            {...register('avatarUrl')}
                        />
                        {/* <span className="invalid-feedback">{errors.avatar?.message}</span> */}
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label"></label>
                        <div className="d-flex">
                            {
                                isCreating ? (
                                <button className="btn btn-success btn-sm flex-grow-1 me-3" disabled>
                                Creating...
                                </button>
                                ) : 
                                (
                                <button type="submit" className="btn btn-success btn-sm flex-grow-1 me-3">Create</button>
                                )

                            }
                            <button type="button" className="btn btn-dark btn-sm flex-grow-1"
                            onClick={() => reset()}
                            >Close</button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </form>
    )
}
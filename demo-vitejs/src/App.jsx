import { useState } from 'react'
import './App.css'
import StudentPage from './pages/StudentPage'
import DepartmentPage from './pages/DepartmentPage'
import {Routes, Route} from 'react-router-dom'
import StudentList from './components/student/StudentList'
import StudentDetail from './components/student/StudentDetail'
import CreateStudent from './components/student/CreateStudent'
function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<DepartmentPage/>}/>
        <Route path='/dashboard' element={<DepartmentPage/>}/>
        <Route path='/student' element={<StudentPage/>}>
        <Route index element={<StudentList/>}/>
          <Route path='list' element={<StudentList/>}/>
          <Route path='detail' element={<StudentDetail/>}/>
          <Route path='create' element={<CreateStudent/>}/>
          <Route path=':studentId' element={<StudentDetail/>}/>
        </Route>
{/* :studentId là dạng /student/5 hay /student/6 (lấy id của student trên Url) và luôn phải để cuối cùng */}
    </Routes>
    </>
  )
}

export default App

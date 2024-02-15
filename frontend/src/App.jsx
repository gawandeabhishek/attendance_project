import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, AddStudent, DeleteStudent, Attendance, EditStudent } from "./pages/index"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/students/add' element={<AddStudent />}/>
      <Route path='/students/delete/:id' element={<DeleteStudent />}/>
      <Route path='/students/attendance/:id' element={<Attendance />}/>
      <Route path='/students/edit/:id' element={<EditStudent />}/>
    </Routes>
  )
}

export default App
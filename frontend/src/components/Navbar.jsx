import React from 'react'
import { Link } from "react-router-dom";

let navLinks = [
    {
        name: "home",
        link: "/"
    },
    {
        name: "Add Student",
        link: "/students/add"
    },
    {
        name: "Attendance",
        link: "/students/attendance/:id"
    }
]

const Navbar = () => {
  return (
    <div className='flex gap-4 p-4 items-center z-10 justify-center bg-white/50 backdrop-blur-sm'>
        {navLinks.map((nav, idx) => (
        <Link to={nav.link} className='font-semibold text-slate-700' key={idx}>{nav.name}</Link>
        ))}
    </div>
  )
}

export default Navbar
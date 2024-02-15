import React, { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';

const AddStudent = () => {
  const [formData, setFormData] = useState({ name: "", rollNo: "", photo: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, rollNo, photo } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const HandleSubmit = () => {
    setLoading(true);

    axios
      .post("http://localhost:8000/students/login", {
        name: name,
        rollNo: rollNo,
        photo: photo,
      })
      .then((res) => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="h-dvh w-full flex items-center justify-center fixed z-[-1] flex-col gap-6 bottom-8">
      <input
        type="text"
        name="name"
        placeholder="Student name"
        value={name}
        onChange={handleChangeInput}
        className="bg-sky-50 px-4 py-2 rounded-lg w-1/4 text-slate-800"
      />
      <input
        type="number"
        name="rollNo"
        placeholder="Student roll no"
        value={rollNo}
        onChange={handleChangeInput}
        className="bg-sky-50 px-4 py-2 rounded-lg w-1/4 text-slate-800"
      />
      <input
        type="text"
        name="photo"
        placeholder="Student pic link"
        value={photo}
        onChange={handleChangeInput}
        className="bg-sky-50 px-4 py-2 rounded-lg w-1/4 text-slate-800"
      />
      
      <Button onClick={HandleSubmit} className="bg-sky-600 px-4 py-2 rounded-lg w-[6%]" variant="contained">{loading ? "Adding" : "Add"}</Button>
    </div>
  );
};

export default AddStudent;

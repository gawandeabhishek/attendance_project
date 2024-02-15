import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/students")
      .then((res) => {
        setStudents(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-start items-center h-auto flex-wrap gap-4">
        {loading ? (
          <Spinner />
        ) : (
          students.map((student, idx) => (
            // <div key={idx}>{student.rollNo}</div>
            <Tooltip title={`Roll no : ${student.rollNo}`} key={idx}>
              <div className="flex gap-4 items-center justify-center bg-sky-50 px-4 py-2 rounded-lg cursor-pointer">
                <Avatar alt="Remy Sharp" src={student.photo} />
                <p className="text-xl font-semibold font-sans text-slate-900">{student.name}</p>
              </div>
            </Tooltip>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;

import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StudentsContext = createContext();

const API = "http://localhost:5000/api/students";

export const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  // GET students
  const fetchStudents = async () => {
    const res = await axios.get(API);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // ADD student
  const addStudent = async (student) => {
    const res = await axios.post(API, student);
    setStudents((prev) => [...prev, res.data]);
  };

  // DELETE student
  const deleteStudent = async (id) => {
    await axios.delete(`${API}/${id}`);
    setStudents((prev) => prev.filter((s) => s._id !== id));
  };

  // UPDATE student
  const updateStudent = async (student) => {
    const res = await axios.put(`${API}/${student._id}`, student);

    setStudents((prev) =>
      prev.map((s) => (s._id === student._id ? res.data : s)),
    );
  };

  return (
    <StudentsContext.Provider
      value={{
        students,
        addStudent,
        deleteStudent,
        updateStudent,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

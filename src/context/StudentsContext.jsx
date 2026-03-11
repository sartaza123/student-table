import { createContext, useState } from "react";

export const StudentsContext = createContext();

export const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const updateStudent = (updatedStudent) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === updatedStudent.id ? updatedStudent : s)),
    );
  };

  return (
    <StudentsContext.Provider
      value={{ students, addStudent, deleteStudent, updateStudent }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

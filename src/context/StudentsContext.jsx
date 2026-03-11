import { createContext, useState, useEffect } from "react";

export const StudentsContext = createContext();

export const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    try {
      const storedStudents = localStorage.getItem("students");
      return storedStudents ? JSON.parse(storedStudents) : [];
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return [];
    }
  });

  // Sync students with localStorage
  useEffect(() => {
    try {
      localStorage.setItem("students", JSON.stringify(students));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [students]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const updateStudent = (updatedStudent) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === updatedStudent.id ? updatedStudent : s)),
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

import { useState } from "react";
import StudentTable from "../components/StudentTable";

const Home = () => {
  const [students, setStudents] = useState([
    {
      name: "John Doe",
      email: "john@mail.com",
      phone: "9876543210",
      age: 21,
      gender: "Male",
      course: "BCA",
      photo: null,
    },
  ]);

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const editStudent = (index) => {
    alert("Edit functionality later");
  };

  return (
    <div className="min-h-screen bg-[#2D222F] p-6">
      <div className="max-w-6xl mx-auto">
        <StudentTable
          students={students}
          handleDelete={deleteStudent}
          handleEdit={editStudent}
        />
      </div>
    </div>
  );
};

export default Home;

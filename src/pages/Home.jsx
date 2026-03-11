import { useContext } from "react";
import { StudentsContext } from "../context/StudentsContext";
import StudentTable from "../components/StudentTable";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { students, deleteStudent } = useContext(StudentsContext);
  const navigate = useNavigate();

  const handleEdit = (student) => {
    navigate("/add-student", { state: student });
  };

  return (
    <div className="min-h-screen bg-[#2D222F] p-6">
      <div className="max-w-6xl mx-auto">
        <StudentTable
          students={students}
          handleDelete={deleteStudent}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default Home;

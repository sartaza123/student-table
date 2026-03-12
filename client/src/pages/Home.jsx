import { useContext } from "react";
import { StudentsContext } from "../context/StudentsContext";
import { useNavigate } from "react-router-dom";
import StudentTable from "../components/StudentTable";

const Home = () => {
  const { students, deleteStudent } = useContext(StudentsContext);
  const navigate = useNavigate();

  const handleEdit = (student) => {
    navigate("/add-student", { state: student });
  };

  return (
    <div className="min-h-screen bg-[#2D222F] p-6">
      <div className="max-w-6xl mt-20 mx-auto">
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

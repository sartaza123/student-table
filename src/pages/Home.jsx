import { useContext } from "react";
import { StudentsContext } from "../context/StudentsContext";
import StudentTable from "../components/StudentTable";

const Home = () => {
  const { students, deleteStudent } = useContext(StudentsContext);

  return (
    <div className="min-h-screen bg-[#2D222F] p-6">
      <div className="max-w-6xl mx-auto">
        <StudentTable students={students} handleDelete={deleteStudent} />
      </div>
    </div>
  );
};

export default Home;

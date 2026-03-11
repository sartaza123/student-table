import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const StudentTable = ({ students, handleDelete, handleEdit }) => {
  return (
    <div className="bg-[#FADCD5] p-6 rounded-lg shadow-lg overflow-x-auto">
      <div className="flex  justify-between">
        <h2 className="text-xl font-semibold text-[#1B0C1A] mb-4">
          Students List
        </h2>
        <Link to="/add-student">
          <button className="text-xs flex gap-2 h-8 px-4 py-2 bg-[#2D222F] text-[#FADCD5] rounded-2xl cursor-pointer">
            {" "}
            <FaPlus className="" />
            <h3 className="font-bold">Add Student</h3>
          </button>
        </Link>
      </div>

      {students.length === 0 ? (
        <p className="text-center text-gray-600">No students added yet.</p>
      ) : (
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-[#4B2138] text-white">
              <th className="p-3">Photo</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Age</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Course</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr
                key={index}
                className="border-b border-[#765D67] hover:bg-[#f3cfc7]"
              >
                {/* Photo */}
                <td className="p-3">
                  {student.photo ? (
                    <img
                      src={URL.createObjectURL(student.photo)}
                      alt="profile"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  )}
                </td>

                {/* Name */}
                <td className="p-3">{student.name}</td>

                {/* Email */}
                <td className="p-3">{student.email}</td>

                {/* Phone */}
                <td className="p-3">{student.phone}</td>

                {/* Age */}
                <td className="p-3">{student.age}</td>

                {/* Gender */}
                <td className="p-3">{student.gender}</td>

                {/* Course */}
                <td className="p-3">{student.course}</td>

                {/* Actions */}
                <td className="p-3 flex gap-3">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentTable;

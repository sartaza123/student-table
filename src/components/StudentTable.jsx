import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialogBox";
import * as XLSX from "xlsx";

const StudentTable = ({ students, handleDelete, handleEdit }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const downloadExcel = () => {
    const cleanData = students.map(
      ({ id, photo, name, email, phone, age, gender, course, address }) => ({
        name,
        email,
        phone,
        age,
        gender,
        course,
        address,
      }),
    );

    const worksheet = XLSX.utils.json_to_sheet(cleanData);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    XLSX.writeFile(workbook, "students.xlsx");
  };

  return (
    <div className="bg-[#FADCD5] p-4 sm:p-6 rounded-lg shadow-lg overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-[#1B0C1A]">
          Students List
        </h2>

        <div className="flex flex-wrap gap-2">
          <Link to="/add-student">
            <button className="text-xs flex items-center gap-2 px-4 py-2 bg-[#4B2138] text-[#FADCD5] rounded-xl">
              <FaPlus />
              Add Student
            </button>
          </Link>

          <button
            onClick={downloadExcel}
            className="text-xs px-4 py-2 bg-[#4B2138] text-[#FADCD5] rounded-xl font-bold"
          >
            Download Excel
          </button>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
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
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b border-[#765D67] hover:bg-[#f3cfc7]"
              >
                <td className="p-3">
                  {student.photo ? (
                    <img
                      src={student.photo}
                      alt="profile"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  )}
                </td>

                <td className="px-3 py-2">{student.name}</td>
                <td className="px-3 py-2">{student.email}</td>
                <td className="px-3 py-2">{student.phone}</td>
                <td className="px-3 py-2">{student.age}</td>
                <td className="px-3 py-2">{student.gender}</td>
                <td className="px-3 py-2">{student.course}</td>

                <td className="px-3 py-2 flex gap-3">
                  <button
                    onClick={() => handleEdit(student)}
                    className="text-[#1B0C1A] hover:text-green-700"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => {
                      setSelectedId(student.id);
                      setOpenDialog(true);
                    }}
                    className="text-[#1B0C1A] hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden flex flex-col gap-4">
        {students.map((student) => (
          <div key={student.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center gap-3 mb-3">
              {student.photo ? (
                <img
                  src={student.photo}
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              )}

              <div>
                <p className="font-semibold">{student.name}</p>
                <p className="text-xs text-gray-500">{student.email}</p>
              </div>
            </div>

            <div className="text-sm space-y-1">
              <p>
                <b>Phone:</b> {student.phone}
              </p>
              <p>
                <b>Age:</b> {student.age}
              </p>
              <p>
                <b>Gender:</b> {student.gender}
              </p>
              <p>
                <b>Course:</b> {student.course}
              </p>
            </div>

            <div className="flex gap-4 mt-3">
              <button
                onClick={() => handleEdit(student)}
                className="text-green-700"
              >
                <FaEdit />
              </button>

              <button
                onClick={() => {
                  setSelectedId(student.id);
                  setOpenDialog(true);
                }}
                className="text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      <ConfirmDialog
        isOpen={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={() => {
          handleDelete(selectedId);
          setOpenDialog(false);
        }}
      />
    </div>
  );
};

export default StudentTable;

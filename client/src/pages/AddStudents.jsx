import { useState, useContext } from "react";
import { StudentsContext } from "../context/StudentsContext";
import { useNavigate, useLocation } from "react-router-dom";

const AddStudent = () => {
  const location = useLocation();
  const editStudent = location.state;

  const [student, setStudent] = useState(
    editStudent || {
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      course: "",
      address: "",
      photo: null,
    },
  );

  const [error, setError] = useState("");

  const { addStudent, updateStudent } = useContext(StudentsContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      const file = files[0];

      if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
          setStudent((prev) => ({
            ...prev,
            photo: reader.result, // base64 string
          }));
        };

        reader.readAsDataURL(file);
      }
    } else {
      setStudent({ ...student, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, age, gender, course, address } = student;

    if (!name || !email || !phone || !age || !gender || !course || !address) {
      setError("All required fields must be filled.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (phone.length < 10) {
      setError("Phone number must be at least 10 digits.");
      return;
    }

    if (age <= 0) {
      setError("Age must be greater than 0.");
      return;
    }

    setError("");

    let finalStudent;

    if (editStudent) {
      finalStudent = student;
      updateStudent(finalStudent);
      alert("Student Updated Successfully");
    } else {
      finalStudent = { ...student, id: Date.now() };
      addStudent(finalStudent);
      alert("Student Added Successfully");
    }

    setStudent({
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      course: "",
      address: "",
      photo: null,
    });

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#2D222F] flex items-center justify-center px-4 sm:px-6 py-10">
      <div className="bg-[#FADCD5] w-full max-w-4xl mt-16 p-6 sm:p-10 rounded-lg shadow-lg">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1B0C1A] mb-6 text-center">
          {editStudent ? "Edit Student" : "Add Student"}
        </h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div>
            <label className="text-sm text-[#1B0C1A]">Full Name *</label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#765D67] focus:border-[#4B2138] outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-[#1B0C1A]">Email *</label>
            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#765D67] focus:border-[#4B2138] outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-[#1B0C1A]">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={student.phone}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#765D67]"
            />
          </div>

          {/* Age */}
          <div>
            <label className="text-sm text-[#1B0C1A]">Age *</label>
            <input
              type="number"
              name="age"
              value={student.age}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#765D67]"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm text-[#1B0C1A]">Gender *</label>
            <select
              name="gender"
              value={student.gender}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#765D67]"
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Course */}
          <div>
            <label className="text-sm text-[#1B0C1A]">Course *</label>
            <input
              type="text"
              name="course"
              value={student.course}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#765D67]"
            />
          </div>

          {/* Photo */}
          <div>
            <label className="text-sm text-[#1B0C1A]">Profile Photo</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border border-[#765D67] rounded"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="text-sm text-[#1B0C1A]">Address *</label>
            <textarea
              name="address"
              rows="3"
              value={student.address}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#765D67]"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm md:col-span-2 text-center">
              {error}
            </div>
          )}

          <div className="md:col-span-2 flex flex-col sm:flex-row justify-center gap-3 mt-4">
            <button
              type="submit"
              className="bg-[#4B2138] text-white px-6 py-2 rounded hover:bg-[#6D3C52]"
            >
              {editStudent ? "Update Student" : "Add Student"}
            </button>

            <button
              type="reset"
              className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;

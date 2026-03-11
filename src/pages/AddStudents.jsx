import { useState } from "react";
import { useContext } from "react";
import { StudentsContext } from "../context/StudentsContext";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    course: "",
    address: "",
    photo: null,
  });

  const [error, setError] = useState("");
  const { addStudent } = useContext(StudentsContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      setStudent({ ...student, photo: files[0] });
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

    alert("Student Added Successfully");

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

    console.log(student);
    addStudent(student);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#2D222F] flex items-center justify-center p-6">
      <div className="bg-[#FADCD5] w-full max-w-4xl p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#1B0C1A] mb-6 text-center">
          Add Student
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Name */}
          <div>
            <label className="text-sm text-[#1B0C1A]">
              Full Name <span className="text-red-500">*</span>
            </label>
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
            <label className="text-sm text-[#1B0C1A]">
              Email <span className="text-red-500">*</span>
            </label>
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
            <label className="text-sm text-[#1B0C1A]">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={student.phone}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#765D67] focus:border-[#4B2138] outline-none"
            />
          </div>

          {/* Age */}
          <div>
            <label className="text-sm text-[#1B0C1A]">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="age"
              value={student.age}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#765D67] focus:border-[#4B2138] outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm text-[#1B0C1A]">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={student.gender}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#765D67] focus:border-[#4B2138] outline-none"
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Course */}
          <div>
            <label className="text-sm text-[#1B0C1A]">
              Course <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="course"
              value={student.course}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#765D67] focus:border-[#4B2138] outline-none"
            />
          </div>

          {/* Profile Photo */}
          <div>
            <label className="text-sm text-[#1B0C1A]">
              Profile Photo (optional)
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#765D67]"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="text-sm text-[#1B0C1A]">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              rows="3"
              value={student.address}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#765D67] focus:border-[#4B2138] outline-none"
            ></textarea>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm md:col-span-2 text-center">
              {error}
            </div>
          )}

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-center gap-4 mt-4">
            <button
              type="submit"
              className="bg-[#4B2138] text-white px-6 py-2 rounded hover:bg-[#6D3C52] transition"
            >
              Add Student
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

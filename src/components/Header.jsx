import { FaUserGraduate, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed w-full bg-[#1B0C1A] text-[#FADCD5] flex items-center justify-between px-8 py-4 shadow-lg h-20">
      {/* Logo + Title */}
      <div className="flex items-center gap-3">
        <FaUserGraduate size={26} />
        <h1 className="text-xl font-semibold tracking-wide">
          Students Manager
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-[#2D222F] px-3 py-2 rounded-md w-[300px]">
        <input
          type="text"
          placeholder="Search students..."
          className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
        />
        <div className="text-[#FADCD5] cursor-pointer border-l px-2">
          <FaSearch />
        </div>
      </div>
    </header>
  );
};

export default Header;

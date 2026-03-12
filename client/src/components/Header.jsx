import { FaUserGraduate, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-[#1B0C1A] text-[#FADCD5] flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 shadow-lg h-20 z-50">
      {/* Logo + Title */}
      <div className="flex items-center gap-2 sm:gap-3">
        <FaUserGraduate className="text-xl sm:text-2xl" />
        <h1 className="text-sm sm:text-lg lg:text-xl font-semibold tracking-wide">
          Students Manager
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-[#2D222F] px-2 sm:px-3 py-2 rounded-md w-[140px] sm:w-[220px] lg:w-[320px]">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-xs sm:text-sm w-full placeholder:text-gray-400"
        />

        <button className="text-[#FADCD5] cursor-pointer border-l pl-2 ml-2">
          <FaSearch />
        </button>
      </div>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="flex items-center justify-between px-4 sm:px-7 py-5 bg-[#200101] text-[#fff6e6] sticky top-0 z-30">
        <div className="logo flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#ffcf6b] flex items-center justify-center font-bold text-[#3a0a0a]">
            C
          </div>
          <div>
            <div className="font-bold text-lg text-[#d4af37]">CIEW</div>
            <div className="hidden sm:block text-sm text-[#f0dca6]">
              Council for IT Engineers Welfare
            </div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="text-[#d4af37] hover:text-[#ffcf6b] transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-[#d4af37] hover:text-[#ffcf6b] transition-colors">
            About
          </Link>
          <Link to="/verify" className="text-[#d4af37] hover:text-[#ffcf6b] transition-colors">
            Verify
          </Link>
          <Link to="/institutes" className="text-[#d4af37] hover:text-[#ffcf6b] transition-colors">
            Institutes
          </Link>
          <Link to="/membership" className="text-[#d4af37] hover:text-[#ffcf6b] transition-colors">
            Memberships
          </Link>
          <Link to="/members" className="text-[#d4af37] hover:text-[#ffcf6b] transition-colors">
            Members
          </Link>
          <Link to="/license" className="text-[#d4af37] hover:text-[#ffcf6b] transition-colors">
            License
          </Link>
          <Link to="/join" className="text-[#d4af37] hover:text-[#ffcf6b] transition-colors">
            Join / Login
          </Link>
        </nav>

        <button
          className="md:hidden text-[#f0dca6] hover:text-[#d4af37] transition-colors p-2"
          onClick={toggleSidebar}
          aria-label="Open menu"
        >
          <CiMenuBurger className="w-7 h-7" />
        </button>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
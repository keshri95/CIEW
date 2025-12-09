import { Link } from "react-router-dom";
import { GiSplitCross } from "react-icons/gi";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/verify", label: "Verify" },
    { path: "/institutes", label: "Institutes" },
    { path: "/membership", label: "Memberships" },
    { path: "/members", label: "Members" },
    { path: "/license", label: "License" },
    { path: "/join", label: "Join / Login" },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-[#200101] text-[#fff6e6] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="logo flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#ffcf6b] flex items-center justify-center font-bold text-[#3a0a0a]">
              C
            </div>
            <div>
              <div className="font-bold text-lg text-[#d4af37]">CIEW</div>
              <div className="text-sm text-[#f0dca6]">
                Council for IT Engineers Welfare
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <GiSplitCross className="w-6 h-6 text-[#f0dca6]" />
          </button>
        </div>

        <nav className="p-6">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#d4af37] hover:bg-white/10 transition-all duration-200 hover:pl-6 group"
                >
                  <span className="w-1 h-6 bg-[#d4af37] rounded-full scale-0 group-hover:scale-100 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 p-4 bg-white/5 rounded-lg">
            <h3 className="font-bold text-[#d4af37] mb-3">Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="text-[#f0dca6]">
                WhatsApp:{" "}
                <a
                  href="https://chat.whatsapp.com/LzjAqRFLI0oBWcrVgbot8i"
                  className="text-[#d4af37] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Community
                </a>
              </p>
              <p className="text-[#f0dca6]">
                Email:{" "}
                <span className="text-[#d4af37]">contact@ciew.org</span>
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Link
              to="/join"
              onClick={onClose}
              className="block w-full bg-[#d4af37] text-[#3a0a0a] text-center font-bold py-3 px-4 rounded-lg hover:bg-[#ffcf6b] transition-colors mb-3"
            >
              Get Verified
            </Link>
            <button
              onClick={onClose}
              className="block w-full border border-white/20 text-[#f0dca6] text-center font-bold py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
            >
              How it Works
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
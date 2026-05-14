import { NavLink } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/logo/chesterlogo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Articles", to: "/articles" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "px-4 py-2 text-[14px] font-semibold uppercase tracking-[0.24em] transition",
    isActive ? "text-lime-500" : "text-white/60 hover:text-lime-400",
  ].join(" ");

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0b0b0b]/80 backdrop-blur border-b border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-9">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-12" />
        </NavLink>

        <div className="flex flex-1 items-center justify-end gap-4">
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={navLinkClassName}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button to="/auth/signin" variant="secondary" className="hidden sm:inline-flex px-5 py-2.5 text-[12px]">
              Sign In
            </Button>
            <Button to="/auth/signup" variant="primary" className="hidden sm:inline-flex px-5 py-2.5 text-[12px]">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

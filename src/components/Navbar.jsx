import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
       <NavLink to='/' className="w-100 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md pl-3 pr-3">
       <span className='blue-gradient_text drop-shadow font-semibold'>
          JVBrian
        </span>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-white item-menu_navbar" }>
          Sobre mi
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-white item-menu_navbar"}>
          Portafolio
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
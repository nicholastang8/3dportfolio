import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      {/* <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink> */}
      <NavLink to="/" className='w-20 h-10 rounded-lg bg-white 
      items-center justify-center flex font-bold shadow-md'>
        <p className='blue-gradient_text'>Home</p>
      </NavLink>
      <nav className=' text-lg gap-10 font-medium w-80 h-11 rounded-lg bg-white 
      items-center justify-center flex shadow-md'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

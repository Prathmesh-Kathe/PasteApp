import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row gap-4 place-content-evenly mb-5 mt-2 h-10 p-2">
      <NavLink to="https://www.linkedin.com/in/prathmesh-kathe-5b76ab217/">
        <button className="text-white bg-cyan-500 hover:bg-cyan-600 p-2 px-3 ring-2 ring-pink-300 ring-inset rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
          LinkedIn
        </button>
      </NavLink>
      <NavLink to="/" className="text-cyan-600 hover:underline">
        <button className="text-white bg-cyan-500 hover:bg-cyan-600 p-2 px-3 ring-2 ring-pink-300 ring-inset rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
          Home
        </button>
      </NavLink>
      <NavLink to="/pastes" className="text-cyan-600 hover:underline">
        <button className="text-white bg-cyan-500 hover:bg-cyan-600 p-2 px-3 ring-2 ring-pink-300 ring-inset rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
          Paste
        </button>
      </NavLink>
    </div>
  );
};

export default NavBar;

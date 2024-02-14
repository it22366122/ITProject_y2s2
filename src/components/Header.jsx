import { MdElderlyWoman } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" bg-gradient-to-r from-cyan-500 to-blue-500 ...	">
      <div className="flex justify-between items-center max-w-6xl mx -auto p-5">
        <Link to="/">
          <h1 className="font-bold text-sm:text-xl flex flex-wrap">
            <span className="text-slate-600 font-mono">Seni</span>
            <span className="font-mono font-style:bold">Care </span>
            <MdElderlyWoman className=" " />
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <div>
          <ul className="flex gap-6 font-mono text-slate-50 ">
            <Link to="/">
              <li className="hidden sm:inline hover:text-slate-500">Home </li>
            </Link>
            <Link to="/Services">
              <li className="hidden sm:inline hover:text-slate-500">
                Services
              </li>
            </Link>
            <Link to="/Career">
              <li className="hidden sm:inline hover:text-slate-500"> Career</li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline hover:text-slate-500">
                AboutUs{" "}
              </li>
            </Link>
            <Link to="/Signin">
            <li className=" sm:inline hover:text-slate-500">SignIn </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

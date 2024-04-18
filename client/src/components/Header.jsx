import { Link, useLocation } from "react-router-dom";

import {
  Avatar,
  Dropdown,
  Navbar,
  TextInput,
  Button,
  DropdownHeader,
} from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  if (currentUser) {
  }
  return (
    <Navbar className="bg-gradient-to-r from-sky-600 to-sky-800 ... shadow-xl ">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1  text-white">Seni</span>
        Care
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <Navbar.Collapse className="text-white ">
        <Navbar.Link active={path === "/"} href="/" className="text-white">
          Home
        </Navbar.Link>
        <Navbar.Link
          active={path === "/about"}
          href="/about"
          className="text-white"
        >
          About
        </Navbar.Link>
        <Navbar.Link
          active={path === "/services"}
          href="/services"
          className="text-white"
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          active={path === "/JobPage"}
          href="/jobpage"
          className="text-white"
        >
          Career
        </Navbar.Link>

        {currentUser ? (
          <p style={{ color: "white", textAlign: "left" }}>
            Welcome, {currentUser.username}
          </p>
        ) : null}
      </Navbar.Collapse>

      {currentUser ? (
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="profile pic" img={currentUser.profilePic} rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">@ {currentUser.username}</span>
            <span className="block text-sm">{currentUser.email}</span>
          </Dropdown.Header>
          <Link to={"/dashboard?tab=profile"}>
            <Dropdown.Item>Profile</Dropdown.Item>
          </Link>
          <Dropdown.Divider></Dropdown.Divider>
          <Dropdown.Item>Sign Out</Dropdown.Item>
        </Dropdown>
      ) : (
        <Link to="/signin">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>
      )}

      <Navbar.Toggle />
    </Navbar>
  );
}

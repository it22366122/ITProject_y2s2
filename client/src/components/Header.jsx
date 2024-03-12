import { MdElderlyWoman } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Services from "./dropdownHeader";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

export default function Header() {
  return (
    <Navbar
      fluid
      rounded
      className="bg-gradient-to-r from-sky-600 to-sky-800 ... shadow-xl"
    >
      <Navbar.Brand href="/">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt=" Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          SeniCare
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="text-white ">
        <Navbar.Link href="/" className="text-white hover:text-green-500">
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" className="text-white">
          About
        </Navbar.Link>
        <Navbar.Link href="/services" className="text-white">
          Services
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white">
          Career
        </Navbar.Link>
        <Navbar.Link href="/signin" className="text-white">
          Sign In
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

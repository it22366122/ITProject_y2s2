import React from "react";
import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from "react-icons/hi";
import { FaList } from "react-icons/fa6";
import "../SidebarDash.css";

export default function SidebarDash() {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParam = new URLSearchParams(location.search);
    const tabFormURL = urlParam.get("tab");
    if (tabFormURL) {
      setTab(tabFormURL);
    }
  }, [location.search]);

  return (
    <Sidebar className=" w-full">
      <Sidebar.Items className="bg-slate-300">
        <Sidebar.ItemGroup className="gap-4">
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={currentUser.isAdmin ? "Admin" : "User"}
              labelColor={currentUser.isAdmin ? "green" : "dark"}
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>
          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=posts">
              <Sidebar.Item
                active={tab === "posts"}
                icon={HiDocumentText}
                as="div"
              >
                Vacancies
              </Sidebar.Item>
            </Link>
          )}

          <Sidebar.Item
            icon={HiArrowSmRight}
            className="cursor-pointer text-red-500"
          >
            SignOut
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

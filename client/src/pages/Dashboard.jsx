import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProfileDash from "../components/ProfileDash";
import SidebarDash from "../components/SidebarDash";


export default function Dashboard() {
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
    <div className="min-h-screen flex flex-col md:flex-row">
      <div>
        {/*Side nav bar */}
        <SidebarDash/>
      </div>

      {/*Profile info section */}
      {tab === "profile" && <ProfileDash />}
    </div>
  );
}

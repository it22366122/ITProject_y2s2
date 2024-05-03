import { useSelector } from "react-redux";

import React, { useEffect, useState } from "react";








export default function Analytics() {
  const [totalVacancy, setTotalVacancy] = useState(0);
  const [totalApp, setTotalApp] = useState(0);
  const [accApp, setAccApp] = useState(0); // accepted allpications
  const [penApp, setPenApp] = useState(0); // pen allpications

  


  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchVacancy = async () => {
      try {
        const res = await fetch("/API/post/getjobs");
        const data = await res.json();
        if (res.ok) {
          setTotalVacancy(data.totalVacancy);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchAppli = async () => {
      try {
        const res = await fetch("/API/application/getapplications");
        const data = await res.json();
        if (res.ok) {
          setTotalApp(data.totalApp);
          setAccApp(data.acceptedCount);
          setPenApp(data.pendingCount);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (currentUser.isAdmin) {
      fetchVacancy();
      fetchAppli();
    }
  });
 

  return (
    <div>
      
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function JobPage() {
  const { reference } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const [userJobs, setUserJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/API/post/getjobs");
        const data = await res.json();
        if (res.ok) {
          setUserJobs(data.job);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (currentUser && currentUser.isAdmin) {
      fetchJobs();
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h1 className="my-7 text-center font-semibold text-3xl">All Vacancies</h1>
      <div className="grid grid-cols-3 gap-4">
        {userJobs.map((job) => (
          <div
            key={job.id} // Remember to provide a unique key for each item in the list
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg" src={job.image} alt="" />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {job.title}
              </h5>
              <p>Salary:{job.salary}</p>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {job.description}
              </p>
              <Link to={`/apply/${job.reference}`}>
                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Apply Now
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

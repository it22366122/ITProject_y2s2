import React, { useState } from "react";
import SidebarDash from "../components/SidebarDash";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Table, TableCell, TableRow } from "flowbite-react";
import { Link } from "react-router-dom";

export default function JobList() {
  const { currentUser } = useSelector((state) => state.user);
  const [userJobs, setUserJobs] = useState([]);

  console.log(userJobs);
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
  }, [currentUser]);

  return (
    <div className="table-auto md:mx-auto p-3">
      <h1 className="my-7 text-center font-semibold text-3xl">All Vacancies</h1>
      {currentUser.isAdmin && userJobs.length > 0 ? (
        <div >
          <Table hoverable className="shadow-md ">
            <Table.Head>
              <Table.HeadCell>Date Updated</Table.HeadCell>
              <Table.HeadCell>Image</Table.HeadCell>
              <Table.HeadCell>Title</Table.HeadCell>
              <Table.HeadCell>Salary</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Update</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>

            {userJobs.map((jobs) => (
              <Table.Body key={jobs._id}>
                <TableRow className="bg-blue-100">
                  <TableCell>
                    {new Date(jobs.updatedAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <img src={jobs.image} alt="" className="w-20 h-10" />
                  </TableCell>
                  <TableCell>{jobs.title}</TableCell>
                  <TableCell className="text-green-600">
                    {jobs.salary}
                  </TableCell>
                  <TableCell className="font-bold">{jobs.category}</TableCell>
                  <TableCell>
                    <Link
                      className="text-yellow-400 hover:underline"
                      to={`/update-job/${jobs._id}`}
                    >
                      <span>EDIT</span>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link
                      className="text-red-700 hover:underline"
                      to={`/delete-job/${jobs._id}`}
                    >
                      <span>DELETE</span>
                    </Link>
                  </TableCell>
                </TableRow>
              </Table.Body>
            ))}
          </Table>
        </div>
      ) : (
        <p className="text-center">No Vacancies available at the moment</p>
      )}
    </div>
  );
}

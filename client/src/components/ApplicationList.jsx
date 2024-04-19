import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Table, TableCell, TableRow, Modal, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiDocumentText } from "react-icons/hi";
import { HiOutlineExclamationCircle } from "react-icons/hi";

//for view pdf
import { getStorage } from "firebase/storage";

import { app } from "../firebase";

export default function ApplicationList() {
  const { currentUser } = useSelector((state) => state.user);
  const [userApp, setUserApp] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [appId, setAppId] = useState(" ");
  const storage = getStorage(app);
  console.log(userApp);
  useEffect(() => {
    const fetchApp = async () => {
      try {
        const res = await fetch("/API/application/getapplications");
        const data = await res.json();
        if (res.ok) {
          setUserApp(data.application);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser && currentUser.isAdmin) {
      fetchApp();
    }
  }, [currentUser]);

  // Function to view CV file
  const viewPDF = async (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  const handleDeleteApp = async () => {
    setShowModal(false);
    try {
      const res = await fetch(`/API/application/deleteapp/${appId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserApp((prev) => prev.filter((app) => app._id !== appId));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="table-auto md:mx-auto p-3">
      <h1 className="my-7 text-center font-semibold text-3xl">
        All Applications
      </h1>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Date Submitted</Table.HeadCell>
          <Table.HeadCell>#VAcRef</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>E-mail</Table.HeadCell>
          <Table.HeadCell>CV</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>

        {userApp.map((apps) => (
          <Table.Body key={apps._id}>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell>
                {new Date(apps.updatedAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Link
                  className="font-medium text-gray-900 dark:text-white"
                  to={"#"}
                >
                  {apps.vacancyReference}
                </Link>
              </TableCell>
              <TableCell className="text-gray-600">{apps.fullName}</TableCell>
              <TableCell className="text-gray-600">{apps.phone}</TableCell>
              <TableCell className="text-grey-600">{apps.email}</TableCell>
              <TableCell className="text-blue-600">
                <span
                  className="font-medium text-blue-600 dark:text-white cursor-pointer"
                  onClick={() => viewPDF(apps.cv)}
                >
                  <HiDocumentText className="inline-block mr-2 " />
                  Click to View
                </span>
              </TableCell>
              <TableCell>
                <span
                  className="font-medium text-red-500 hover:underline cursor-pointer"
                  onClick={() => {
                    setShowModal(true);
                    setAppId(apps._id);
                  }}
                >
                  REJECT
                </span>
              </TableCell>
            </TableRow>
          </Table.Body>
        ))}
      </Table>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this application?
            </h3>
            <div className="flex justify-center gap-4">
              <Button onClick={handleDeleteApp} color="failure">
                Yes, Delete{" "}
              </Button>
              <Button onClick={() => setShowModal(false)} color="gray">
                No,Back{" "}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

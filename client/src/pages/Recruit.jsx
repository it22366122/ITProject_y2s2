import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Recruit() {
  const { email, name } = useParams();
  const [formData, setFormData] = useState({
    email: email || "",
    name: name || "",
    date: "",
    time: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/API/sendmail/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error sending email: ${errorText}`);
      }

      const data = await response.json();

      alert(data.message);
      navigate("/dashboard?tab=applications");

      setFormData({
        email: formData.email,
        name: formData.name,
        date: "",
        time: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert(`Error sending email: ${error.message}`);
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl my-7 font-semibold">
        Employee Recruit Terminal
      </h1>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        {/* Email input */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Applicant Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.email}
            disabled
          />
        </div>

        {/* Name input */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Applicant Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.name}
            disabled
          />
        </div>

        {/* Date input */}
        <div>
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Appointment Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Time input */}
        <div>
          <label
            htmlFor="time"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Interview Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Recruit;

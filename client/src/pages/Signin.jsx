import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../loading.css";

export default function Signin() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const submitData = async (e) => {
    try {
      e.preventDefault();

      // Show loading effect
      showLoadingOverlay();

      const res = await fetch("/API/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        window.alert(data.message); // alert the error message
      } else {
        navigate("/");
      }
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
      window.alert("Error: " + error.message);
    } finally {
      // Hide loading overlay 
      setTimeout(hideLoadingOverlay, 1000);
    }
  };

  // Function to show loading overlay
  const showLoadingOverlay = () => {
    // Create and append loading overlay element to the document body
    const overlay = document.createElement("div");
    overlay.className = "loading-overlay";
    overlay.innerHTML = `<div class="spinner"></div>`;
    document.body.appendChild(overlay);
  };

  // Function to hide loading overlay
  const hideLoadingOverlay = () => {
    // Remove loading overlay element from the document body
    const overlay = document.querySelector(".loading-overlay");
    if (overlay) {
      overlay.remove();
    }
  };

  console.log(formData);
  return (
    <div className="flex justify-center items-center max-w-lg mx-auto">
      <div className="flex flex-col w-full">
        <h1 className="font-mono text-3xl text-center font-bold my-8">
          Sign In
        </h1>
        <form onSubmit={submitData} className="flex flex-col gap-4">
          <input
            className="border p-3 rounded-lg w-full"
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
          />
          <input
            className="border p-3 rounded-lg w-full"
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
          />
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="font-mono">
              Remember me
            </label>
          </div>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 ... shadow-xl font-mono rounded-lg text-white p-3 hover:text-lime-400">
            Sign In
          </button>
        </form>
        <div>
          <p className="font-mono p-6 ">
            Dont have an account?{" "}
            <Link to="/signup">
              {" "}
              <span className="font-mono text-blue-600 hover:underline">
                Sign Up here
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

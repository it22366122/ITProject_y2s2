import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import tnc from "./pages/tnc";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import AddJob from "./pages/AddJob";
import UpdateJob from "./pages/UpdateJob";
import JobPage from "./pages/JobPage";
import JobList from "./components/JobList";
import ApplyJob from "./pages/ApplyJob";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobpage" element={<JobPage />} />
        <Route path="/apply/:reference" element={<ApplyJob />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<AdminPrivateRoute />}>
          <Route path="/add-vacancy" element={<AddJob />} />
          <Route path="/update-vacancy/:jobId" element={<UpdateJob />} />
        </Route>

        <Route element={<AdminPrivateRoute />}>
          <Route path="/all-jobs" element={<JobList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import tnc from "./pages/tnc";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Import Footer from the correct location
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import AddJob from "./pages/AddJob";
import UpdateJob from "./pages/UpdateJob";
import Recruit from "./pages/Recruit";
import JobPage from "./pages/JobPage";
import ApplyJob from "./pages/ApplyJob";
import JobList from "./components/JobList";
import ApplicationList from "./components/ApplicationList";
import UserList from "./components/UserList";

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
          <Route path="/recruit/:email/:name/:appId" element={<Recruit />} />
        </Route>

        <Route element={<AdminPrivateRoute />}>
          <Route path="/all-jobs" element={<JobList />} />
          <Route path="/all-users" element={<UserList />} />
          <Route path="/all-applications" element={<ApplicationList />} />
        </Route>
      </Routes>
     
      <Footer />
    </BrowserRouter>
  );
}

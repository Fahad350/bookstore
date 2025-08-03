import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import useAuth from "./hooks/useAuth";

function App() {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Courses"
          element={authUser ? <Courses /> : <Navigate to="/Signup" />}
        />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

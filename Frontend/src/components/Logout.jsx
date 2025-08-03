import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      setAuthUser(null);
      localStorage.removeItem("Users");
      toast.success("Logout Successfully!");
      navigate("/Signup"); // 👈 preferred over window.location.reload()
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div>
      <button
        className="text-white bg-red-500 rounded-md cursor-pointer px-3 py-2"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;

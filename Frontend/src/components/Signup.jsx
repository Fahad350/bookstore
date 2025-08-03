import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:5000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate("/");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.log(err.response?.data); // log backend message
        // alert(err.response?.data?.message || "Signup Failed");
        toast.error("User Already Exist!", err.response?.data?.message);
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div id="my_modal_3" className="">
          <div className="  dark:bg-slate-900 dark:text-white border-2 shadow-pink-400 py-6 px-14 rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 md:mr-130 md:mt-20 mt-28 mr-5 hover:bg-pink-500"
              >
                ✕
              </Link>

              <h3 className="font-bold  text-center text-2xl text-pink-500">
                Sign-Up
              </h3>
              <br />

              <label>Full Name</label>
              <br />

              <input
                className="h-10 w-60 px-1 mt-3 border-pink-500 border-1"
                type="text"
                placeholder="John duo"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
              <br />
              <br />
              <label>Email</label>
              <br />

              <input
                className="h-10 w-60 px-1 mt-3  border-pink-500 border-1"
                type="email"
                placeholder="abc@gmail.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
              <br />
              <br />

              <label>Password</label>
              <br />

              <input
                className="h-10  w-60 px-1 mt-3 border-pink-500 border-1"
                type="password"
                placeholder="********"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
              <br />
              <br />
              <br />
              <div className="items-center justify-center text-center">
                <button
                  type="submit"
                  className="btn bg-pink-500 text-white md:w-45 w-60 rounded-2xl hover:scale-105 duration-300 px-8 "
                >
                  Sign-Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

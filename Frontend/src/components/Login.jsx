import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:5000/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successfully !");

          document.getElementById("my_modal_5").close();
          window.location.reload();
        }

        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.log(err.response?.data); // log backend message
        // alert(err.response?.data?.message || "Login Failed");
        toast.error("Login Failed!", err.response?.data?.message);
      });
  };
  return (
    <>
      <div>
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle  "
        >
          <div className="modal-box  dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="font-bold  text-center text-2xl text-pink-500">
                Login
              </h3>
              <p className="py-2">
                Press <span className="text-pink-500">ESC key</span> or click
                the button below to <span className=" text-red-600">close</span>
              </p>
              <label className="">Email</label>
              <br />

              <input
                className="h-10 w-80 px-1 md:w-115 mt-4 border-pink-500 border-1"
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
                className="h-10 w-80 px-1 md:w-115 mt-4 border-pink-500 border-1"
                type="password"
                placeholder="********"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  Password is required
                </p>
              )}
              <br />
              <br />
              <div className="items-center justify-center text-center">
                <button
                  type="submit"
                  className="btn bg-pink-500 text-white md:w-75 w-60 rounded-2xl hover:scale-105 duration-300 px-8 "
                >
                  Login
                </button>
              </div>
              <div method="dialog">
                <h4 className="text-pink-500 mt-3 ">Not Regitered?</h4>
                <div className="modal-action ">
                  <div className="flex justify-between md:space-x-29 space-x-24">
                    <Link to={"/Signup"}>
                      <button className="btn bg-blue-500 text-white md:w-44 w-30 rounded-2xl hover:scale-105 duration-300">
                        Signup
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn bg-red-600 text-white md:w-44 w-30 rounded-2xl hover:scale-105 duration-300"
                      onClick={() =>
                        document.getElementById("my_modal_5").close()
                      }
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;

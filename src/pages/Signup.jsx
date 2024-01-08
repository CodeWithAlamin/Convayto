import { useState } from "react";
import { useSignup } from "../features/authentication/useSignup";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("123456789");

  const { signup, isPending } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();

    signup(
      { fullname, username, email, password },
      {
        onSettled: () => {
          setFullname("");
          setUsername("");
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-deepSlate text-black transition-all duration-200 ease-in-out dark:bg-deepSlate-dark dark:text-white">
      <div className="w-full max-w-80 rounded-xl bg-mediumSlate p-6 dark:bg-mediumSlate-dark">
        <h1 className="mb-8 text-center text-3xl  uppercase">Sign up</h1>

        <form onSubmit={handleSubmit} className="mb-4 flex flex-col">
          <div className="input-container mb-4 w-full">
            <div className="relative">
              <input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                autoComplete="off"
                type="text"
                id="fullname"
                className="peer block w-full appearance-none rounded-lg border-2 border-deepSlate bg-transparent px-2.5 pb-2.5 pt-4 text-sm focus:border-textViolet-dark focus:outline-none focus:ring-0 dark:focus:border-textViolet-dark"
                placeholder=" "
              />
              <label
                htmlFor="fullname"
                className="pointer-events-none absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-mediumSlate px-2 text-sm text-lightSlate-dark transition-all duration-100 ease-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2  peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-textViolet-dark rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-mediumSlate-dark dark:text-gray-400 peer-focus:dark:text-textViolet-dark"
              >
                Full name
              </label>
            </div>

            {/* <p className="output-message"></p> */}
          </div>

          {/* Username */}

          <div className="input-container mb-4 w-full">
            <div className="relative">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="off"
                type="text"
                id="username"
                className="peer block w-full appearance-none rounded-lg border-2 border-deepSlate bg-transparent px-2.5 pb-2.5 pt-4 text-sm focus:border-textViolet-dark focus:outline-none focus:ring-0 dark:focus:border-textViolet-dark"
                placeholder=" "
              />
              <label
                htmlFor="username"
                className="pointer-events-none absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-mediumSlate px-2 text-sm text-lightSlate-dark transition-all duration-100 ease-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2  peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-textViolet-dark rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-mediumSlate-dark dark:text-gray-400 peer-focus:dark:text-textViolet-dark"
              >
                Username
              </label>
            </div>
            {/* <p className="output-message"></p> */}
          </div>

          {/* Email */}

          <div className="input-container mb-4 w-full">
            <div className="relative">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                type="email"
                id="email"
                className="peer block w-full appearance-none rounded-lg border-2 border-deepSlate bg-transparent px-2.5 pb-2.5 pt-4 text-sm focus:border-textViolet-dark focus:outline-none focus:ring-0 dark:focus:border-textViolet-dark"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-mediumSlate px-2 text-sm text-lightSlate-dark transition-all duration-100 ease-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2  peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-textViolet-dark rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-mediumSlate-dark dark:text-gray-400 peer-focus:dark:text-textViolet-dark"
              >
                Email
              </label>
            </div>

            {/* <p className="output-message"></p> */}
          </div>

          {/* Password */}

          <div className="input-container mb-4 w-full">
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                type="password"
                id="password"
                className="peer block w-full appearance-none rounded-lg border-2 border-deepSlate bg-transparent px-2.5 pb-2.5 pt-4 text-sm focus:border-textViolet-dark focus:outline-none focus:ring-0 dark:focus:border-textViolet-dark"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="pointer-events-none absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-mediumSlate px-2 text-sm text-lightSlate-dark transition-all duration-100 ease-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2  peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-textViolet-dark rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-mediumSlate-dark dark:text-gray-400 peer-focus:dark:text-textViolet-dark"
              >
                Password
              </label>
            </div>

            {/* <p className="output-message"></p> */}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="flex items-center justify-center rounded-md bg-violet-800 p-3 font-bold uppercase leading-6 tracking-wider transition-all duration-200 hover:bg-violet-900 active:scale-95 disabled:pointer-events-none disabled:bg-violet-900"
          >
            {isPending && <Loader size="small" />}
            <span className="ml-2">Sign up</span>
          </button>
        </form>

        <p>
          Already a user?{" "}
          <Link className="text-violet-400 underline" to="/signin">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

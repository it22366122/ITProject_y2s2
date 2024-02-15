import {Link} from 'react-router-dom' 

export default function Signup() {
  return (
    <div className="flex justify-center items-center max-w-lg mx-auto">
      <div className="flex flex-col w-full">
        <h1 className="font-mono text-3xl text-center font-bold my-8">
          Sign Up
        </h1>
        <form action="" className="flex flex-col gap-4">
          <input
            className="border p-2 rounded-lg w-full"
            type="text"
            placeholder="Full Name"
            id="fullName"
          />
          <input
            className="border p-3 rounded-lg w-full"
            type="text"
            placeholder="Username"
            id="username"
          />
          <input
            className="border p-3 rounded-lg w-full"
            type="text"
            placeholder="Password"
            id="password"
          />
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="font-mono">
              I agree to{" "}
              <Link to="/tnc">
                {" "}
                <span className="font-mono text-red-600 hover:underline">
                  Terms and Conditions
                </span>
              </Link>
            </label>
          </div>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 ... shadow-xl font-mono rounded-lg text-white p-3 hover:text-lime-400">
            Sign Up
          </button>
        </form>
        <div>
          <p className="font-mono p-6 ">
            Already registered?{" "}
            <Link to="/signin">
              {" "}
              <span className="font-mono text-blue-600 hover:underline">
                Sign In
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

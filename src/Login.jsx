import axios from "axios";
import { useState } from "react";

const Login = () => {

  const [emailId, setEmailId] = useState("Krishna@gmail.com");
  console.log(emailId);
  const [password, setPassword] = useState("Krishna@123");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        emailId,
        password,
      })
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="flex justify-center my-35 h-70">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login Page</h2>
          <div>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input
                type="text"
                value={emailId}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;

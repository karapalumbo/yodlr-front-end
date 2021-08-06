import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserApis from "../api/api";

function Login() {
  const history = useHistory();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await UserApis.login(data);
    history.push("/admin");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData((info) => ({
      ...info,
      [name]: value,
    }));
  }

  return (
    <div>
      <h1>Welcome back!</h1>
      <h3> Please login below to access your account.</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="username">Username</label>
          <input
            type="username"
            name="username"
            id="username"
            placeholder="Username"
            value={data.username}
            onChange={handleChange}
          />
        </div>

        {/* <div>
          <label for="=password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
        </div> */}
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

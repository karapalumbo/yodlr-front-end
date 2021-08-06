import React, { useState } from "react";
import UserApis from "../api/api";
import { useHistory } from "react-router-dom";

function Signup() {
  const history = useHistory();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await UserApis.signup(data);
    history.push("/admin");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  return (
    <div>
      <h1>Yodlr Registration Portal</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={data.password}
            onChange={handleChange}
          />
        </div> */}
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      if (!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      } else {
        const json = await response.json();
        console.log(json);

        if (!json.success) {
          alert('Invalid username or password');
        }

        if (json.success) {
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  console.log(credentials);

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={onChange}
              value={credentials.email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={onChange}
              name="password"
              value={credentials.password}
            />
          </div>

          <button type="submit" className="m-3 btn btn-primary">
            Submit
          </button>
          <Link to="/createuser" className="m-3 btn btn-danger">
            I am a New User
          </Link>
        </form>
      </div>
    </>
  );
}

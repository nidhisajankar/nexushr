import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api";

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      const response = await loginUser(user);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      alert("Login Successful");

      // Page reload so App and Sidebar update immediately
      window.location.href = "/";

    } catch (error) {

      console.error(error);

      alert("Invalid Email or Password");

    }

  };

  return (

    <div className="container">

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

      <br />

      <p>
        Don't have an account?
        <Link to="/register"> Register</Link>
      </p>

    </div>

  );

}

export default Login;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "EMPLOYEE"
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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

      await registerUser(user);

      alert("Registration Successful");

      navigate("/login");

    } catch (error) {

      console.error(error);

      alert("Registration Failed");

    }

  };

  return (

    <div className="container">

      <h1>Register</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={user.fullName}
          onChange={handleChange}
          required
        />

        <br /><br />

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

        <select
          name="role"
          value={user.role}
          onChange={handleChange}
        >

          <option value="ADMIN">
            ADMIN
          </option>

          <option value="HR">
            HR
          </option>

          <option value="MANAGER">
            MANAGER
          </option>

          <option value="EMPLOYEE">
            EMPLOYEE
          </option>

        </select>

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>

      <br />

      <p>

        Already have an account?

        <Link to="/login">
          {" "}Login
        </Link>

      </p>

    </div>

  );

}

export default Register;
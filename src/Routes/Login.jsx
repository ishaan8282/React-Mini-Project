import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

// https://reqres.in/api/login

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const { loginUser } = useContext(AppContext);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(values)
    })
      .then((res) => res.json())
      .then((res) => {
        // alert("success");
        console.log("token", res.token);
        loginUser(res.token);
        navigate("/dashboard");
      });

  }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="form" data-testid="login-form">
        <div>
          <label>
            <input data-testid="email-input" 
             type="email" 
             placeholder="email" 
             onChange={handleChange}
              value={values.email}
              name="email"
             />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={handleChange}
              value={values.password}
              name="password"
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
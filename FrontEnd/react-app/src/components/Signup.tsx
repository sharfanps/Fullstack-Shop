import { useState } from "react";
import "./login.css"; 
import { registerUser } from "../services/shop_service";
import { Link } from "react-router-dom";

const initialForm = {
  email: "",
  password: "",
  reEnterPassword: "",
};

type FormErrors = {
  email?: string,
  password?: string,
  reEnterPassword?: string,
};
export default function Signup() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors:FormErrors = {};

    // Email
    if (!form.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Password
    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    // Re-enter password
    if (!form.reEnterPassword) {
      newErrors.reEnterPassword = "Password is required.";
    } else if (form.password !== form.reEnterPassword) {
      newErrors.reEnterPassword = "Passwords must match.";
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const user = {
        email: form.email,
        password: form.password,
      };

      console.log("User values:", JSON.stringify(user));

      try {
       await registerUser({
        email:form.email,
        password:form.password
       });
        alert("Registration successful");
      } catch (error) {
        console.error("Registration failed:", error);
      }
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="Welcome-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {/* Email */}
          <div className={`form-group ${errors.email ? "error" : ""}`}>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
              <label>Email</label>

              {submitted && errors.email && (
                <span className="error-message show">{errors.email}</span>
              )}
              <span className="focus-border"></span>
            </div>
          </div>

          {/* Password */}
          <div className={`form-group ${errors.password ? "error" : ""}`}>
            <div className="input-wrapper password-wrapper">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
              <label>Password</label>

              {submitted && errors.password && (
                <span className="error-message show">{errors.password}</span>
              )}

              <button type="button" className="password-toggle">
                <span className="eye-icon"></span>
              </button>
              <span className="focus-border"></span>
            </div>
          </div>

          {/* Re-enter Password */}
          <div className={`form-group ${errors.reEnterPassword ? "error" : ""}`}>
            <div className="input-wrapper password-wrapper">
              <input
                type="password"
                name="reEnterPassword"
                value={form.reEnterPassword}
                onChange={handleChange}
              />
              <label>Re-enter Password</label>

              {submitted && errors.reEnterPassword && (
                <span className="error-message show">
                  {errors.reEnterPassword}
                </span>
              )}

              <button type="button" className="password-toggle">
                <span className="eye-icon"></span>
              </button>
              <span className="focus-border"></span>
            </div>
          </div>

          <button type="submit" className="login-btn btn">
            <span className="btn-text">Sign In</span>
            <span className="btn-loader"></span>
          </button>
          <Link to="/">Click here to Login</Link>
        </form>
      </div>
    </div>
  );
}

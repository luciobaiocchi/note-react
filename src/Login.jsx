import { useNavigate } from "react-router-dom";
import './Login.css';

function Login({ setUserType }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "n@n" && password === "1234") {
      setUserType("nutrizionista");
      navigate("/");
    } else if (email === "c@c" && password === "1234") {
      setUserType("client");
      navigate("/");
    } else {
      alert("Credenziali non valide!");
    }
  };

  return (
    <div className="Login">
      <header className="Login-header">
        <h1>Login Page</h1>
        <p className="Login-value">Please enter your credentials</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="Login-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="Login-input"
            required
          />

          <button type="submit" className="Login-button">
            Login
          </button>
        </form>
      </header>
    </div>
  );
}

export default Login;

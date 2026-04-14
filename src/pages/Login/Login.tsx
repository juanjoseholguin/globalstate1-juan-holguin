import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [, setPassword] = useState("");
  const ctx = useContext(UserContext);
  const setUserEmail = ctx?.setEmail;

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUserEmail?.(email);
  };

  return (
    <div>
      <nav className="nav-links">
        <Link to="/">inicio</Link>
        <Link to="/catalogue">catalogo</Link>
      </nav>
      <form>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="escribe tu email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="escribe tu contrasena"
          type="password"
        />
        <button type="button" onClick={handleSubmit}>
          iniciar sesion
        </button>
      </form>
    </div>
  );
};
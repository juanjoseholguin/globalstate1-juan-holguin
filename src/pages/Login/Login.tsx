import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [, setPassword] = useState("");
  const navigate = useNavigate();
  const ctx = useContext(UserContext);
  const setUserEmail = ctx?.setEmail;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    setUserEmail?.(trimmed);
    navigate("/");
  };

  return (
    <div>
      <nav className="nav-links">
        <Link to="/">inicio</Link>
        <Link to="/catalogue">catalogo</Link>
      </nav>
      <p className="login-hint">
        al enviar te lleva al inicio y ya queda tu correo guardado
      </p>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="escribe tu email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="escribe tu contrasena"
          type="password"
        />
        <button type="submit">iniciar sesion</button>
      </form>
    </div>
  );
};
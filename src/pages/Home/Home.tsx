import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const Home = () => {
  const ctx = useContext(UserContext);
  const email = ctx?.email ?? "";

  return (
    <div>
      <h1>
        pagina de inicio holguin :D
        {email ? ` ${email}` : ""}
      </h1>
      <nav className="nav-links">
        <Link to="/catalogue">catalogo</Link>
        <Link to="/saved">guardadass</Link>
        <Link to="/login">iniciar sesion</Link>
      </nav>
    </div>
  );
};
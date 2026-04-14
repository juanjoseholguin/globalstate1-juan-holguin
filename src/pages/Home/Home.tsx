import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const Home = () => {
  const ctx = useContext(UserContext);
  const email = ctx?.email ?? "";

  return (
    <div>
      <h1>pagina de inicio holguin :D</h1>
      {email ? (
        <p className="home-session">
          listo: entraste como <strong>{email}</strong>
        </p>
      ) : (
        <p className="home-session home-session--guest">
          aun no hay correo: ve a iniciar sesion para guardarlo
        </p>
      )}
      <nav className="nav-links">
        <Link to="/catalogue">catalogo</Link>
        <Link to="/saved">guardadass</Link>
        <Link to="/login">iniciar sesion</Link>
      </nav>
    </div>
  );
};
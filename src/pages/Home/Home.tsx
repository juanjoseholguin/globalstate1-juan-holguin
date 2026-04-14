import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>pagina de inicio</h1>
      <nav className="nav-links">
        <Link to="/catalogue">catalogo</Link>
        <Link to="/saved">guardadass</Link>
      </nav>
    </div>
  );
};
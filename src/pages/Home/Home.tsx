import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>pagina de inicio</h1>
      <p>ingresa a catalogo para ver las mejores peliculas y guardar tus favoritas</p>
      <nav className="nav-links">
        <Link to="/catalogue">catalogo</Link>
        <Link to="/saved">guardadass</Link>
      </nav>
    </div>
  );
};
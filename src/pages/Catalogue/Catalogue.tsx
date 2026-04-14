import { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext, type Movie } from "../../context/MoviesContext";
import moviesData from "../../data/movies.json";

const movies = moviesData as Movie[];

export const Catalogue = () => {
  const ctx = useContext(MoviesContext);
  if (!ctx) return null;
  const { addFavorite, addWatchLater } = ctx;

  return (
    <div className="page-movies">
      <nav className="nav-links">
        <Link to="/">inicio</Link>
        <Link to="/saved">guardadass</Link>
      </nav>
      <h1>catalogo</h1>
      <ul className="movie-grid">
        {movies.map((m) => (
          <li key={m.id} className="movie-card">
            {m.image && (
              <a href={m.link} target="_blank" rel="noreferrer">
                <img src={m.image} alt="" width={200} height={280} />
              </a>
            )}
            <h2>{m.title}</h2>
            <p>
              {m.genre} · {m.year}
            </p>
            {m.link && (
              <p>
                <a href={m.link} target="_blank" rel="noreferrer">
                  link
                </a>
              </p>
            )}
            <button type="button" onClick={() => addFavorite(m)}>
              agregar a favoritos
            </button>
            <button type="button" onClick={() => addWatchLater(m)}>
              ver mas tarde
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

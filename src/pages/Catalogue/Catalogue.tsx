import { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext, type Movie } from "../../context/MoviesContext";
import moviesData from "../../data/movies.json";

const movies = moviesData as Movie[];

export const Catalogue = () => {
  const ctx = useContext(MoviesContext);
  if (!ctx) return null;
  const { addFavorite, addWatchLater, favorites, watchLater } = ctx;

  return (
    <div className="page-movies">
      <nav className="nav-links">
        <Link to="/">inicio</Link>
        <Link to="/saved">guardadass</Link>
      </nav>
      <h1>catalogo</h1>
      <ul className="movie-grid">
        {movies.map((m) => {
          const inFav = favorites.some((x) => x.id === m.id);
          const inLater = watchLater.some((x) => x.id === m.id);
          return (
            <li key={m.id} className="movie-card">
              {m.image && m.link && (
                <a
                  className="movie-poster-link"
                  href={m.link}
                  target="_blank"
                  rel="noreferrer"
                  title="clic para ver mas informacion de la pelicula (otra pestaña)"
                >
                  <img src={m.image} alt="" width={200} height={280} />
                </a>
              )}
              {m.image && !m.link && (
                <img src={m.image} alt="" width={200} height={280} />
              )}
              <h2>{m.title}</h2>
              <p>
                {m.genre} · {m.year}
              </p>
              <button
                type="button"
                className={inFav ? "btn-saved" : ""}
                disabled={inFav}
                onClick={() => addFavorite(m)}
              >
                {inFav ? "ya esta en favoritos" : "Agregar a favoritos"}
              </button>
              <button
                type="button"
                className={inLater ? "btn-saved" : ""}
                disabled={inLater}
                onClick={() => addWatchLater(m)}
              >
                {inLater ? "ya esta en ver mas tarde" : "Ver más tarde"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

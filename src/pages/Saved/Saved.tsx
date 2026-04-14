import { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../context/MoviesContext";

export const Saved = () => {
  const ctx = useContext(MoviesContext);
  if (!ctx) return null;
  const { favorites, watchLater, removeFavorite, removeWatchLater } = ctx;

  return (
    <div className="page-movies">
      <nav className="nav-links">
        <Link to="/">inicio</Link>
        <Link to="/catalogue">catalogo</Link>
      </nav>
      <h1>guardadass</h1>

      <section>
        <h2>favoritos</h2>
        {favorites.length === 0 ? (
          <p>no has agregado peliculas aun.</p>
        ) : (
          <ul className="saved-list">
            {favorites.map((m) => (
              <li key={m.id}>
                {m.image && (
                  <img src={m.image} alt="" width={120} height={168} />
                )}
                <span>
                  {m.title} — {m.genre} ({m.year})
                </span>
                <button type="button" onClick={() => removeFavorite(m.id)}>
                  quitar
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>ver mas tarde</h2>
        {watchLater.length === 0 ? (
          <p>no has agregado peliculas aun.</p>
        ) : (
          <ul className="saved-list">
            {watchLater.map((m) => (
              <li key={m.id}>
                {m.image && (
                  <img src={m.image} alt="" width={120} height={168} />
                )}
                <span>
                  {m.title} — {m.genre} ({m.year})
                </span>
                <button type="button" onClick={() => removeWatchLater(m.id)}>
                  quitar
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

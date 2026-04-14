import { createContext, useState } from "react";

export type Movie = {
  id: number;
  title: string;
  genre: string;
  year: number;
  image?: string;
  link?: string;
};

type MoviesContextType = {
  favorites: Movie[];
  watchLater: Movie[];
  addFavorite: (movie: Movie) => void;
  addWatchLater: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  removeWatchLater: (id: number) => void;
};

export const MoviesContext = createContext<MoviesContextType | null>(null);

export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [watchLater, setWatchLater] = useState<Movie[]>([]);

  const addFavorite = (movie: Movie) => {
    setFavorites((prev) =>
      prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
    );
  };

  const addWatchLater = (movie: Movie) => {
    setWatchLater((prev) =>
      prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
    );
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((m) => m.id !== id));
  };

  const removeWatchLater = (id: number) => {
    setWatchLater((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        watchLater,
        addFavorite,
        addWatchLater,
        removeFavorite,
        removeWatchLater,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

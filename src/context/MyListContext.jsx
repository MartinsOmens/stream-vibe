import { createContext, useContext, useEffect, useState } from "react";

const MyListContext = createContext();

export function MyListProvider({ children }) {
  const [savedMovies, setSavedMovies] = useState(() => {
    const storedMovies = localStorage.getItem("myList");

    return storedMovies ? JSON.parse(storedMovies) : [];
  });

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(savedMovies));
  }, [savedMovies]);

  const saveMovie = (movie) => {
    setSavedMovies((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeMovie = (id) => {
    setSavedMovies((prev) => prev.filter((m) => m.id !== id));
  };

  const isSaved = (id) => {
    return savedMovies.some((m) => m.id === id);
  };

  return (
    <MyListContext.Provider
      value={{
        savedMovies,
        saveMovie,
        removeMovie,
        isSaved,
      }}
    >
      {children}
    </MyListContext.Provider>
  );
}

export const useMyList = () => useContext(MyListContext);
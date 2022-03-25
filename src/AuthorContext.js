import React, { createContext, useEffect, useState } from "react";

export const FavouritesContext = createContext();

export const FavouriteProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem("favorites"));
    if (data) {
      setFavorites(data);
    } else {
      setFavorites([]);
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavouritesContext.Provider value={[favorites, setFavorites]}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

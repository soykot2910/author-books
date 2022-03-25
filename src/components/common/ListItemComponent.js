import React, { useContext, useEffect, useState } from "react";
import { FavouritesContext } from "../../AuthorContext";
import { checkFavourite, toggleFavourite } from "../../Helper";
import { LinkIcon, HeartIcon } from "./SVGIcons";

const ListItemComponent = ({ author }) => {
  const { name, bio, link } = author;
  const [favorites, setFavorites] = useContext(FavouritesContext);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    checkFavourite(favorites, author, setIsFavourite);
  }, []);

  return (
    <div className="single__author">
      <div className="links">
        <a href={link}>
          <LinkIcon />
        </a>
        <div
          onClick={() =>
            toggleFavourite(
              isFavourite,
              setIsFavourite,
              favorites,
              setFavorites,
              author
            )
          }
        >
          <HeartIcon isFavourite={isFavourite} />
        </div>
      </div>
      <h3>Name:{name}</h3>
      <p>Bio:{bio}</p>
    </div>
  );
};

export default ListItemComponent;

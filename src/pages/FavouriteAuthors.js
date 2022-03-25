import React, { useContext, useEffect, useState } from "react";
import { FavouritesContext } from "../AuthorContext";
import ListItemComponent from "../components/common/ListItemComponent";
import { Spinner } from "../components/common/SVGIcons";

const FavouriteAuthors = () => {
  const [favorites, ] = useContext(FavouritesContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : favorites?.length !== 0 ? (
        <>
       <h3 className="heading">Favourite Author List</h3>
        <div className="authors">
          {favorites?.map((author) => {
            return <ListItemComponent key={author?._id} author={author} />;
          })}
        </div>
        </>
      ) : (
        <div className="no-data">
          <h1>No Data Found</h1>
        </div>
      )}
    </>
  );
};

export default FavouriteAuthors;

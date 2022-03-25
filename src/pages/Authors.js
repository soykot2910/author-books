import React, { useEffect, useState } from "react";
import ListItemComponent from "../components/common/ListItemComponent";
import Pagination from "../components/common/Pagination";
import { Spinner } from "../components/common/SVGIcons";
import { getAuthorList } from "../Helper";

const Authors = () => {
  const [loading, setLoading] = useState(false);
  const [page,setPage]=useState(1)
  const [authorList, setAuthorList] = useState([]);

  useEffect(() => {
    getAuthorList(page,setAuthorList, setLoading);
  }, [page]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : authorList?.length !== 0 ? (
       <>
       <h3 className="heading">Author List</h3>
        <div className="authors">
          {authorList?.results?.map((author) => {
            return <ListItemComponent key={author?._id} author={author} />;
          })}
        </div>
        <Pagination page={page} setPage={setPage}/>
       </>
      ) : (
        <div className="no-data">
          <h1>No Data Found</h1>
        </div>
      )}
    </>
  );
};

export default Authors;

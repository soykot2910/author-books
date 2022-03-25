import React from "react";
import { LeftArrow, RightArrow } from "./SVGIcons";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="pagination">
      <div onClick={() => page > 1 && setPage(page - 1)}>
        <LeftArrow />
      </div>
      <span>{page}</span>
      <div onClick={() => setPage(page + 1)}>
        <RightArrow />
      </div>
    </div>
  );
};

export default Pagination;

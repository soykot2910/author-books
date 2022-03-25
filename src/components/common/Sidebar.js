import React from "react";

const Sidebar = () => {
  const path = window.location.pathname;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Authors List</h3>
      </div>
      <div className="sidebar-body">
        <a href="/authors" className={path === "/authors" ? "active" : ""}>
          Authors
        </a>
        <a
          href="/favourite-authors"
          className={path === "/favourite-authors" ? "active" : ""}
        >
          Favourites Authors
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;

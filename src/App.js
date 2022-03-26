import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import { FavouriteProvider } from "./AuthorContext";
import { Spinner } from "./components/common/SVGIcons";

const Authors = lazy(() => import("./pages/Authors"));
const FavouriteAuthors = lazy(() => import("./pages/FavouriteAuthors"));

const App = () => {
  
  const currentPath = window.location.pathname;
  if(currentPath==="/"){
    window.location.href="/authors"
  }


  return (
    <FavouriteProvider>
      <BrowserRouter>
        <div className="container">
          <Sidebar />
          <main className="main-content">
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="no-data">
                      <h1>Author Books</h1>
                    </div>
                  }
                />
                <Route path="/authors" element={<Authors />} />
                <Route
                  path="/favourite-authors"
                  element={<FavouriteAuthors />}
                />
                <Route
                  path="*"
                  element={
                    <div className="no-data">
                      <h1>Page Not Found</h1>
                    </div>
                  }
                />
              </Routes>
            </Suspense>
          </main>
        </div>
      </BrowserRouter>
    </FavouriteProvider>
  );
};

export default App;

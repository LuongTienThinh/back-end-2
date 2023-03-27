import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Styles from "./components/Styles";
import { publicRoutes } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Styles>
      <Router>
        {/* {publicRoutes.map((route, index) => {
          return (
            <div key={index}>
              <Link to={route.path}>{route.name}</Link>
            </div>
          );
        })} */}
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </Router>
    </Styles>
  </React.StrictMode>
);

import { Fragment } from "react";
import { Route } from "react-router-dom";

// MIDDLEWARES

// LAYOUTS

// PAGES
import { LoginPage, RegisterPage } from "../pages/main.pages";

const MainRoutes = () => {
  return (
    <Fragment>
      <Route>
        <Route index element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Fragment>
  );
};

export { MainRoutes as default };

import { Fragment } from "react";
import { Route } from "react-router-dom";

// MIDDLEWARES

// LAYOUTS

// PAGES
import { HomePage, LoginPage, RegisterPage } from "../pages/main.pages";

const MainRoutes = () => {
  return (
    <Fragment>
      <Route>
        <Route index element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Fragment>
  );
};

export { MainRoutes as default };

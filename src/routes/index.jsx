import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const PageBuilder = lazy(() => import("@/features/pagebuilder"));

const Router = () => {
  return createBrowserRouter([{ path: "/", element: <PageBuilder /> }]);
};

export default Router;

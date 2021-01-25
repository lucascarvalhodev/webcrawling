import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "./components/Loading";

const Main = lazy(() => import("./pages/Main"));
const Details = lazy(() => import("./pages/Details"));

const Routes: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="page-crawl flex-column-center-crawl">
          <Loading />
        </div>
      }
    >
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/crawl/:id/:keyword" component={Details} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default Routes;

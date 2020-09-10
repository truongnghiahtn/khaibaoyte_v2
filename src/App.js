import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import PageNotFound from "./page/pageNotFound";
import { routesHome } from "./routes";
import MyHome from "../src/page/home/MyHome";

const showMenusHome = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => (
      <HomeTemplate
        path={item.path}
        exact={item.exact}
        Component={item.component}
        key={index}
      />
    ));
  }
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showMenusHome(routesHome)}
          <Route path="/" exact={true} component={MyHome} />
          <Route path="" exact={false} component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

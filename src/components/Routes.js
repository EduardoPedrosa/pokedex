import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Content from "./Content";
import Favorites from "./Favorites";

function Routes() {

  return (
    <Switch>
      <Route path="/" component={Content} exact/>
      <Route path="/favoritos" component={Favorites} />
    </Switch>
  );
}

export default Routes;

import React from "react";
import { Router as BrowserRouter, Route } from "react-router-dom";

import { browserHistory } from "browser-history";
import Items from "./components/items";
import Item from "./components/item";

const Router = () => (
  <BrowserRouter history={browserHistory}>
    <div>
      <Route exact path="/" component={Items}/>
      <Route path="/item/:itemId" component={Item}/>
    </div>
  </BrowserRouter>

);


export default Router;

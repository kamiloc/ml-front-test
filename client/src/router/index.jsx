import React from "react";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";

import Home from "screens/home";
import Search from "screens/search";
import Product from "screens/product";

export default function AppRouter() {
  const ProductParamsHandler = () => {
    const { id } = useParams();
    return <Product productId={id} />;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/items/:id" component={ProductParamsHandler}></Route>
        <Route path="/items" component={Search}></Route>
      </Switch>
    </BrowserRouter>
  );
}

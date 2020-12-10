import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./Components/Navigation";
import MessageList from "./Components/MessageList";
import MessageForm from "./Components/MessageForm";

import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
          <Switch>
            <Route exact path="/" component={MessageList}></Route>
            <Route path="/new-message" component={MessageForm}></Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

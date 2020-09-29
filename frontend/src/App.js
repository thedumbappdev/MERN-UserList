import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
// import { DollarSign, Percent, Edit } from "react-feather";
// import { ToastProvider, useToasts } from "react-toast-notifications";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-gradient-to-t from-purple-400 to-purple-800">
        <>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
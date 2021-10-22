
import "semantic-ui-css/semantic.min.css";
import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Register} />
      </Switch>
    </BrowserRouter>
    </div>

  );
}

export default App;

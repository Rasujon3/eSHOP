import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout/Checkout";

import Header from "./Header/Header";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

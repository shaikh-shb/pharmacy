import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Patient from "./Patient";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/patient">
                <Patient />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

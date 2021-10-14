import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import FoodDetails from "./components/FoodDetails/FoodDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/details/:foodId">
            <FoodDetails></FoodDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

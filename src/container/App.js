// IMPORTS --------------
// imports : Node Modules
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// imports : Components
import NavBar from "./components/navbar.js";
import Home from "../routes/home/home.js";
import Footer from "./components/footer.js";
// imports : Assets
import STRINGS from "../assets/strings/strings.json";
import IMAGES from "../assets/images/images.json";

const INITIAL_STATE = {
  config: {
    active: "001_HOME",
    language: "English",
    modal_isOpen: false
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="App">
            <NavBar />

            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>

            <Footer />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

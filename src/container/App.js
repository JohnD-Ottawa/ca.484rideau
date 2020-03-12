// IMPORTS --------------
// imports : Node Modules
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// imports : Components
import NavBar from "./components/navbar.js";
import Home from "../routes/home/home.js";
import Footer from "./components/footer.js";
import Modal from "./components/modal.js";
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

  toggle_modal() {
    this.setState({
      config: {
        active: this.state.config.active,
        language: this.state.config.language,
        modal_isOpen: !this.state.config.modal_isOpen
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="App">
            <NavBar />
            <SocialIconsLG />
            <Switch>
              <Route path="/blog">{/* <Home /> */}</Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/">
                <Redirect to="/home" />
              </Route>
            </Switch>
            <Footer />
            <Modal />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

function SocialIconsLG() {
  return (
    <div className="d-none d-lg-block">
      <div className="test hidden-md-down d-flex align-items-center">
        <div className="test2">
          <div class="d-flex facebook test3 justify-content-center align-items-center mb-1 text-white rounded-right">
            <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
          </div>
          <div class="d-flex twitter test3 justify-content-center align-items-center mb-1 text-white rounded-right">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
          </div>
          <div class="d-flex youtube test3 justify-content-center align-items-center mb-1 text-white rounded-right">
            <FontAwesomeIcon icon={["fab", "youtube"]} size="lg" />
          </div>
          <div class="d-flex whatsapp test3 justify-content-center align-items-center mb-1 text-white rounded-right">
            <FontAwesomeIcon icon={["fab", "whatsapp"]} size="lg" />
          </div>
          <div class="d-flex instagram test3 justify-content-center align-items-center text-white rounded-right">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

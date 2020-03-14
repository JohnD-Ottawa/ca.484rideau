// IMPORTS --------------
// imports : Node Modules
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// imports : Components
import NavBar from "./components/navbar/navbar.js";
import Home from "../routes/home/home.js";
import Footer from "./components/footer/footer.js";
import Modal from "./components/modal/modal.js";

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
  const SOCIALMEDIA = [
    { icon: "facebook-f", className: "bg-facebook" },
    { icon: "twitter", className: "bg-twitter" },
    { icon: "youtube", className: "bg-youtube" },
    { icon: "whatsapp", className: "bg-whatsapp" },
    { icon: "instagram", className: "bg-instagram" }
  ];
  return (
    <div className="d-none d-lg-block">
      <div className="test hidden-md-down d-flex align-items-center">
        <div className="test2">
          {SOCIALMEDIA.map((element, index) => (
            <div
              key={index}
              className={`d-flex ${
                element.className
              } test3 justify-content-center align-items-center ${
                index !== 0 ? "mt-1" : ""
              } text-white rounded-right`}
            >
              <FontAwesomeIcon icon={["fab", `${element.icon}`]} size="lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

// IMPORTS --------------
// imports : Node Modules
import React from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// imports : Components
import NavBar from '../components/navbar/navbar.js';
import Carousel from '../components/carousel/carousel.js';
import InfoCards from '../components/info_cards/info_cards.js';
import Footer from '../components/footer/footer.js';
// imports : Assets
import STRINGS from '../assets/strings/strings.json';
import IMAGES from '../assets/images/images.json';

const INITIAL_STATE = { 
  config : {
    active        : "001_HOME",
    language      : "English",
    modal_isOpen  : false 
  } 
}

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  componentDidMount() {}
  
  render() {
    return (
      <React.Fragment>

        <div className="App">
          
          <NavBar />
          
          { this.state.config.active === "001_HOME" &&

            <div className="App_Home" >
              <Carousel />
              <InfoCards />
            </div>
            
          }

          <Footer />
        
        </div>

      </React.Fragment>
    );
  }
}

export default App;

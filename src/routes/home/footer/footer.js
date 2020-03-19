// IMPORTS --------------
// imports : Node Modules
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function footer(props) {
  return (
    <React.Fragment>
      <div className="section row d-flex align-items-stretch">
        <div className="col-12 col-lg-6 mb-3 mb-lg-0 d-flex flex-column align-items-start">
          <h3 className="row m-0 text-display header-text text-white">
            Where can you find us?
          </h3>
          <div className="d-flex align-items-center flex-fill w-100 text-white">
            <table className="table table-sm text-light table-borderless m-0 mt-2 mt-lg-0 w-auto">
              <tbody>
                <tr>
                  <td className="text-center">
                    <FontAwesomeIcon icon={["fas", "phone-alt"]} size="sm" />
                  </td>
                  <td className="app-text-muted">1 (613) 794-2515</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <FontAwesomeIcon icon={["fas", "envelope"]} size="sm" />
                  </td>
                  <td className="app-text-muted">Support@484Rideau.ca</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <FontAwesomeIcon
                      icon={["fas", "map-marker-alt"]}
                      size="sm"
                    />
                  </td>
                  <td className="app-text-muted">
                    484 Rideau St
                    <br /> Ottawa, ON K1N 8C1
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <FontAwesomeIcon icon={["far", "clock"]} size="sm" />
                  </td>
                  <td className="app-text-muted">Mon - Fri : 8am - 10pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-12 col-lg-6 p-0">
          <iframe
            src="https://snazzymaps.com/embed/226862"
            width="100%"
            height="300px"
            style={{ border: "1px white solid" }}
          ></iframe>
        </div>
      </div>
      <div className="navbar justify-content-center text-white">
        {'"Teamwork makes the dream work..." \u00A9 484 Rideau 2020'}
      </div>
    </React.Fragment>
  );
}

export default footer;

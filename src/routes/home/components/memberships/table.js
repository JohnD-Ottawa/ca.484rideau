import React from "react";
import "./memberships.css";

class Info {
  constructor(WIFM, Membership, Standalone) {
    this.WIFM = WIFM;
    this.Membership = Membership;
    this.Standalone = Standalone;
  }
  getKeys() {
    return ["WIFM", "Membership", "Standalone"];
  }
}

const TABLE_INFO = [
  new Info("Legal Business Address", true, "$600 - $4000/mo"),
  new Info("Unlimited High-Speed Wifi", true, "$100/mo"),
  new Info("Meditative Space", true, "$65/mo"),
  new Info("Video Production Equipment", true, "$6,000 - $15,000"),
  new Info("Video Ready Workspaces", true, "$200/hr"),
  new Info("Podcast Equipment", true, "$3,000 - $10,000/mo"),
  new Info("Networking Oppertunities", true, "Priceless"),
  new Info("Advertising & Exposure", true, "$75 - $500/mo"),
  new Info("Training Space (Yoga, dance, etc.)", true, "$50/mo"),
  new Info("Workshops", true, "$50+"),
  new Info("Free Coffee", true, "$60/mo"),
  new Info("Time Bank Skill Sharing Network", true, "$25/hr"),
  new Info("Amazing Secret Future", true, "Priceless"),
  new Info("Total", false, "$10,000+")
];

function Table() {
  return (
    <table className="table table-sm text-light table-striped table-borderless table-dark table-hover m-0">
      <Header />
      <Body />
    </table>
  );
}

function Header() {
  return (
    <thead>
      <tr className="header-table">
        {TABLE_INFO[0].getKeys().map((element, index) => (
          <th key={index} scope="col">
            <small>{element}</small>
          </th>
        ))}
      </tr>
    </thead>
  );
}

function Body() {
  return (
    <tbody>
      {TABLE_INFO.map((element, index) => (
        <tr
          key={index}
          className={index !== TABLE_INFO.length - 1 ? "" : "header-table"}
        >
          {index !== TABLE_INFO.length - 1 ? (
            <React.Fragment>
              <td scope="row">
                <small>{element.WIFM}</small>
              </td>
              <td>
                <small>{element.Membership ? "Included" : "$200/mo"}</small>
              </td>
              <td>
                <small>{element.Standalone}</small>
              </td>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <th scope="row">
                <small>{element.WIFM}</small>
              </th>
              <th>
                <small>{element.Membership ? "Included" : "$200/mo"}</small>
              </th>
              <th>
                <small>{element.Standalone}</small>
              </th>
            </React.Fragment>
          )}
        </tr>
      ))}
    </tbody>
  );
}
export default Table;

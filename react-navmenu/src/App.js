import React, { Component } from "react";
import "./App.css";
import NavMenu from "./composants/NavMenu";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listNavMenu: [
        {
          title: "Home",
          link: "http://localhost:3000/",
          isActive: false
        },
        {
          title: "Services",
          link: "http://localhost:3000/services",
          isActive: true
        },
        {
          title: "Contact",
          link: "http://localhost:3000/contact",
          isActive: false
        }
      ],
      listNestMenu: [
        {
          title: "For entrepreneurs",
          link: "http://localhost:3000/services/entrepreneurs",
          isActive: false
        },
        {
          title: "For students",
          link: "http://localhost:3000/services/students",
          isActive: false
        },
        {
          title: "For hobbyists",
          link: "http://localhost:3000/services/hobbyists",
          isActive: false
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <NavMenu listMenu={this.state.listNavMenu}>
          {this.state.listNestMenu}
        </NavMenu>
      </div>
    );
  }
}

export default App;

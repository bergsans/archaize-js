import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

import ArchaizeJS from "./components/ArchaizeJS";
import About from "./components/About";
import Text from "./components/Text";
import Header from "./components/Header";
import MenuDesktop from "./components/MenuDesktop";
import MenuResponsive from "./components/MenuResponsive";

import "./App.css";

class App extends Component {

  state = { menuOpen: false };

  openMenu = () => this.setState({ menuOpen: true });
  closeMenu = () => this.setState({ menuOpen: false });

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <MenuDesktop />
          <nav className="container-mobile__nav">
            <div
              onClick={this.openMenu}
              className="container-mobile__nav__container"
            >
              <img
                alt=""
                src="menu.png"
                className="container-mobile__nav-img"
              />
            </div>
            {this.state.menuOpen ? (
              <MenuResponsive closeMenu={this.closeMenu} />
            ) : null}
          </nav>
          <main className="container__main">
            <Switch>
              <Route exact path="/" component={ArchaizeJS} />
              <Route exact path="/text" component={Text} />
              <Route exact path="/about" component={About} />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

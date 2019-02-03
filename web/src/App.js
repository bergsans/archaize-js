import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import ArchaizeJS from "./components/ArchaizeJS";
import About from "./components/About";
import Text from "./components/Text";
import { logo } from "./logo";

import "./App.css";

class App extends Component {
  state = { menuOpen: false };

  openMenu = () => this.setState({ menuOpen: true });
  closeMenu = () => this.setState({ menuOpen: false });

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <header className="container__header">
            <h3 className="container__header__logo">
              <pre>{logo}</pre>
            </h3>
          </header>

          <nav className="container-desktop__nav">
            <ul className="container-desktop__nav__menu">
              <li className="container-desktop__nav__menu__item">
                <Link to="/" className="container-desktop__nav-menu__link">
                  <img
                    src="transpile1.png"
                    className="container-desktop__nav__menu__link__img"
                  />
                  Archaize
                </Link>
              </li>
              <li className="container-desktop__nav__menu__item">
                <Link to="/text" className="container-desktop__nav-menu__link">
                  <img
                    src="explain1.png"
                    className="container-desktop__nav__menu__link__img"
                  />
                  Explain
                </Link>
              </li>
              <li className="container-desktop__nav__menu__item">
                <Link to="/about" className="container-desktop__nav-menu__link">
                  <img
                    src="about1.png"
                    className="container-desktop__nav__menu__link__img"
                  />
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="container-mobile__nav">
            <div onClick={this.openMenu}>
              MENU{" "}
              <img alt="" src="menu.png" className="App__responsive__nav-img" />
            </div>
          </nav>

          <main className="container__main">
            <Switch>
              <Route exact path="/" component={ArchaizeJS} />
              <Route path="/text" component={Text} />
              <Route path="/about" component={About} />
              <Redirect to="/" />
            </Switch>
          </main>

          {this.state.menuOpen ? (
            <div className="App__responsive__nav-modal">
              <div className="App__responsive__nav-modal-content">
                <span
                  className="App__responsive__nav-close"
                  onClick={this.closeMenu}
                >
                  &times;
                </span>
                <p>
                  <a href="#">HOME</a>
                </p>
                <p>
                  <a href="#">ARCHIVE</a>
                </p>
                <p>
                  <a href="#">ABOUT</a>
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

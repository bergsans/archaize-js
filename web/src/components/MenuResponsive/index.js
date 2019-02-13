import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

class MenuResponsive extends Component {
  
  constructor(props) {
    super(props);
  }

  onClick = () => { 
    this.props.closeMenu();
  }

  render() {

     return(<div className="container-mobile__menu-modal">
              <div className="container-mobile__menu-modal-content">
                <span
                  className="container-mobile__menu-modal-close"
                  onClick={ this.onClick }
                >
                  &times;
                </span>
                <p>
                  <Link to="/" className="container-mobile__menu-modal-content__link">ARCHAIZE JS</Link>
                </p>
                <p>
                  <Link to="/text" className="container-mobile__menu-modal-content__link">EXPLAIN</Link>
                </p>
                <p>
                  <Link to="/about" className="container-mobile__menu-modal-content__link">ABOUT</Link>
                </p>
              </div>
            </div>)
  }
}
export default MenuResponsive;


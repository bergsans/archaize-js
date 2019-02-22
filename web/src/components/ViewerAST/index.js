import React, { Component } from "react";
import JSONTree from "react-json-tree";

import { theme } from "./BASE16_monokai_code_color_scheme";

class ViewerAST extends Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    this.props.changeASTClose();
  };

  render() {
    console.log(this.props.ast);
    const { ast } = this.props;

    return (
      <div className="code__container__modal__ast-viewer">
        <div className="code__container__modal__ast-viewer__content-ast">
          <span
            className="code__container__modal__ast-viewer__content-ast-close"
            onClick={this.onClick}
          >
            &times;
          </span>
          <JSONTree data={ast} theme={theme} invertTheme={false} />
        </div>
      </div>
    );
  }
}
export default ViewerAST;

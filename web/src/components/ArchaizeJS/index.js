import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import { Scrollbars } from 'react-custom-scrollbars';

import { snippets } from './snippets';
import { box } from './box_desktop';
import { box_responsive } from './box_mobile';

import ViewerAST from '../ViewerAST';

import 'prismjs/themes/prism-twilight.css';
import './index.css';

class ArchaizeJS extends Component {
  state = {
    response: false,
    endpoint: 'http://localhost:3000',
    code: snippets[0],
    code_transpiled: '',
    code_transpiled_ast: {},
    astViewer: false
  };

  randomizeSnippet = () => {
    const randomizeNum = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    };
    const randomNum = randomizeNum(0, snippets.length);
    this.setState({ code: snippets[randomNum] });
  };

  changeASTOpen = () => this.setState({ astViewer: true });
  changeASTClose = () => this.setState({ astViewer: false });

  setNewCode(code_transpiled, code_transpiled_ast) {
    this.setState({ code_transpiled, code_transpiled_ast });
  }

  componentDidMount() {
    const socket = socketIOClient('http://localhost:3000');

    setInterval(() => {
      const { code } = this.state;
      socket.emit('TRANSPILE_CODE', { transpile: code });
    }, 700);

    socket.on('TRANSPILED_CODE', data => {
      const code_transpiled = data.transpiled;
      const code_transpiled_ast = data.ast;
      this.setNewCode(code_transpiled, code_transpiled_ast);
    });
  }

  render() {
    const { code } = this.state;
    const { code_transpiled } = this.state;
    const { code_transpiled_ast } = this.state;

    return (
      <div className='code__container'>
        <h2 className='code__container__header'>
          Stay Young, appear old, be wise
        </h2>
        <pre className='code__container__box-desktop'>{box}</pre>
        <pre className='code__container__box-mobile'>{box_responsive}</pre>

        <div className='code__container__editor'>
    <Scrollbars autohide='true'>
          <Editor
            value={code}
            onValueChange={code => this.setState({ code })}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14
            }}
            className='code-theme'
          />
</Scrollbars>
        </div>
        <div className='code__container__transpiled-code'>
          <Scrollbars autohide='true'>
          <Editor
            value={code_transpiled}
            onValueChange={() => {}}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14
            }}
            className='code-theme'
          />
</Scrollbars>
        </div>
        <div className='code__container__menu'>
          <a
            href='#'
            onClick={this.randomizeSnippet}
            className='code__container__menu__button-link'
          >
            <img
              src='change.png'
              alt=''
              className='code__container__menu__button-img'
            />{' '}
            ANOTHER SNIPPET
          </a>
          <a
            href='#'
            onClick={this.changeASTOpen}
            className='code__container__menu__button-link'
          >
            <img
              src='view.png'
              alt=''
              className='code__container__menu__button-img'
            />{' '}
            VIEW AST
          </a>
        </div>
        { this.state.astViewer ? <ViewerAST ast={this.state.code_transpiled_ast} changeASTClose={this.changeASTClose} /> : null }
      </div>
    );
  }
}
export default ArchaizeJS;

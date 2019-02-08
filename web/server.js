const express = require('express');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();

const { makeAST, transpile } = require('../index.js');

const compiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
      colors: true
    },
    historyApiFallback: true
  })
);

app.use(express.static(__dirname + '/www'));

app.all('*', (req, res) => {
  res.redirect('/');
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`App listening to ${port}`);
});

const io = require('socket.io')(server);
io.on('connection', (socket) => {

  socket.join(socket.id);

  socket.on('TRANSPILE_CODE', (data) => {

    const tryToTranspileThis = data.transpile.replace('\n', '');

    try {
      const newCode = transpile(tryToTranspileThis);
      const codeAST = makeAST(newCode);
      io.sockets.in(socket.id).emit('TRANSPILED_CODE', { transpiled: newCode, ast: codeAST });
    } catch(e) {
      io.sockets.in(socket.id).emit('TRANSPILED_CODE', { transpiled: "INVALID CODE", ast: { msg: 'ERROR' }});
    }
  });

});

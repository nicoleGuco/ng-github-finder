import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './index.scss';
import App from './App.jsx';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PostsContextProvider from './useContext/changeContext';
import ModalContextProvider from './useContext/modalContext';


ReactDOM.render(
  <ModalContextProvider>
  <PostsContextProvider>
    <App />
  </PostsContextProvider>,
  </ModalContextProvider>,
  document.getElementById('root')
);

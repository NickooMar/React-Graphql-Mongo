import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToastContainer } from "react-toastify";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: 'http://localhost:3100'
})


ReactDOM.render(
  <React.StrictMode>
    <ToastContainer/>
    <ApolloProvider client={client}> {/*Asi genero la conexion con la API*/}
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
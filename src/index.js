import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {LoginContextProvider} from './components/store/LoginContext';
//import { LoginContextProvider } from './components/store/auth-context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </LoginContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

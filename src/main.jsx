import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/home/Home";
import Login from "./Login";
import Principal from "./components/principal/Principal";
import Registro from "./components/Registro/Registro";
import Modificar from "./components/modificar/modificar";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
     <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Principal" component={Principal} />
      <Route path="/Registro" component={Registro} />
      <Route path="/modificar" component={Modificar} />
    </Switch>
    </Router>
)


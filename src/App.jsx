import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Principal from "./components/principal/Principal";
import Registro from "./components/Registro/Registro";
import Modificar from "./components/modificar/modificar";

function App() {

  

  return (
    <>
     <Router>
     <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Principal" component={Principal} />
      <Route path="/Registro" component={Registro} />
      <Route path="/modificar" component={Modificar} />
    </Switch>
    </Router>
    </>
  )
}

export default App

import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import MyAlert from './components/Alert'


function App() {
  const [Mode, setMode] = useState('light') // Dark Mode is On Or off

  const [Alert, setAlert] = useState(null)
  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const ToggleMode = () => {
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042745'
      ShowAlert("Dark Mode Has Been Anabled", 'success')
      document.title = 'TextUtile - Dark Mode';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      ShowAlert("Light Mode Has Been Anabled", 'success')
      document.title = 'TextUtile - Light Mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={Mode} ToggleMode={ToggleMode} />
        <MyAlert alert={Alert} />

        <Switch>
          <Route exact path="/about">
            <About mode={Mode} />
          </Route>
          <Route exact path="/">
            <TextForm Heading="Type Your Text Here." mode={Mode} ShowAlert={ShowAlert} />
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;

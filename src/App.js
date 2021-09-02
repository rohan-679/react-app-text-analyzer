import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alert from './components/Alert'
import About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



export const App = () => {
  const [mode,setMode]=useState('light');

  const [alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleGreen=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#245501';
      showAlert('Green mode enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled','success')
    }
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#1c1c1c';
      showAlert('Dark mode enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled','success')
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} toggleGreen={toggleGreen}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
    <Textform showAlert={showAlert} mode={mode}/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  )
}

export default App;


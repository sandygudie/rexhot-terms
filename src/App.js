import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import Navbar from "./component/Navbar"
import About from "./component/About"
import Footer from "./component/Footer"
import Terms from "./component/Terms"
import GetStarted from "./component/Getstarted"
import Faq from "./component/Faq"
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom"

import './App.css';

function App() {
  return (

    <React.Fragment>

        <Navbar />
     <Switch>
    
   
    <Route path ="/" exact component ={About} />
    <Route path ="/footer" exact component ={Footer} />
    <Route path ="/faq" exact component ={Faq} />
    <Route path ="/getstarted" exact component ={GetStarted} />
    <Route path ="/terms" exact component ={Terms} />
    {/* <Route  component ={Default}/>   */}

    </Switch> 
    <Footer />
    </React.Fragment>
  );
}

export default App;

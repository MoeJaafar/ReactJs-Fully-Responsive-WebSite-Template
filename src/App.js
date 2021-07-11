//By Moe Jaafar 11/7/2021
//My first js react web project ♥
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import react from 'react';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';


function App() {
  return (
    <>
    <Router>
     <Navbar  />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/services' component ={Services} />
       <Route path='/products' component ={Products} />
       <Route path='/sign-up' component ={SignUp} />
     </Switch>
     </Router>
    </>
  );
}

export default App;

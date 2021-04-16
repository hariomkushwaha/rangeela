import './App.css';
import React from 'react';
import MainPage from './pages/mainpage/mainpage';
import {Switch ,Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import PrimarySearchAppBar from './components/header/header.component'
import SigninSignup from './pages/signin-signup/signin-signup.component'
import CheckoutPage from './pages/checkout/checkout.component.jsx';

function App() {
  return (
    <div> 
    <PrimarySearchAppBar />
    <Switch>
    <Route exact path='/' component={MainPage}/>
    <Route path='/shop' component={ShopPage}/>
    <Route path='/signin' component={SigninSignup}/>
    <Route exact path='/checkout' component={CheckoutPage}/> 
    </Switch>
     
    </div>
  );
}

export default App;

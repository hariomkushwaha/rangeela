import './App.css';
import React from 'react';
import MainPage from './pages/mainpage/mainpage';
import {Switch ,Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div> 
    <Switch>
    <Route exact path='/' component={MainPage}/>
    <Route path='/shop' component={ShopPage}/>
    </Switch>
     
    </div>
  );
}

export default App;

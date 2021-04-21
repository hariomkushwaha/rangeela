import './App.css';
import React from 'react';
import MainPage from './pages/mainpage/mainpage';
import {Switch ,Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SigninSignup from './pages/signin-signup/signin-signup.component'
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import {auth} from './firebase/firebase.utils';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
      <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SigninSignup}/>
      <Route exact path='/checkout' component={CheckoutPage}/> 
      </Switch>
       
      </div>
    )
  }
};

export default App;

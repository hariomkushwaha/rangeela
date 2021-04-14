import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      Rangeela Naal
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      
     
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>

      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({cart: { hidden } }) => ({
  hidden
});

export default connect(mapStateToProps)(Header);
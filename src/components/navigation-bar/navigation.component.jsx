import { Fragment } from 'react';
import { Outlet,Link } from 'react-router-dom';

import './navigation.styles.scss';

import LogoIcon from '../../images/lily.png';
import {ReactComponent as ShoppingCart} from '../../images/shopping-cart.svg'

const Navigation =() =>{
    return(
      <Fragment>
        <div className='navigation'>
            <Link className='logo-icon' to='/'><img src={LogoIcon} alt='logo'/>The Lily Store</Link>
            <div className='nav-links'>
                <Link className='nav-link-contact' to='contact-us'>Contact</Link>
                <Link className='nav-link-signIn' to='sign-in'>Sign In</Link>
                <Link className='nav-link-shoppingbag' to='shopping-bag'><ShoppingCart/></Link>
            </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

export default Navigation;  
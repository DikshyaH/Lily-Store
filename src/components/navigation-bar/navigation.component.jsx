import { Fragment, useContext } from 'react';
import { Outlet,Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase.utils';

import './navigation.styles.scss';

import LogoIcon from '../../images/lily.png';
import {ReactComponent as ShoppingCart} from '../../images/shopping-cart.svg'

const Navigation =() =>{
    const {currentUserContext} = useContext(UserContext);
    // console.log(currentUserContext);

    const handleSignOut = async () =>
    {
      await signOutUser();
      // setCurrentUserContext(null);    
    }

    return(
      <Fragment>
        <div className='navigation'>
            <Link className='logo-icon' to='/'><img src={LogoIcon} alt='logo'/></Link>
            <Link className='store-name' to='/'>The Lily Store</Link>
            <div className='nav-links'>
                <Link className='nav-link-contact' to='contact-us'>Contact</Link>
                {currentUserContext ? (<span className='nav-link-signIn' onClick={handleSignOut}> Sign Out </span>) : (<Link className='nav-link-signIn' to='sign-in'>Sign In</Link>) }
                <Link className='nav-link-shoppingbag' to='shopping-bag'><ShoppingCart/></Link>
            </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

export default Navigation;  
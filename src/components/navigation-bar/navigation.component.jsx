import { Fragment } from 'react';
import { Outlet,Link } from 'react-router-dom';

import './navigation.style.scss';

const Navigation =() =>{
    return(
      <Fragment>
        <div className='navigation'>
            <Link className='logo' to='/'>Logo</Link>
            <div className='nav-links'>
                <Link className='nav-link-shop' to='shop'>SHOP</Link>
            </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

export default Navigation;  
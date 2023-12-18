import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.scss';
import logo from '../../assets/logo.png';

const Header = (props) => {
  return (
    <div className={classes.header}>
      <header className={classes.header}>
        <h1>Angel Site</h1>
        <HeaderCartButton />
      </header>
    </div>
  );
};

export default Header;
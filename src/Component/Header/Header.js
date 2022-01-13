import React from "react";
import classes from "./Header.module.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className={classes.header}>
      <img
        className={classes.header__logo}
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon logo"
      />
      <div className={classes.header__search}>
        <input type="text" className={classes.header__searchInput} />
        <SearchIcon className={classes.header__searchIcon} />
      </div>
      <div className={classes.header__nav}>
        <div className={classes.header__option}>
          <span className={classes.header__optionlineone}>Hello guest</span>
          <span className={classes.header__optionlinetwo}>Sign in</span>
        </div>
        <div className={classes.header__option}>
          <span className={classes.header__optionlineone}>Returns</span>
          <span className={classes.header__optionlinetwo}> & orders</span>
        </div>
        <div className={classes.header__option}>
          <span className={classes.header__optionlineone}>Your </span>
          <span className={classes.header__optionlinetwo}>Prime</span>
        </div> 
        <div className={classes.header__optionBasket}>
            <ShoppingBasketIcon />
            <span className={[classes.header__optionlineone,classes.header__optionBasketCount].join(' ')}>0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

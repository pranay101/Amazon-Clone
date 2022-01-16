import React from "react";
import classes from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../ReactContextAPI/StateProvider/StateProvider";
import { auth } from "../../ConfidentialImports/Firebase";
import {signOut} from "firebase/auth"

function Header() {
  // const [{ basket},{user}, dispatch ] = useStateValue();
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () =>{
      if (user) {
        signOut(auth);
      }
  }
  return (
    <div className={classes.header}>
      <Link to="/">
        <img
          className={classes.header__logo}
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>
      <div className={classes.header__search}>
        <input type="text" className={classes.header__searchInput} />
        <SearchIcon className={classes.header__searchIcon} />
      </div>
      <div className={classes.header__nav}>
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className={classes.header__option}>
            <span className={classes.header__optionlineone}>Hello {user? user.email:"Guest"}</span>
            <span className={classes.header__optionlinetwo}>{user? "Sign out" : "Sign in"}</span>
          </div>
        </Link>
        <div className={classes.header__option}>
          <span className={classes.header__optionlineone}>Returns</span>
          <span className={classes.header__optionlinetwo}> & orders</span>
        </div>
        <div className={classes.header__option}>
          <span className={classes.header__optionlineone}>Your </span>
          <span className={classes.header__optionlinetwo}>Prime</span>
        </div>
        <Link to={"/checkout"}>
          <div className={classes.header__optionBasket}>
            <ShoppingBasketIcon />
            <span
              className={[
                classes.header__optionlineone,
                classes.header__optionBasketCount,
              ].join(" ")}
            >
              <strong>{basket.length}</strong>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import classes from "./Home.module.css";
import Product from "./Product/Product";

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.home__Container}>
        <img
          className={classes.home__Image}
          src="https://m.media-amazon.com/images/I/71d2wEPbXxL._SX3000_.jpg"
          alt="Amazon Banner"
        />

        <div className={classes.home__row}>
          <Product
            id={(Math.floor(Math.random() * 10000) + 10000)
              .toString()
              .substring(1)}
            title=" The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={640}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <Product
            id={(Math.floor(Math.random() * 10000) + 10000)
              .toString()
              .substring(1)}
            title="Pidilite D-Klog Drain Cleaner Powder (40g x 5N), Removes Clogs, Blockages in Washbasin, Sinks, Pipes within 30 Minutes, No Manual Hassle with Drain spring pipe, Plunger, Drain Stick, Cleaning Hook"
            price={100}
            rating={4}
            image="https://m.media-amazon.com/images/I/61zwfuoURpL._SL1000_.jpg"
          />
        </div>
        <div className={classes.home__row}>
          <Product
            id={(Math.floor(Math.random() * 10000) + 10000)
              .toString()
              .substring(1)}
            title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, One Size (S & L Bands Included) (Black)"
            price={7999}
            rating={5}
            image="https://m.media-amazon.com/images/I/71smqRr0pmL._AC_UY218_.jpg"
          />
          <Product
            id={(Math.floor(Math.random() * 10000) + 10000)
              .toString()
              .substring(1)}
            title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
            price={3499}
            rating={4}
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
          />
          <Product
            id={(Math.floor(Math.random() * 10000) + 10000)
              .toString()
              .substring(1)}
            title="2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 256GB) - Space Grey (5th Generation)"
            price={104599}
            rating={5}
            image="https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_UY218_.jpg"
          />
        </div>
        <div className={classes.home__row}>
          <Product
            id={(Math.floor(Math.random() * 10000) + 10000)
              .toString()
              .substring(1)}
            title="Samsung LC34J791WTWXXL 34' Wide ScreenThunderbolt 3 Curved Monitor 3440 x 1440"
            price={80000}
            rating={4}
            image="https://m.media-amazon.com/images/I/91-hWcNu2yL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

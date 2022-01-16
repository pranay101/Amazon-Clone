import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={classes.Footer}>
      <div className={classes.Footer_backtotop} onClick={scrollToTop}>
        <p>Back to top</p>
      </div>

      <div className={classes.Footer__links}>
        <div className={classes.Footer__section}>
          <h3>Get to Know Us</h3>
          <p>
            <a>About Us</a>
          </p>
          <p>
            <a>Careers</a>
          </p>
          <p>
            <a>Press Releases</a>
          </p>
          <p>
            <a>Amazon Cares</a>
          </p>
          <p>
            <a>Gift a Smile</a>
          </p>
        </div>
        <div className={classes.Footer__section}>
          <h3>Connect with Us</h3>
          <p>
            <a>Facebook</a>
          </p>
          <p>
            <a>Instagram</a>
          </p>
          <p>
            <a>Twitter</a>
          </p>
        </div>
        <div className={classes.Footer__section}>
          <h3>Make Money with Us</h3>
          <p>
            <a>Sell on Amazon</a>
          </p>
          <p>
            <a>Sell under Amazon Accelerator</a>
          </p>
          <p>
            <a>Amazon Global Selling</a>
          </p>
          <p>
            <a>Become an Affiliate</a>
          </p>
          <p>
            <a>Fulfilment by Amazon</a>
          </p>
          <p>
            <a>Advertise Your Products</a>
          </p>
          <p>
            <a>Amazon Pay on Merchants</a>
          </p>
        </div>
        <div className={classes.Footer__section}>
          <h3>Let Us Help You</h3>
          <p>
            <a>COVID-19 and Amazon</a>
          </p>
          <p>
            <a>Your Account</a>
          </p>
          <p>
            <a>Returns Centre</a>
          </p>
          <p>
            <a>100% Purchase Protection</a>
          </p>
          <p>
            <a>Amazon App Download</a>
          </p>
          <p>
            <a>Amazon Assistant Download</a>
          </p>
          <p>
            <a>Help</a>
          </p>
        </div>
      </div>
      <div className={classes.Footer__countries}>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
        <div className={classes.Footer__countrylist}>
          <ul>
            <li>
              <a href="http://www.amazon.com.au/ref=footer_au">
                Australia
              </a>
            </li>
            <li>
              <a href="https://www.amazon.com.br/ref=footer_br">
                Brazil
              </a>
            </li>
            <li>
              <a href="https://www.amazon.ca/ref=footer_ca">
                Canada
              </a>
            </li>
            <li>
              <a href="https://www.amazon.cn/ref=footer_cn">
                China
              </a>
            </li>
            <li>
              <a href="https://www.amazon.fr/ref=footer_fr">
                France
              </a>
            </li>
            <li>
              <a href="https://www.amazon.de/ref=footer_de">
                Germany
              </a>
            </li>
            <li>
              <a href="https://www.amazon.it/ref=footer_it">
                Italy
              </a>
            </li>
            <li>
              <a href="https://www.amazon.co.jp/ref=footer_jp">
                Japan
              </a>
            </li>
            <li>
              <a href="https://www.amazon.com.mx/ref=footer_mx">
                Mexico
              </a>
            </li>
            <li>
              <a href="https://www.amazon.nl/ref=footer_nl">
                Netherlands
              </a>
            </li>
            <li>
              <a href="https://www.amazon.pl/ref=footer_pl">
                Poland
              </a>
            </li>
            <li>
              <a href="https://www.amazon.sg/ref=footer_sg">
                Singapore
              </a>
            </li>
            <li>
              <a href="https://www.amazon.es/ref=footer_es">
                Spain
              </a>
            </li>
            <li>
              <a href="https://www.amazon.com.tr/ref=footer_tr">
                Turkey
              </a>
            </li>
            <li>
              <a href="https://www.amazon.ae/ref=footer_ae">
                United Arab Emirates
              </a>
            </li>
            <li>
              <a href="https://www.amazon.co.uk/ref=footer_uk">
                United Kingdom
              </a>
            </li>
            <li class="nav_last">
              <a href="https://www.amazon.com/ref=footer_us">
                United States
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// Australia BrazilCanadaChinaFranceGermanyItalyJapanMexicoNetherlandsPolandSingaporeSpainTurkeyUnited Arab EmiratesUnited KingdomUnited States

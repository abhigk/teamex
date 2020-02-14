import React from "react";
import "../../../assets/css/footer-style.css";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import fbIcon from "../../../assets/icons/facebook.png";
import instaIcon from "../../../assets/icons/instagram.png";
import { withRouter } from "react-router-dom";

class TxFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  fbProfile() {
    window.open("https://www.facebook.com/Teamex.Retail.Ltd/");
  }

  instaProfile() {
    window.open("https://www.instagram.com/teamex_ltd/");
  }
  scrollTest = loc => {
    console.log("current location", this.props.location.pathname);

    if (this.props.location.pathname !== "/") {
      this.props.history.push("/", { test: loc });
    } else {
      this.props.history.push("/");
    }

    this.props.sendLocation(loc);
  };

  render() {
    const navbarItemDesign = {
      paddingRight: "55px",
      fontSize: "12px",
      marginTop: "1em"
    };
    const linkStyle = {
      color: "#fff",
      cursor: "pointer"
    };
    return (
      <React.Fragment>
        <div className="footer">
          <div className="container">
            <div className="row ">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
                <div className="footer-widget ">
                  {/*<div className="footer-title">Company</div>*/}
                  <ul className="list-unstyled">
                    <li>
                      <Link to="" spy={true} smooth={true}>
                        <p
                          style={linkStyle}
                          onClick={() => {
                            this.scrollTest("front");
                          }}
                        >
                          Home
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="about-teamex" spy={true} smooth={true}>
                        <p
                          style={linkStyle}
                          onClick={() => {
                            this.scrollTest("about-teamex");
                          }}
                        >
                          About Us
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="services" spy={true} smooth={true}>
                        <p
                          style={linkStyle}
                          onClick={() => {
                            this.scrollTest("services");
                          }}
                        >
                          Services
                        </p>
                      </Link>
                    </li>
                    <li>
                      <a href="/grievance">
                        <p style={linkStyle}>Grievance</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
                <div className="footer-widget ">
                  {/*<div className="footer-title">Quick Links</div>*/}
                  <ul className="list-unstyled">
                    <li>
                      <a href="/faq">FAQ's</a>
                    </li>
                    <li>
                      <a href="/legal">Legal Documents</a>
                    </li>
                    <li>
                      <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/refund-return">Refund & Return</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
                <div className="footer-widget ">
                  <div className="footer-title" style={{ paddingBottom: "1em" }}>
                    Contact Info
                  </div>
                  <ul className="list-unstyled">
                    {/*<li><a href="#">Contact Info</a></li>*/}
                    <li>
                      <a href="#">
                        421-424, 4th Floor, Vishala Supreme, Opp Torrent Power, SP Ring Road, Nikol, Ahmedabad- 382350.
                      </a>
                    </li>
                    <li>
                      <a href="#">info@teamex.in</a>
                    </li>
                    <li>
                      <a href="#">+91-7069121213</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-6 col-6 ">
                <div className="footer-widget ">
                  <form>
                    <div className="newsletter-form">
                      <img
                        src={fbIcon}
                        onClick={this.fbProfile}
                        style={{
                          height: "23px",
                          width: "23px",
                          marginRight: "1em",
                          cursor: "pointer"
                        }}
                      />
                      <img
                        src={instaIcon}
                        onClick={this.instaProfile}
                        style={{
                          height: "23px",
                          width: "23px",
                          cursor: "pointer"
                        }}
                      />
                      {/*<button className="btn btn-default btn-sm" type="submit">Go*/}
                      {/*</button>*/}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(TxFooter);

import React from "react";
import "../../../assets/css/footer-style.css";
import { withRouter } from "react-router-dom";

import {
  LongFooter,
  LongFooterCopyright,
  LongFooterNavbar,
  LongFooterNavLink
} from "./styles";

class TxFooter extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      collapsed: true,
      sticky: false
    };
  }

  handleScroll = () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition >= 72) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }
  };

  componentDidMount() {
    this.setState({ stickey: window.scrollY >= 72 ? true : false });
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  routeChange() {
    this.props.history.push("/cart");
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  windowLocation() {
    window.open("https://web.teamexbiz.in/?id=tmx");
  }
  videoLocation() {
    this.props.history.push("/video-gallery");
  }
  scrollTest = loc => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    if (this.props.location.pathname !== "/") {
      this.props.history.push("/", { test: loc });
    }

    this.props.sendLocation(loc);
  };
  render() {
    return (
      <>
        <LongFooter>
          <LongFooterCopyright>
            © 2019 TEAMEX RETAIL L.T.D. | All rights reserved
          </LongFooterCopyright>
          <LongFooterNavbar>
            <LongFooterNavLink href='/refund-return'>Refund & Return</LongFooterNavLink>
            <LongFooterNavLink href='/grievance'>Grievance</LongFooterNavLink>
            <LongFooterNavLink href='/privacy-policy'>Privacy</LongFooterNavLink>
            <LongFooterNavLink href='/franchise'>Franchise</LongFooterNavLink>
            <LongFooterNavLink onClick={param => this.scrollTest("contact-teamex")}>Contact Us</LongFooterNavLink>
            <LongFooterNavLink href='/faq'>FAQ</LongFooterNavLink>
            <LongFooterNavLink href='/legal'>Legal Documents</LongFooterNavLink>
            {/* <LongFooterNavLink onClick={this.windowLocation}>Distributor Login</LongFooterNavLink> */}
          </LongFooterNavbar>
        </LongFooter>
      </>
    );
  }
}

export default withRouter(TxFooter);

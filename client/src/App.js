import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import TxCart from "./pages/cart";
import TxPrivacyPolicy from "./components/TxPrivacyPolicy";
import TxLegal from "./components/TxLegal";
import "./App.css";
import TxProductDetail from "./pages/productDetail";
import TxProductList from "./pages/productList";
import AllProducts from "./pages/allProducts";
import TxFaq from "./components/TxFaq";
import Orders from "./components/orderPlaced";
import VideoGallery from "./components/VideoGallery";
import Refund from "./components/refund";
import Grievance from "./components/Grievance";
import FranchiseList from "./components/franchise"
import TxHome from "./pages/home";
import TxVideoGallery from "./pages/videos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    };
  }

  moveLocation = locationFromNav => {
    console.log("New Location", locationFromNav);
    this.setState({ location: locationFromNav });
  };

  render() {
    return (
      <Router>
        <div>
          <Layout sendLocation={this.moveLocation}>
            <Switch>
              <Route path="/cart" component={TxCart} />
              <Route path="/product-detail" component={TxProductDetail} />
              <Route path="/product-list" component={TxProductList} />
              <Route path="/products" component={AllProducts} />
              <Route path="/privacy-policy" component={TxPrivacyPolicy} />
              <Route path="/legal" component={TxLegal} />
              <Route path="/faq" component={TxFaq} />
              <Route path="/orders" component={Orders} />
              <Route path="/refund-return" component={Refund} />
              <Route path="/video-gallery" component={TxVideoGallery} />
              <Route path="/grievance" component={Grievance} />
              <Route path="/franchise" component={FranchiseList} />
              <Route
                path="/"
                render={props => (
                  <TxHome {...props} loc={this.state.location} />
                )}
              />
            </Switch>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;

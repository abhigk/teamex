import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default ({ children, sendLocation }) => (
  <>
    <Header sendLocation={sendLocation} />
    {children}
    <Footer sendLocation={sendLocation} />
  </>
);

import React from "react";
import { Footer, Subscriptions, Navbar } from ".";

const Layout = ({ children }) => {
  return (
    <div className="overflow-y-hidden ">
      <Navbar />
      {children}
      <Subscriptions />
      <Footer />
    </div>
  );
};
export default Layout;

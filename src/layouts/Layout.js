import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ThemeProvider from "react-bootstrap/ThemeProvider";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;

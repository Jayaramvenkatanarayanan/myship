import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ThemeProvider from "react-bootstrap/ThemeProvider";

export default class Layout extends Component {
  render() {
    return (
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </ThemeProvider>
    );
  }
}

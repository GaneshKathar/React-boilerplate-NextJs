import React from "react";
import App from "next/app";
import store from "../src/Redux/store";
import { Provider } from "react-redux";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </div>
    );
  }
}

export default MyApp;

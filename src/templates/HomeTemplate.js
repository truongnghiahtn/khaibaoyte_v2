import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeLayout = (props) => {
  return (
    <div >
      <Header />
      <div className="wrapper">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        );
      }}
    />
  );
}

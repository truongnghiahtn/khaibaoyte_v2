import React, { Fragment, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Header from "../components/headerAdmin";
import SideBar from "../components/newSideBar";

const HomeLayout = (props) => {
  return (
    <div className="MyDashBoard">
      <Header />
      <div className="row">
        <SideBar />
        <div className="wrapper_customer  " style={{ minHeight: "50vh" }}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 350) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 350) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <HomeLayout>
            <Component {...propsComponent} />
            <div
              id="backtop"
              className="container "
              onClick={scrollTop}
              style={{ display: showScroll ? "flex" : "none" }}
            >
              <i className="fa fa-chevron-circle-up" aria-hidden="true"></i>
            </div>
          </HomeLayout>
        );
      }}
    />
  );
}

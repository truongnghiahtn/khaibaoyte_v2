import React, { Fragment, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import SideBar from "../components/newSideBar";

const AdminLayout = (props) => {
  return (
    <div className="MyDashBoard">
      <div className="row">
        <SideBar />
        <div className="content-newDashBoard  ">{props.children}</div>
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
          <AdminLayout>
            <Component {...propsComponent} />
            <div
              id="backtop"
              className="container "
              onClick={scrollTop}
              style={{ display: showScroll ? "flex" : "none" }}
            >
              <i className="fa fa-chevron-circle-up" aria-hidden="true"></i>
            </div>
          </AdminLayout>
        );
      }}
    />
  );
}

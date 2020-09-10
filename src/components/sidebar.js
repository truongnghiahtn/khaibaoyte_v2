import React, { Component } from "react";
import $ from "jquery";

export default class sidebar extends Component {
  componentDidMount() {
    let Scrollbar = window.Scrollbar;
    if ($("#sidebar-scrollbar").length) {
      Scrollbar.init(document.querySelector("#sidebar-scrollbar"));
    }
    let Scrollbar1 = window.Scrollbar;
    if ($("#right-sidebar-scrollbar").length) {
      Scrollbar1.init(document.querySelector("#right-sidebar-scrollbar"));
    }
  }

  render() {
    return (
      <div>
        {" "}
        <div className="iq-sidebar">
          <div className="iq-sidebar-logo d-flex justify-content-between">
            <a href="index.html">
              {/* <img src="images/logo-base.png" className="img-fluid" alt /> */}
              <h4 style={{ color: "white" }}> Trang chủ </h4>
            </a>
            {/* <div className="iq-menu-bt-sidebar">
              <div className="iq-menu-bt align-self-center">
                <div className="wrapper-menu">
                  <div className="main-circle">
                    <i className="ri-more-fill" />
                  </div>
                  <div className="hover-circle">
                    <i className="ri-more-2-fill" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div id="sidebar-scrollbar">
            <nav className="iq-sidebar-menu">
              <ul className="iq-menu">
                <li className="iq-menu-title">
                  <i className="fa fa-times" aria-hidden="true"></i>
                  <span>Trang chủ</span>
                </li>
                <li>
                  <a href="#" className="iq-waves-effect">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <span>Home</span>
                  </a>
                </li>
                <li className="iq-menu-title">
                  <i className="fa fa-times" aria-hidden="true"></i>
                  <span>Quản lý</span>
                </li>
                <li
                  className={this.props.idchude == -1 ? "active" : ""}
                  onClick={() => {
                    this.props.setchude(-1);
                  }}
                >
                  <a style={{ cursor: "pointer" }} className="iq-waves-effect ">
                    <i className="fa fa-user-circle" aria-hidden="true" />
                    <span>Chu de</span>
                  </a>
                </li>
                <li></li>
                <li
                  className={this.props.idchude != -1 ? "active" : ""}
                  onClick={() => {
                    this.props.setchude(-2);
                  }}
                >
                  <a style={{ cursor: "pointer" }} className="iq-waves-effect">
                    <i className="fa fa-chrome" aria-hidden="true" />
                    <span>Template</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="p-3" />
          </div>
        </div>{" "}
      </div>
    );
  }
}

import React, { Component } from "react";
import SideBar from "../../components/sidebar";
import Axios from "axios";
import NoiDung from "../../components/NoiDungChuDe";
import Template from "../../components/NoiDungTemplate";
import { map } from "jquery";

export default class myhome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChuDe: [],
      template: [],
      temPlateID: -1,
      chuDeID: -1,
      all: [],
      slChude: 1,
      slTempalte: 1,
    };
  }

  componentDidMount() {
    this.getChuDe();
    this.getall();
  }
  getChuDe = () => {
    Axios({
      method: "GET",
      url: "http://localhost:50663/api/ApiChuDe",
    })
      .then((result) => {
        this.setState(
          {
            ChuDe: result.data,
          },
          () => {
            this.setState({
              slChude: result.data.length,
            });
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getTemplate = (data) => {
    this.setState(
      {
        chuDeID: data.IDChuDe,
      },
      () => {
        Axios({
          method: "GET",
          url: `http://localhost:50663/api/Templates/${data.IDChuDe}`,
        })
          .then((result) => {
            this.setState(
              {
                template: result.data,
              },
              () => {
                console.log(this.state.template);
              }
            );
          })
          .catch((err) => {
            console.log(err);
          });
      }
    );
  };

  sideBarChuDe = (id) => {
    this.setState({
      chuDeID: id,
    });
  };
  getall = () => {
    Axios({
      method: "GET",
      url: `http://localhost:50663/api/ApiTemplate`,
    })
      .then((result) => {
        this.setState(
          {
            all: result.data,
          },
          () => {
            this.setState({
              slTempalte: result.data.length,
            });
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.slTempalte);
    let datatemlate = this.state.template;
    if (this.state.chuDeID == -2) {
      datatemlate = this.state.all;
    }
    return (
      <div>
        <div className="wrapper">
          <SideBar idchude={this.state.chuDeID} setchude={this.sideBarChuDe} />
          <div className="iq-top-navbar">
            <div className="iq-navbar-custom">
              <div className="iq-sidebar-logo">
                <div className="top-logo">
                  <a href="index.html" className="logo">
                    <img src="images/logo.png" className="img-fluid" />
                    <span>XRay</span>
                  </a>
                </div>
              </div>
              <nav className="navbar navbar-expand-lg navbar-light p-0">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <div className="iq-menu-bt align-self-center">
                  <div className="wrapper-menu">
                    <div className="main-circle">
                      <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div className="hover-circle">
                      <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto navbar-list">
                    <li className="nav-item iq-full-screen">
                      <a
                        href="#"
                        className="iq-waves-effect"
                        id="btnFullscreen"
                      >
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="search-toggle iq-waves-effect">
                        <i className="fa fa-bell" aria-hidden="true"></i>
                        <span className="bg-danger dots" />
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a href="#" className="search-toggle iq-waves-effect">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <span className="bg-primary count-mail" />
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div id="content-page" className="content-page">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <div className="iq-card">
                        <div className="iq-card-body iq-bg-primary rounded">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="rounded-circle iq-card-icon bg-primary">
                              <i class="fa fa-id-card" aria-hidden="true"></i>
                            </div>
                            <div className="text-right">
                              <h2 className="mb-0">{this.state.slChude}</h2>
                              <h5 className>Chủ đề</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className="iq-card">
                        <div className="iq-card-body iq-bg-warning rounded">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="rounded-circle iq-card-icon bg-warning">
                              <i class="fa fa-id-card-o" aria-hidden="true"></i>
                            </div>
                            <div className="text-right">
                              <h2 className="mb-0">{this.state.slTempalte}</h2>
                              <h5 className>Template</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">
                          {this.state.chuDeID == -1 ? "Tất cả Chủ đề" : ""}
                          {this.state.chuDeID == -2 ? "Tất cả Template" : ""}
                          {this.state.chuDeID != -1 && this.state.chuDeID != -2
                            ? "Tất cả template thuộc chủ đề " +
                              this.state.chuDeID
                            : ""}
                        </h4>
                      </div>
                    </div>
                    <div className="iq-card-body">
                      <div className="container " style={{ height: 500 }}>
                        <div className=" row">
                          {this.state.chuDeID == -1 ? (
                            <NoiDung
                              data={this.state.ChuDe}
                              getdata={this.getTemplate}
                            />
                          ) : (
                            <Template data={datatemlate} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer */}
            <footer className="bg-white iq-footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="terms-of-service.html">Terms of Use</a>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="col-lg-6 text-right">
                    Copyright 2020 <a href="#">XRay</a> All Rights Reserved.
                  </div> */}
                </div>
              </div>
            </footer>
            {/* Footer END */}
          </div>
        </div>
      </div>
    );
  }
}

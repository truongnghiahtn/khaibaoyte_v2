import React, { Component, Fragment } from "react";
import Axios from "axios";

import UserComponent from "../../components/UserComponent";
import Allquestion from "../../components/allquestion";
import { map } from "jquery";
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cauhoi: [],
      soLoaiCauHoi: [1],
      indexPage: 1,
      values: {
        HoTen: "",
        MSNV: "",
        Email: "",
        IDChuDe: "",
        IDTemplate: "",
        CauTraLoi_ChiTiet: [],
      },
      endpage: null,
      socauhoi: 5,
    };
  }
  componentDidMount() {
    this.getCauHoi();
  }
  getCauHoi = () => {
    if (sessionStorage.getItem("template")) {
      var temPlateLocal = JSON.parse(sessionStorage.getItem("template"));
      if (temPlateLocal.SoLgHienThi != null) {
        this.setState({
          socauhoi: temPlateLocal.SoLgHienThi,
        });
      }
      Axios({
        method: "GET",
        url: `http://localhost:50663/api/CauHoi/${temPlateLocal.IDTemplate}`,
      })
        .then((result) => {
          this.setState(
            {
              Cauhoi: result.data,
            },
            () => {
              this.checkpage();
            }
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  checkpage = () => {
    let page = parseInt(this.state.Cauhoi.length / this.state.socauhoi);
    let page2 = this.state.Cauhoi.length / this.state.socauhoi;
    if (page != page2) {
      page += 1;
    }
    if (this.state.Cauhoi.length === 0) {
      this.setState({
        endpage: 1,
      });
    } else {
      this.setState({
        endpage: page + 1,
      });
    }
  };

  renderHtmlUser = () => {
    return (
      <div className={this.state.indexPage === 1 ? "vi" : "d-none"}>
        <UserComponent
          next={this.nextpage}
          submitUser={this.dataUser}
          endpage={this.state.endpage}
        />
      </div>
    );
  };

  dataUser = (data) => {
    var hoten, msnv, email;
    if (sessionStorage.getItem("template")) {
      var temPlateLocal = JSON.parse(sessionStorage.getItem("template"));
      // var idChuDe = JSON.parse(sessionStorage.getItem("idChuDe"));
      data.map((item) => {
        if (item.name === "HoTen") {
          hoten = item.CauTraLoi;
        } else {
          if (item.name === "MSNV") {
            msnv = item.CauTraLoi;
          } else {
            email = item.CauTraLoi;
          }
        }
      });
      this.setState(
        {
          values: {
            ...this.state.values,
            HoTen: hoten,
            MSNV: msnv,
            Email: email,
            IDTemplate: temPlateLocal.IDTemplate,
            IDChuDe: temPlateLocal.IDChuDe,
          },
        },
        () => {
          if (this.state.endpage == 1) {
            Axios({
              method: "POST",
              url: "http://localhost:50663/api/ApiCauTraLoi",
              data: this.state.values,
            })
              .then((result) => {
                this.props.history.push("Submit");
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      );
    }
  };

  renderAllquetion = () => {
    let mang = [];
    for (let i = 1; i < this.state.endpage; i++) {
      mang.push(i);
    }
    if (mang.length != 0) {
      return mang.map((item, index) => {
        return (
          <div className={this.state.indexPage === item + 1 ? "vi" : "d-none"}>
            <Allquestion
              data={this.state.Cauhoi}
              page={item}
              socauhoi={this.state.socauhoi}
              next={this.nextpage}
              postdata={this.postData}
              submit={this.dataValue}
              endpage={this.state.endpage}
            />
          </div>
        );
      });
    }
  };
  dataValue = (data) => {
    const CauTraLoi_ChiTietUpdate = this.state.values.CauTraLoi_ChiTiet.concat(
      data
    );
    this.setState(
      {
        values: {
          ...this.state.values,
          CauTraLoi_ChiTiet: CauTraLoi_ChiTietUpdate,
        },
      },
      () => {
        console.log(this.state.values);
      }
    );
  };
  postData = (data) => {
    const CauTraLoi_ChiTietUpdate = this.state.values.CauTraLoi_ChiTiet.concat(
      data
    );
    this.setState(
      {
        values: {
          ...this.state.values,
          CauTraLoi_ChiTiet: CauTraLoi_ChiTietUpdate,
        },
      },
      () => {
        Axios({
          method: "POST",
          url: "http://localhost:50663/api/ApiCauTraLoi",
          data: this.state.values,
        })
          .then((result) => {
            console.log(result);
            this.props.history.push("Submit");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    );
  };
  renderPageTitle = () => {
    if (sessionStorage.getItem("template")) {
      var temPlateLocal = JSON.parse(sessionStorage.getItem("template"));
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: temPlateLocal.Content,
          }}
        ></div>
      );
    }
  };

  nextpage = (data) => {
    this.setState({
      indexPage: data,
    });
  };
  render() {
    return (
      <Fragment>
        {this.renderPageTitle()}
        {this.renderHtmlUser()}
        {this.renderAllquetion()}
      </Fragment>
    );
  }
}

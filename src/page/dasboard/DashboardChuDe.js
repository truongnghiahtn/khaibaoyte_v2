import React, { Component } from "react";
import * as action from "../../redux/action/index";
import Axios from "axios";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class mydashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChuDe: [],
    };
  }
  componentDidMount() {
    this.getChuDe();
  }
  getChuDe = () => {
    Axios({
      method: "GET",
      url: "http://localhost:50663/api/ApiChuDe",
    })
      .then((result) => {
        this.setState({
          ChuDe: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getTab = (data) => {
    this.props.getdata(data, this.props.history);
    this.props.gettabdata("2");
  };
  renderhtml = () => {
    return this.state.ChuDe.map((item, key) => {
      return (
        <NavLink
          to="/admin/template"
          className="card col-4"
          style={{
            textAlign: "center",
          }}
        >
          <div
            className="content-card"
            style={{
              border: "1px solid black",
              cursor: "pointer",
              borderRadius: "5px",
            }}
            onClick={() => {
              this.getTab(item);
            }}
          >
            <div className="card-body">
              <h4 className="card-title">{item.TenChuDe}</h4>
              <p className="card-text">{item.MoTa}</p>
            </div>
          </div>
        </NavLink>
      );
    });
  };
  render() {
    return (
      <div className="data-content">
        <div className="container">
          <div className="row">{this.renderhtml()}</div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getdata: (data, history) => {
      dispatch(action.actGetListTemplateID(data, history));
    },
    gettabdata: (data) => {
      dispatch(action.getTab(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(mydashboard);

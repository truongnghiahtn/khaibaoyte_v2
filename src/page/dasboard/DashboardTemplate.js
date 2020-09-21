import React, { Component } from "react";
import * as action from "../../redux/action/index";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class mydashboard extends Component {
  componentDidMount() {
    this.props.gettabdata("2");
    this.props.getTemplate();
  }
  onnext = (data) => {
    sessionStorage.setItem("template", JSON.stringify(data));
  };
  renderhtml = () => {
    return this.props.data.map((item, key) => {
      return (
        <NavLink
          to="/user"
          className="card col-12 col-sm-6 col-md-4 mt-3"
          onClick={() => {
            this.onnext(item);
          }}
        >
          <div className="content-card">
            <div className="card-body">
              <h4
                className="card-title"
                style={{
                  color: "white",
                  fontSize: "20px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                {item.TenTemplate}
              </h4>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <div
              className="img-cover"
              style={{
                backgroundImage: `url("../asset/img/background_${key}.jpg") `,
              }}
            ></div>
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
const mapStateToProps = (state) => {
  return {
    data: state.deMoReducer.TemplateList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    gettabdata: (data) => {
      dispatch(action.getTab(data));
    },
    getTemplate: () => {
      dispatch(action.actGetListTemplate());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(mydashboard);

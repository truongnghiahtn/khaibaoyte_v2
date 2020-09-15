import React, { Component } from "react";
import * as action from "../../redux/action/index";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class mydashboard extends Component {
  componentDidMount() {
    this.props.gettabdata("2");
  }
  onnext = (data) => {
    sessionStorage.setItem("template", JSON.stringify(data));
  };
  renderhtml = () => {
    return this.props.data.map((item, key) => {
      return (
        <NavLink
          to="/user"
          className="col-4"
          onClick={() => {
            this.onnext(item);
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: item.Content,
            }}
          ></div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(mydashboard);

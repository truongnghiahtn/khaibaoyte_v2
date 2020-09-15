import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../../redux/action/index";

class pagesubmit extends Component {
  render() {
    return (
      <div className="page-title-area page-title-v2" style={{ height: 270 }}>
        <h3 className="mt-3">
          Tờ khai báo y tế tự nguyện công ty GSOFT và GOBRANDING
        </h3>
        <p>"Câu trả lời của bạn đã được ghi lại.</p>
        <div className="row justify-content-between">
          <NavLink
            className="go-home"
            to="/"
            onClick={() => {
              this.props.gettabdata("1");
            }}
          >
            Trang chủ
          </NavLink>
          <NavLink
            className="go-home"
            to="/admin/thongke"
            onClick={() => {
              this.props.gettabdata("3");
            }}
          >
            {" "}
            Xem chi tiết gửi phản hồi
          </NavLink>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    gettabdata: (data) => {
      dispatch(action.getTab(data));
    },
  };
};
export default connect(null, mapDispatchToProps)(pagesubmit);

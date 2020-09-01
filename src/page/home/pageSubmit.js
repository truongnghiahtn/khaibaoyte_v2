import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class componentName extends Component {
    render() {
        return (
            <div className='page-title-area' style={{ height: 270 }}>
                <h3 className="mt-3">Tờ khai báo y tế tự nguyện công ty GSOFT và GOBRANDING</h3>
                <p>"Câu trả lời của bạn đã được ghi lại.</p>
                <div className="row justify-content-between">
                    <NavLink className="go-home" to="/">Trang chủ</NavLink>
                    <NavLink className="go-home" to="/Dashboard"> Xem chi tiết gửi phản hồi</NavLink>
                </div>
            </div>
        );
    }
}

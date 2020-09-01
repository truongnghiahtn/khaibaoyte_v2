import React, { Component } from 'react';

export default class cautraloitext extends Component {

    renderhtml = () => {
        return this.props.data.NoiDungCauTraLoi.map((item, index) => {
            return (<p key={index}>{item}</p>)
        })
    }

    render() {
        return (
            <div className="DS-content col-12">
                <div className="content-Parent tp-content">
                    <div className="tp-cotent__title">{this.props.data.TenCauHoi} </div>
                    <div className="content">
                        {this.renderhtml()}
                        <p className="pt-3 m-0"> Tổng số câu trả lời : {this.props.data.SoLuong}   </p>
                    </div>

                </div>
            </div >
        );
    }
}

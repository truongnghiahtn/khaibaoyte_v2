import React, { Component } from 'react';

export default class cautraloi extends Component {
    renderhtml = () => {
        switch (this.props.title) {
            case "Hoten":
                return (
                    this.props.data.map((item, index) => {
                        return (<p key={index}> {item.Hoten}</p>)
                    })
                )
            case "MSNV":
                return (
                    this.props.data.map((item, index) => {
                        return (<p key={index}> {item.MSNV}</p>)
                    })
                )
            case "Email":
                return (
                    this.props.data.map((item, index) => {
                        return (<p key={index}> {item.Email}</p>)
                    })
                )
            default:
                break;
        }

    }
    render() {
        return (
            <div className="DS-content col-12">
                <div className="content-Parent tp-content">
                    <div className="tp-cotent__title"> {this.props.title}</div>
                    <div className="content">
                        {this.renderhtml()}
                        <p className="pt-3 m-0"> Tổng số {this.props.title}: <b>{this.props.data.length}</b>  </p>
                    </div>

                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';

export default class template extends Component {
    renderhtml = () => {
        return this.props.data.map((item, index) => {
            return (<p key={index}> {item.TenTemplate}</p>)
        })
    }
    render() {
        return (
            <div className="DS-content col-12">
                <div className="content-Parent tp-content">
                    <div className="tp-cotent__title"> Template</div>
                    <div className="content">
                        {this.renderhtml()}
                        <p className="pt-3 m-0"> Tổng số template: <b>{this.props.data.length}</b>  </p>
                    </div>

                </div>
            </div>
        );
    }
}

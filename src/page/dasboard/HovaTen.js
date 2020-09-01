import React, { Component } from 'react';

export default class componentName extends Component {
    renderhtml = () => {
        return this.props.data.map((item, index) => {
            return (<p key={index} > {item.TenChuDe}</p>)
        })
    }
    render() {
        return (
            <div> textInComponent </div>
        );
    }
}

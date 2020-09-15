import React, { Component } from "react";
import $ from "jquery";

export default class cautraloiradio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soluongtl: 0,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.render3DPie();
    }, 200);
  }
  render3DPie = () => {
    var x = 0;
    if (this.props.dem) {
      x = this.props.dem;
    }

    let mangSL = this.props.data.NoiDung.map((item) => item.SoLuong);
    let manglabels = this.props.data.NoiDung.map((item) => item.TenSub);
    let total = mangSL.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    this.setState({
      soluongtl: total,
    });
    window.am4core.ready(function () {
      window.am4core.useTheme(window.am4themes_animated);
      // Themes end

      var chart = window.am4core.create(
        `am-3dpie-chart${x}`,
        window.am4charts.PieChart3D
      );
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

      chart.legend = new window.am4charts.Legend();

      chart.data = [
        {
          country: manglabels[0],
          litres: mangSL[0],
          fill: "red",
        },
        {
          country: manglabels[1],
          litres: mangSL[1],
        },
      ];

      var series = chart.series.push(new window.am4charts.PieSeries3D());
      series.colors.list = [
        window.am4core.color("#089bab"),
        window.am4core.color("#FC9F5B"),
        window.am4core.color("#57de53"),
        window.am4core.color("#f26361"),
        window.am4core.color("#ababab"),
        window.am4core.color("#61e2fc"),
      ];
      series.dataFields.value = "litres";
      series.dataFields.category = "country";
    }); // end window.am4core.ready()
  };
  render() {
    return (
      <div className="DS-content col-8" style={{ margin: "0 auto" }}>
        <div className="content-Parent tp-content">
          <div className="tp-cotent__title">{this.props.data.TenCauHoi} ? </div>
          <div className="content">
            <div className="iq-cards ">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title"> </h4>
                </div>
              </div>
              <div className="iq-card-body">
                <div
                  id={"am-3dpie-chart" + this.props.dem}
                  style={{ height: "290px" }}
                ></div>
              </div>
            </div>
            <p className="pt-3 m-0">
              {" "}
              Tổng số câu trả lời : {this.state.soluongtl}{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

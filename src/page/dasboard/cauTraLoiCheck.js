import React, { Component } from "react";
import Chart from "chart.js";

export default class cauTraLoiCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soluongtl: 0,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.renderchart();
    }, 200);
  }

  renderchart = () => {
    var x = 0;
    if (this.props.dem) {
      x = this.props.dem;
    }
    let mangSL = this.props.data.NoiDung.map((item) => item.SoLg);

    let manglabels = this.props.data.NoiDung.map((item) => item.Option);
    let total = mangSL.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    this.setState({
      soluongtl: total,
    });
    var ctx = document.getElementById(`myChart${x}`);
    var myChart = new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: manglabels,
        datasets: [
          {
            // label: "# of Votes",
            data: mangSL,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  };
  render() {
    return (
      <div className="DS-content  col-8" style={{ margin: "0 auto" }}>
        <div className="content-Parent tp-content">
          <div className="tp-cotent__title">{this.props.data.TenCauHoi} </div>
          <div className="content">
            <div className="iq-cards ">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title"> </h4>
                </div>
              </div>
              <div className="iq-card-body">
                <canvas
                  id={"myChart" + this.props.dem}
                  width="400"
                  height="200"
                ></canvas>
              </div>
            </div>
            <p className="pt-3 m-0">
              {" "}
              Tổng số câu trả lời : {this.state.soluongtl}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

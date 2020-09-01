import React, { Component, Fragment } from "react";
import { Select, Input, MenuItem, Button } from "@material-ui/core";
import PageTitleArea from "../../components/PageTitleArea";
import Axios from "axios";
import { NavLink } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chuDe: [],
      template: [],
      chuDeSelected: -1,
      templateSelected: -1,
    };
  }

  componentDidMount() {
    this.getChuDe()
  }
  getChuDe = () => {
    Axios({
      method: "GET",
      url: "http://localhost:50663/api/ApiChuDe",
    })
      .then((result) => {
        console.log(result.data)
        this.setState({
          chuDe: result.data
        }, () => { console.log(this.state.chuDe) })
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getTemplate = (id) => {
    Axios({
      method: "GET",
      url: `http://localhost:50663/api/Templates/${id}`,
    })
      .then((result) => {
        this.setState({
          template: result.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }


  renderChuDe = () => {
    return this.state.chuDe.map((item, index) => (
      <MenuItem key={index} value={item.IDChuDe}>
        <em>{item.TenChuDe}</em>
      </MenuItem>
    ));
  };
  renderTemplate = () => {
    return this.state.template
      .map((item, index) => (
        <MenuItem key={index} value={item.IDTemplate}>
          <em>{item.TenTemplate}</em>
        </MenuItem>
      ));
  };
  onChangeChuDe = (e) => {
    this.setState({
      chuDeSelected: e.target.value,
      templateSelected: -1,
    });
    this.getTemplate(e.target.value)

  };
  onChangeTemplate = (e) => {
    this.setState({
      templateSelected: e.target.value,
    });

  };
  onNext = () => {
    sessionStorage.setItem("idChuDe", this.state.chuDeSelected);
    sessionStorage.setItem(
      "template",
      JSON.stringify(
        this.state.template.find(
          (item) => item.IDTemplate === this.state.templateSelected
        )
      )
    );
  }
  render() {
    let title = "Khai Báo Y Tế";
    let des =
      "Bằng cách khai báo y tế trên ứng dụng NCOVI, mỗi chúng ta đã đóng góp phần công sức vào công cuộc phòng và chống đại dịch cúm Corona, giúp các cơ quan nhà nước, Bộ Y Tế có thể thống kê, kiểm soát tình hình và thực hiện các biện pháp cách ly chính xác và nhanh chóng, trách lây lan. Trước tình hình đại dịch cúm Corona hay Covid-19 đang lây lan ngày một nhanh hơn, chiều 9/3, Bộ Y Tế kết hợp Bộ Thông tin và Truyền thông đã tiến hành mở dịch vụ khai báo y tế trên ứng dụng NCOVI(hay nCoV) và Vietnam Health Declaration hỗ trợ khai báo y tế, nâng cao công tác phòng chống dịch. Các bạn có thể tải app tại 2 địa chỉ:";

    return (
      <Fragment>
        <PageTitleArea title={title} des={des} />
        <div className="tp-content">
          <div className="tp-cotent__title">Lựa chọn form</div>
          <div className="input-group chude-temp">
            <div className="row ">
              <div className="col-5">
                <Select
                  input={<Input />}
                  value={this.state.chuDeSelected}
                  onChange={this.onChangeChuDe}
                >
                  <MenuItem disabled value={-1}>
                    <em>Vui lòng chọn chủ đề</em>
                  </MenuItem>
                  {this.renderChuDe()}
                </Select>
              </div>
              <div className="col-5">
                <Select
                  input={<Input />}
                  value={this.state.templateSelected}
                  onChange={this.onChangeTemplate}
                  disabled={this.state.chuDeSelected === -1 ? true : false}
                >
                  <MenuItem disabled value={-1}>
                    <em>Vui lòng chọn Template</em>
                  </MenuItem>
                  {this.renderTemplate()}
                </Select>
              </div>
              <div className="col-2">
                <Button
                  variant="contained"
                  color="primary"
                  disabled={this.state.templateSelected === -1}
                  to="/user"
                  component={NavLink}
                  onClick={this.onNext}
                >
                  Tiếp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { connect } from "react-redux";
import { xoaGheAction } from "../../store/actions/xoaGheAction";

class Detail extends Component {

  renderContent = () => {
    return this.props.danhSachGhe.map((element) => {
      return (<tr key={element.soGhe}>
        <td>{element.soGhe}</td>
        <td>{element.gia.toLocaleString()}</td>
        <td onClick={() =>  this.props.dispatch(xoaGheAction(element))} className="delete">X</td>
      </tr>)
    })
  }

  total = () => {
    let total = 0;
    for(const element of this.props.danhSachGhe) {
      total += element.gia;
    }
    return total;
  }
  
  render() {
    return (
      <div>
        <h1>Danh sách bàn ghế bạn chọn</h1>
        <ul className="seat_w3ls">
          <li className="smallBox greenBox">Selected Seat</li>
          <li className="smallBox redBox">Reserved Seat</li>
          <li className="smallBox emptyBox">Empty Seat</li>
        </ul>
        <table className="order">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>
            {this.renderContent()}
            <tr id="total">
              <td>Thành tiền</td>
              <td>{this.total( ).toLocaleString()}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.datGheReducer.buyTickets,
  };
}

export default connect(mapStateToProps)(Detail);
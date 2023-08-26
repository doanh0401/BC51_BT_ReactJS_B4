import React, { Component } from "react";
import { connect } from "react-redux";
import { xoaGheAction } from "../../store/actions/xoaGheAction";
import { thanhToanAction } from "../../store/actions/datGheAction";

class Detail extends Component {

  renderContent = () => {
    return this.props.buyTickets.map((element) => {
      return (<tr key={element.soGhe}>
        <td>{element.soGhe}</td>
        <td>{element.gia.toLocaleString()}</td>
        <td onClick={() =>  this.props.dispatch(xoaGheAction(element))} className="delete">X</td>
      </tr>)
    })
  }

  total = () => {
    let total = 0;
    for(const element of this.props.buyTickets) {
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
              <td>{this.total().toLocaleString()}</td>
              <td><button onClick={() => this.props.dispatch(thanhToanAction())}>Thanh toán</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    buyTickets: state.datGheReducer.buyTickets,
    danhSachGhe: state.datGheReducer.danhSachGhe
  };
}

export default connect(mapStateToProps)(Detail);
import React, { Component } from "react";
import Chair from "./Chair";
import { connect } from "react-redux";

class ChairList extends Component {
  renderContent = () => {
    return this.props.danhSachGhe.map((element) => {
      if(element.hang === "") return ;
      return (<tr key={element.hang}>
        <td>{element.hang}</td>
        {this.renderHang(element.danhSachGhe)}
      </tr>);
    })
  }
  renderHang = (data) => {
    return data.map((element) => {
      return <Chair element={element} key={element.soGhe}/>
    })
  }
  render() {
    return (
      <div className="text-center">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
            </tr>
          </thead>
          <tbody>
            {this.renderContent()}
          </tbody>
        </table>
        <div className="screen">
          <h2 className="wthree">Screen this way</h2>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.datGheReducer.danhSachGhe,
  };
}

export default connect(mapStateToProps)(ChairList);
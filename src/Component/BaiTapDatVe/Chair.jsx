import React, { Component } from 'react'
import { connect } from 'react-redux'
import { datGheAction } from '../../store/actions/datGheAction';

class Chair extends Component {
  render() {
    return (
      <td><input type="checkbox" onChange={() => this.props.dispatch(datGheAction(this.props.element))} className={`seats ${this.props.element.daDat ? "bg-danger": this.props.element.DangChon ? "bg-choose" : ""}`}  defaultValue={this.props.element.soGhe} disabled={this.props.element.daDat}/></td>
    )
  }
}

export default connect()(Chair)

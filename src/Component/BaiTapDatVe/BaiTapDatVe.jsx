import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ChairList from "./ChairList";
import Detail from "./Detail";
import "../../Component/BaiTapDatVe/style.css"

export default class BaiTapDatVe extends Component {
  state = {
    Chair: []
  }
  render() {
    return (
      <div className="d-flex">
        <div className="text-white pt-2">
          <h1>MOVIE SEAT SELECTION</h1>
          <div className="container">
            <div className="contain">
              <ChairList/>
            </div>
          </div>
        </div>
        <Detail />
      </div>
    );
  }
}

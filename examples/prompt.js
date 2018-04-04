/**
 * Created by dxc on 2016/11/18.
 */
import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import { prompt } from "fs-alert";
class Simple extends Component {
  show1() {
    prompt("输入123关闭", [
      {
        text: "关闭"
      },
      {
        text: "确定",
        onClick: (value, close) => {
          if (value == "123") {
            close();
          }
        }
      }
    ]);
  }

  render() {
    return (
      <div style={{ height: 300, padding: 20 }}>
        <div onClick={this.show1.bind(this, true)}>点击显示</div>
      </div>
    );
  }
}
ReactDOM.render(<Simple />, document.getElementById("__react-content"));

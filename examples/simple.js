/**
 * Created by dxc on 2016/11/18.
 */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import alert from 'fs-alert';
class Simple extends Component {
  show1() {
    alert('Alert', <div>123123</div>, [
      {
        text: "You don't have",
      },
      {
        text: 'you have',
        onClick: () => {
          console.log('ok');
        },
      },
    ]);
  }
  show2() {
    alert('Alert', 'I have a Alert', [
      {
        text: '1',
      },
      {
        text: '2',
      },
      {
        text: '3',
      },
    ]);
  }
  show3() {
    alert('I have a Alert');
  }

  render() {
    return (
      <div style={{ height: 300, padding: 20 }}>
        <div onClick={this.show1.bind(this, true)}>点击显示</div>
        <div onClick={this.show2.bind(this, true)}>多个按钮</div>
        <div onClick={this.show3.bind(this, true)}>简写</div>
      </div>
    );
  }
}
ReactDOM.render(<Simple />, document.getElementById('__react-content'));

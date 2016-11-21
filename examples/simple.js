/**
 * Created by dxc on 2016/11/18.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import alert from 'fs-alert';
class Simple extends Component {
    show1() {
        const me = this;
        alert('Alert', 'I have a Alert', [
            {
                text: "You don't have",
                onClick: (alert)=> {
                    alert.close();
                }
            },
            {
                text: 'you have',
                onClick: ()=> {
                    me.show1();
                }
            }
        ]);
    }
    show2() {
        const me = this;
        alert('Alert', 'I have a Alert', [
            {
                text: "1",
                onClick: (alert)=> {
                    alert.close();
                }
            },
            {
                text: "2",
                onClick: (alert)=> {
                    alert.close();
                }
            },  {
                text: "3",
                onClick: (alert)=> {
                    alert.close();
                }
            }
        ],{ratio:1});
    }

    render() {
        return (
            <div style={{height:300,padding:20}}>
                <div onClick={this.show1.bind(this,true)}>点击显示</div>
                <div onClick={this.show2.bind(this,true)}>多个按钮</div>
            </div>
        )
    }
}
ReactDOM.render(
    <Simple />,
    document.getElementById('__react-content')
);
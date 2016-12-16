/**
 * Created by dxc on 2016/11/21.
 */
import React, {Component, PropTypes} from 'react';
import Overlay from 'fs-overlay'
import {Block} from 'react-speed'
import './alert.less';
export default class Alert extends Component {
    static defaultProps = {
        afterClose: ()=> {

        },
        ratio: 1
    };
    state = {
        open: true
    };

    close() {
        this.setState({open: false});
        const {afterClose}=this.props;
        setTimeout(function () {
            afterClose();
        }, 350)
    }

    button() {
        const {button, ratio} =this.props;
        const me = this;
        if (button == null) {
            return <Block h={15*ratio}/>;
        } else {
            return <Block hf h={42*ratio} s={{borderTop:"1px solid #ddd"}}>
                {
                    button.map((item, i)=> {
                        const {
                            text, onClick=()=> {
                        }
                        }=item;
                        const style = {};
                        if (i != 0) {
                            style.borderLeft = "1px solid #ddd";
                        }
                        return <Block fc="#108ee9" fs={16*ratio} f="1" key={i} onClick={()=>{onClick(me)}
                        } j="c" a="c"
                                      style={style}
                        >{text}</Block>
                    })
                }
            </Block>
        }
    }

    render() {
        const style = {
            zIndex: 999,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            fontFamily: 'Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif'
            // transition: "0.3s ease-out",
            // backgroundColor: "rgba(0, 0, 0, 0.3)"
        };
        const {title, content, ratio} =this.props;
        let className = 'zoomOut';
        if (this.state.open) {
            className = 'zoomIn';
        }
        return (
            <Overlay open={this.state.open} onClose={()=>{}}>
                <Block style={style} j="c" a="c" className={className}>
                    <Block w={270*ratio} bc="#fff" s={{borderRadius:7*ratio}} pt={15*ratio}>
                        <Block j="c" fs={18*ratio} ml={15*ratio} mr={15*ratio} mb={15*ratio}>{title}</Block>
                        <Block j="c" ml={15*ratio} mr={15*ratio} mb={15*ratio} fs={14*ratio}>{content}</Block>
                        {this.button()}
                    </Block>
                </Block>
            </Overlay>
        )
    }
}
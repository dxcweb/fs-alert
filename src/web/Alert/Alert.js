/**
 * Created by dxc on 2016/11/21.
 */
import React, {Component, PropTypes} from 'react';
import Overlay from 'fs-overlay'
import Block from 'fs-flex'
import '../../../assets/alert.less';
export default class Alert extends Component {
    static defaultProps = {
        afterClose: ()=> {

        }
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

    onClickClose(onClick) {
        this.close();
        if (typeof onClick == "function") {
            onClick();
        }
    }

    button() {
        const {button} =this.props;
        if (button == null) {
            return <Block h={15}/>;
        } else {
            return <Block hf h={42} bdt s={{cursor:"pointer"}}>
                {
                    button.map((item, i)=> {
                        const {text, onClick}=item;
                        const style = {
                            cursor: "pointer"
                        };
                        let bdl = false;
                        if (i != 0) {
                            bdl = true;
                        }
                        return <Block fc="#108ee9" fs={16} f="1" key={i}
                                      onClick={this.onClickClose.bind(this,onClick)}
                                      j="c" a="c" bdl={bdl}
                        >{text}</Block>
                    })
                }
            </Block>
        }
    }

    render() {
        const style = {
            zIndex: 2000,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            fontFamily: 'Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif'
            // transition: "0.3s ease-out",
            // backgroundColor: "rgba(0, 0, 0, 0.3)"
        };
        const {title, content} =this.props;
        let className = 'zoomOut';
        if (this.state.open) {
            className = 'zoomIn';
        }
        return (
            <Overlay open={this.state.open} onClose={()=>{}}>
                <Block style={style} j="c" a="c" className={className}>
                    <Block w={270} bc="#fff" br={7} pt={15}>
                        <Block j="c" fs={18} ml={15} mr={15} mb={15}>{title}</Block>
                        <Block j="c" ml={15} mr={15} mb={15} fs={14}>{content}</Block>
                        {this.button()}
                    </Block>
                </Block>
            </Overlay>
        )
    }
}
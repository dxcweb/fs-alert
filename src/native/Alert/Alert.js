/**
 * Created by guowei on 17/2/27.
 */
import React, { Component } from 'react';
import {StyleSheet,Modal,Text,TouchableOpacity,Animated,Easing} from 'react-native';
import Overlay from 'fs-overlay'
import Block from 'fs-flex'
const AnBlock = Animated.createAnimatedComponent(Block);
export default class Alert extends Component {
    state = {
        anim: new Animated.Value(0.3),
        open: true
    };

    //渲染完成后调用一次，这个时候DOM结构已经渲染了。这个时候就可以初始化其他框架的设置了，如果利用jQuery绑定事件等等。
    componentDidMount() {
        Animated.timing(this.state.anim, {
            delay: 0,
            easing: Easing.inOut(Easing.ease),
            toValue: 1, // 目标值
            duration: 300 // 动画时间
        }).start();
    }

    //初始化渲染不会调用，在接收到新的props时，会调用这个方法。
    componentWillReceiveProps(props) {

        if (this.state.open == true && props.open == false) {

        }
    }

    onPress(onPress) {
        const {afterClose}=this.props;
        const {open}=this.state;
        if (open) {
            onPress();
            this.setState({open: false});
            setTimeout(()=> {
                Animated.timing(this.state.anim, {
                    delay: 0,
                    easing: Easing.inOut(Easing.ease),
                    toValue: 0, // 目标值
                    duration: 300 // 动画时间
                }).start(()=> {
                    afterClose();
                });
            }, 20)
        }
    }

    button() {
        const {button} =this.props;
        const me = this;
        if (button == null) {
            return <Block h={15}/>;
        } else {
            return <Block hf h={42} s={{borderTopWidth:1,borderTopColor:"#ddd"}}>
                {
                    button.map((item, i)=> {
                        const {text,onPress=()=> {
                        }}=item;
                        const style = {};
                        if (i != 0) {
                            style.borderLeftWidth = 1;
                            style.borderLeftColor = "#ddd";
                        }
                        return (
                            <Block
                                activeOpacity={1} el={TouchableOpacity} f={1} key={i}
                                j="c" a="c"
                                onPress={this.onPress.bind(this,onPress)}
                                style={style}
                            >
                                <Block el={Text} fc="#108ee9" fs={16}>{text}</Block>
                            </Block>);
                    })
                }
            </Block>
        }
    }

    render() {
        const {title, content} =this.props;
        const {anim,open}=this.state;
        const style = {
            borderRadius: 7,
            opacity: anim,
            transform: [{scale: anim}]
        };
        return <Overlay open={open}>
            <Block f={1} a="c" j="c">
                <AnBlock w={270} bc="#fff" style={style} pt={15}>
                    {title?<Block s={{textAlign:"center"}} el={Text} fs={18} ml={15} mr={15}
                                  mb={15}>{title}</Block>:
                        <Block h={15}/>
                    }
                    <Block s={{textAlign:"center"}} el={Text} ml={15} mr={15} mb={15} fs={14}>{content}</Block>
                    {this.button()}
                </AnBlock>
            </Block>
        </Overlay>
    }
}
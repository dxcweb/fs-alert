/**
 * Created by dxc on 2016/11/21.
 */
import React, { Component, PropTypes } from "react";
import Overlay from "fs-overlay";
import Block from "dxc-flex";
import "../../../assets/alert.less";
export default class Alert extends Component {
  static defaultProps = {
    afterClose: () => {}
  };
  state = {
    open: true
  };

  close() {
    this.setState({ open: false });
    const { afterClose } = this.props;
    setTimeout(function() {
      afterClose();
    }, 350);
  }

  onClickClose(onClick) {
    const { autoClose = true } = this.props;
    if (typeof onClick === "function") {
      if (autoClose) {
        this.close();
      }
      onClick(() => {
        this.close();
      });
    } else {
      this.close();
    }
  }

  button() {
    const { button } = this.props;
    if (button == null) {
      return <Block style={{ height: 15 }} />;
    } else {
      return (
        <Block
          horizontal="center"
          style={{ height: 42, borderTop: "1px solid #ddd", cursor: "pointer" }}
        >
          {button.map((item, i) => {
            const { text, onClick } = item;
            const style = {
              cursor: "pointer",
              borderLeft: 0,
              flex: 1,
              fontSize: 16,
              color: "#108ee9"
            };
            if (i != 0) {
              style.borderLeft = "1px solid #ddd";
            }
            return (
              <Block
                vertical="center"
                horizontal="center"
                style={style}
                key={i}
                onClick={this.onClickClose.bind(this, onClick)}
              >
                {text}
              </Block>
            );
          })}
        </Block>
      );
    }
  }

  render() {
    const style = {
      zIndex: 1000,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      fontFamily:
        "Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif"
      // transition: "0.3s ease-out",
      // backgroundColor: "rgba(0, 0, 0, 0.3)"
    };
    const { title, content } = this.props;
    let className = "zoomOut";
    if (this.state.open) {
      className = "zoomIn";
    }
    return (
      <Overlay open={this.state.open} onClose={() => {}}>
        <Block style={style} vertical="center" horizontal="center" className={className}>
          <Block
            layout="vertical"
            style={{
              width: 270,
              background: "#fff",
              borderRight: "1px solid #ddd",
              borderLeft: "1px solid #ddd",
              borderRadius: 7,
              paddingTop: 15
            }}
          >
            <Block horizontal="center" style={{ fontSize: 18, margin: "0 15px 15px 15px" }}>
              {title}
            </Block>
            <Block horizontal="center" style={{ fontSize: 14, margin: "0 15px 15px 15px" }}>
              {content}
            </Block>
            {this.button()}
          </Block>
        </Block>
      </Overlay>
    );
  }
}

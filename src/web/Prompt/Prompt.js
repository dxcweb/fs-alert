import React from "react";
import Alert from "../Alert/Alert";
import { Input } from "dxc-input";

export default class Prompt extends React.Component {
  state = {
    value: ""
  };
  onChange = value => {
    this.setState({ value });
  };
  renderInput() {
    const { value } = this.state;
    return <Input value={value} onChange={this.onChange} width={240} />;
  }
  render() {
    const { button, ...other } = this.props;
    const newButton = button.map(({ text, onClick }) => {
      const temp = { text };
      if (onClick) {
        temp.onClick = close => {
          const { value } = this.state;
          onClick(value, close);
        };
      }
      return temp;
    });
    return <Alert button={newButton} autoClose={false} content={this.renderInput()} {...other} />;
  }
}

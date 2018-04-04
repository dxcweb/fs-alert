import React, { Component, PropTypes } from "react";
import react_dom from "react-dom";
import Prompt from "./Prompt/Prompt";

function AlertClass(title, button, options) {
  if (button === undefined) {
    button = [{ text: "确认" }];
  }
  this.div = document.createElement("div");
  document.body.appendChild(this.div);
  const props = { title, button, ...options };
  const me = this;
  function destroy() {
    if (me.div != null) {
      react_dom.unmountComponentAtNode(me.div);
      me.div.parentNode.removeChild(me.div);
      me.div = null;
    }
  }
  react_dom.render(<Prompt {...props} afterClose={destroy} />, this.div);
}
export default function alert(title, button, options) {
  return new AlertClass(title, button, options);
}

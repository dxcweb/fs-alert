/**
 * Created by dxc on 2016/11/21.
 */
import React, {Component, PropTypes} from 'react';
import react_dom from 'react-dom';
import Alert from './Alert/Alert';
function AlertClass(title, content, button, options) {
    this.div = document.createElement('div');
    document.body.appendChild(this.div);
    const props = {title, content, button, ...options};
    const me = this;
    function destroy() {
        if (me.div != null) {
            react_dom.unmountComponentAtNode(me.div);
            me.div.parentNode.removeChild(me.div);
            me.div = null
        }
    }
    react_dom.render(<Alert {...props} afterClose={destroy}/>, this.div);
}
export default function alert(title, content, button, options) {
    return new AlertClass(title, content, button, options)
}

/**
 * Created by guowei on 17/2/27.
 */
import React, { Component } from 'react';
import addComponent from 'fs-addcomponent'
import Alert from './Alert/Alert'


function AlertClass(title, content, button, options) {
    let key = null;
    const props = {title, content, button, ...options};

    function destroy() {
        addComponent.remove(key);
    }

    key = addComponent.add(<Alert {...props} afterClose={destroy}/>);
}
export default function alert(title, content, button, options) {
    return new AlertClass(title, content, button, options)
}
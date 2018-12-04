import React, { Component } from 'react';
import { render } from 'react-dom';

const unusedKeys = new Set();
const elementMap = {};
function getElementFragment(key) {

    let frag = elementMap[key];
    if (!frag) {

        frag = document.createElement('div');
        elementMap[key] = frag;

    }

    unusedKeys.delete(key);
    return frag;

}

function markKeyUnused(key) {

    unusedKeys.add(key);

}

function cleanCache() {

    for (const key in unusedKeys) {

        delete elementMap[key];

    }

}

export default class GlobalKeyComponent extends Component {

    static cleanCache() {

        cleanCache();

    }

    /* Life Cycle Functions */
    render() {

        const variant = this.props.variant || 'div';
        const globalKey = this.props.globalKey || null;

        if (!globalKey) {
            console.warn('GlobalKeyComponent: A globalKey must be provided.');
        }

        return (<variant ref = { el => this._container = el }></variant>);

    }

    componentDidMount() {

        this._fragment = getElementFragment(this.props.globalKey);
        this._container.appendChild(this._fragment);

        this.componentDidUpdate();
    }

    componentDidUpdate() {


    }

    componentWillUnmount() {

        markKeyUnused(this.props.globalKey);

    }

    /* Interface */
    renderContents() { }

}

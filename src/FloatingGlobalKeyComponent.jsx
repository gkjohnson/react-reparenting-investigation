import React from 'react';
import { render } from 'react-dom';
import GlobalKeyComponent from './GlobalKeyComponent.jsx';

const container = document.createElement('div');
container.style.position = 'absolute';
container.style.top = 0;
container.style.left = 0;
container.style.width = 0;
container.style.height = 0;
container.style.padding = 0;
container.style.margin = 0;
container.style.border = 'none';
container.style.outline = 'none';

document.body.appendChild(container);

export default class FloatingGlobalKeyComponent extends GlobalKeyComponent {

    componentDidMount() {

        this._container.style.padding = 0;
        this._container.style.margin = 0;
        this._container.style.border = 'none';
        this._container.style.outline = 'none';
        this._container.visibility = 'hidden';

        this._fragment = GlobalKeyComponent.getElementFragment(this.props.globalKey);
        if (!this._fragment.parentNode) container.appendChild(this._fragment);

        this.componentDidUpdate();

    }

    componentDidUpdate() {

        const _do = () => {

            const cont = this._container;
            const frag = this._fragment;
            frag.style.width = `${ cont.offsetWidth }px`;
            frag.style.transform = `translate(${ Math.floor(cont.offsetLeft) }px, ${ Math.floor(cont.offsetTop) }px)`;
            cont.style.height = `${ frag.offsetHeight }px`;

        };

        if (!this._fragment.childElementCount) render(this.renderContents(), this._fragment, _do);
        else _do();

    }

}

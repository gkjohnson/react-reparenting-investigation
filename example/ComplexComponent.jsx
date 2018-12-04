import React, { Component, Fragment } from 'react';
import GlobalKeyComponent from '../src/GlobalKeyComponent.jsx';
import FloatingGlobalKeyComponent from '../src/FloatingGlobalKeyComponent.jsx';

function eventCallback(e) {
    console.log(e);
}

function renderStuff(props) {

    const {
        count,
        depth,
    } = props;

    const listItems = (new Array(count * 20)).fill().map((e, i) => (
        <li key={i}>
            <label>
                <span>{ `${ i } : ` }</span>
                <input
                    onClick={eventCallback}
                    onInput={eventCallback}
                    onMouseEnter={eventCallback}
                    onMouseLeave={eventCallback}
                ></input>
            </label>
        </li>
    ));

    const nestedComplexComponents = (new Array(depth)).fill().map((e, i) => (
        <li key={ i }>
            <NativeComplexComponent count={ count } depth={ depth - 1 }></NativeComplexComponent>
        </li>
    ));

    return (<div style={ { border: '1px solid red', height: '250px', overflow: 'hidden' } }>
        <div>HELLO</div>
        <ul style={ { maxHeight: '100px', overflow: 'auto', willChange: 'scroll-position' } }>
            { listItems }
        </ul>
        <ul style={ { maxHeight: '500px', overflow: 'auto', willChange: 'scroll-position' } }>
            { nestedComplexComponents }
        </ul>
    </div>);

}

export class NativeComplexComponent extends Component {

    render() {

        return renderStuff(this.props);

    }

}

export class GlobalKeyComplexComponent extends GlobalKeyComponent {

    renderContents() {

        return renderStuff(this.props);

    }

}

export class FloatingGlobalKeyComplexComponent extends FloatingGlobalKeyComponent {

    renderContents() {

        return renderStuff(this.props);

    }

}

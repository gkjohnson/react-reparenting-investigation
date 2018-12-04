import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { NativeComplexComponent, GlobalKeyComplexComponent, FloatingGlobalKeyComplexComponent } from './ComplexComponent.jsx';

const DEPTH = 3;
const COUNT = 10;

class RenderExample extends Component {

    constructor() {
        super(...arguments);
        this.state = { row: 0 };
    }

    render(props) {

        const {
            title,
            type,
        } = this.props;
        const { row } = this.state;

        let child = null;
        switch (type) {

            case 1:
                child = <FloatingGlobalKeyComplexComponent globalKey={ 'my-floating-key' } depth={ DEPTH } count={ COUNT }></FloatingGlobalKeyComplexComponent>;
                break;
            case 2:
                child = <GlobalKeyComplexComponent globalKey={ 'my-key' } depth={ DEPTH } count={ COUNT }></GlobalKeyComplexComponent>;
                break;
            case 3:
                child = <NativeComplexComponent depth={ DEPTH } count={ COUNT }></NativeComplexComponent>;
                break;

        }

        return (
            <div>
                <h2>{ title }</h2>
                <div>
                    <button onClick={ e => this.setState({ row: (row + 1) % 3 }) }>Swap Column</button>
                </div>
                <div style={ { width: '100%', height: '250px' } }>
                    <div style={ { width: '50%', display: 'inline-block' } }>
                        { row === 0 ? child : null }
                    </div>
                    <div style={ { width: '50%', display: 'inline-block' } }>
                        { row === 1 ? child : null }
                    </div>
                </div>
                <div style={ { width: '100%', display: 'inline-block', height: '250px' } }>
                    { row === 2 ? child : null }
                </div>
            </div>
        );

    }

}

class App extends Component {

    render() {

        const row1El = (
            <RenderExample title='Floating Global Key Component' type={ 1 }></RenderExample>
        );

        const row2El = (
            <RenderExample title='Global Key Component' type={ 2 }></RenderExample>
        );

        const row3El = (
            <RenderExample title='Native Component' type={ 3 }></RenderExample>
        );

        return (<Fragment>
            { row1El }
            { row2El }
            { row3El }
        </Fragment>);
    }

}

const container = document.createElement('div');
document.body.appendChild(container);
render(<App/>, container);

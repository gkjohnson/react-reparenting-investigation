import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { NativeComplexComponent, GlobalKeyComplexComponent } from './ComplexComponent.jsx';

const DEPTH = 3;
const COUNT = 10;

class App extends Component {

    render() {

        const row1 = this.state && this.state.row1 || false;
        const row2 = this.state && this.state.row2 || false;

        const row1El = (
            <div>
                <h2>Global Key Component</h2>
                <div>
                    <button onClick={ e => this.setState({ row1: !row1 }) }>Swap Column</button>
                </div>
                <div style={ { width: '100%', overflow: 'hidden', height: '500px' } }>
                    <div style={ { width: '50%', display: 'inline-block' } }>
                        {
                            !row1 ?
                                (<GlobalKeyComplexComponent globalKey={ 'my-key' } depth={ DEPTH } count={ COUNT }></GlobalKeyComplexComponent>) :
                                null
                        }
                    </div>
                    <div style={ { width: '50%', display: 'inline-block' } }>
                        {
                            row1 ?
                                (<GlobalKeyComplexComponent globalKey={ 'my-key' } depth={ DEPTH } count={ COUNT }></GlobalKeyComplexComponent>) :
                                null
                        }
                    </div>
                </div>
            </div>
        );

        const row2El = (
            <div>
                <h2>Native Component</h2>
                <div>
                    <button onClick={ e => this.setState({ row2: !row2 }) }>Swap Column</button>
                </div>
                <div style={ { width: '100%', overflow: 'hidden', height: '500px' } }>
                    <div style={ { width: '50%', display: 'inline-block' } }>
                        {
                            !row2 ?
                                (<NativeComplexComponent depth={ DEPTH } count={ COUNT }></NativeComplexComponent>) :
                                null
                        }
                    </div>
                    <div style={ { width: '50%', display: 'inline-block' } }>
                        {
                            row2 ?
                                (<NativeComplexComponent depth={ DEPTH } count={ COUNT }></NativeComplexComponent>) :
                                null
                        }
                    </div>
                </div>
            </div>
        );

        return (<Fragment>{ row1El }{ row2El }</Fragment>);
    }

}

render(<App/>, document.body);

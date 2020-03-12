import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { onAdd, onMinus, onMultiples, onDivide } from '@action/app'

@connect(store => store)
class App extends React.Component {
    _onAdd = () => {
        this.props.dispatch(onAdd())
    }
    _onMinus = () => {
        this.props.dispatch(onMinus())
    }
    _onMultiples = () => {
        this.props.dispatch(onMultiples())
    }
    _onDivide = () => {
        this.props.dispatch(onDivide())
    }
    render() {
        let { num } = this.props.app
        return (
            <div className="App">
                <div>
                    <button onClick={this._onAdd}>+</button>
                </div>
                <div>
                    <button onClick={this._onMinus}>-</button>
                </div>
                <div>
                    <button onClick={this._onMultiples}>*</button>
                </div>
                <div>
                    <button onClick={this._onDivide}>/</button>
                </div>
                {num}
            </div>
        );
    }
}

export default App;

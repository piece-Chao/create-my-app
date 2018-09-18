import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import actions from './store/action'

class App extends Component {

    componentDidMount() {
        console.log(this.props)
        console.log(actions)
    }

    render() {
        const { count, addNum, reduceNum } = this.props
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    <span>{count.count}</span>
                    <button onClick={addNum}> + </button>
                    <button onClick={reduceNum}> - </button>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNum: () => dispatch(actions.CountAction.add()),
        reduceNum: () => dispatch(actions.CountAction.reduce())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import ReactDOM from 'react-dom'
import './css/style.css';
import nature from './img/nature-wallpapers.jpg';
class App extends React.Component {
    render() {
        return (
            <>
                <img src={nature} alt="" />
                <h1>Test</h1>
                <h1>Test</h1>
            </>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
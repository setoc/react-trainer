import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <div className='header'>
                <img src='logo.png' alt='logo' />
                <span>Hello {this.props.name}</span>
                <button className="square" onClick={() => this.setState({ value: 'X' })}>
                    {this.state.value}
                </button>
            </div>
        );
    }
}

import React, { Component } from 'react'
import '../index.css';
import { connect} from 'react-redux'
import {
    Link
  } from 'react-router-dom';

class About extends Component {

    render() {
        return (
            <div>
                <p>{this.props.count}</p>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
                <p>About</p>
                <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { count: state };
    };
    const mapDispatchToProps = dispatch => {
    return { increment: () => dispatch({type: 'INCREMENT'}), decrement: () => dispatch({type: 'DECREMENT'})
    }};
    export default connect(mapStateToProps, mapDispatchToProps)(About);
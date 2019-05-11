import React, { Component } from 'react';
import { connect} from 'react-redux'
import {
  Link
} from 'react-router-dom';
import Router from './Router'

class App extends Component {
render() {
return (
  
<div>
<p>{this.props.count}</p>
<button onClick={this.props.increment}>+</button>
<button onClick={this.props.decrement}>-</button>

<ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        
</div>

);
}
}
const mapStateToProps = state => {
return { count: state.count };
};
const mapDispatchToProps = dispatch => {
return { increment: () => dispatch({type: 'INCREMENT'}), decrement: () => dispatch({type: 'DECREMENT'})
}};
export default connect(mapStateToProps, mapDispatchToProps)(App);
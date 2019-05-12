import React, { Component } from 'react'
import '../index.css';
import { connect} from 'react-redux'
import {
    Link
  } from 'react-router-dom';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Header from './components/Header';

class About extends Component {

    render() {
        const {newsletterStatus} = this.props.email
        return (
            <div>
                <Header/>
                <p>{this.props.count}</p>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
                <p>About</p>
                {newsletterStatus ? <Newsletter/> : `Jesteś zapisany w newsletterze, Twój email to ${this.props.email}`}
                <Footer/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { count: state.count, email: state.email };
  };
  const mapDispatchToProps = dispatch => {
    return {
      increment: () => dispatch({ type: 'INCREMENT' }), decrement: () => dispatch({ type: 'DECREMENT' }), subscribeNewsletter: (param) => dispatch({type: 'ADD_EMAIL', email:param})
    }
  };
    export default connect(mapStateToProps, mapDispatchToProps)(About);
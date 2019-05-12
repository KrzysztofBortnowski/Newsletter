import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom';
import Router from './Router'
import Header from './pages/components/Header'
import Footer from './pages/components/Footer'
import Newsletter from './pages/components/Newsletter';


class App extends Component {

  render() {
    const {newsletterStatus} = this.props.email
    return (

      <div>
        <Header />
        <section>
          <p>{this.props.count}</p>
          <button onClick={this.props.increment}>+</button>
          <button onClick={this.props.decrement}>-</button>
        </section>
        <section>
          <div>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.</div>
        </section>
        {newsletterStatus ? <Newsletter/> : `Jesteś zapisany w newsletterze, Twój email to ${this.props.email}`}

        
        <Footer />
      </div>

    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
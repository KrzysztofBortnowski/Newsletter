import React, { Component } from 'react';
import { connect } from 'react-redux'

class Newsletter extends Component {
   constructor(props) {
     super(props);
     this.state = {email: ''};

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   componentDidMount() {
       console.log('mount', this.props);
   }

   componentDidUpdate() {
       console.log('update', this.props);
   }

   handleChange(event) {
     this.setState({email: event.target.value});
   }

   handleSubmit(event) {
    alert('Zostałeś zapisany do newslettera');
    event.preventDefault();
    console.log(this.state)
    this.props.subscribeNewsletter(this.state.email)
   }

   render() {
    
     return (
         <div>
             
       <form onSubmit={this.handleSubmit}>
         <label>
           Email:
           <input type="email" placeholder="write email" value={this.state.value} onChange={this.handleChange} />
         </label>
         <input type="submit" value="Submit" />
       </form>
       
       </div>
     );
   }
 }

   const mapStateToProps = state => {
       return { email: state.email };
   };

   const mapDispatchToProps = dispatch => {
       return { subscribeNewsletter: (param) => dispatch({
           type: 'ADD_EMAIL',
           email: param
       }) };
   };

   export default connect(mapStateToProps, mapDispatchToProps)(Newsletter);
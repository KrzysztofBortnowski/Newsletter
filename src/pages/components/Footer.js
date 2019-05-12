import React, { Component } from 'react'

import { connect } from 'react-redux'
import {
    Link
} from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <div>
                <div>Footer</div>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </div>
        )
    }
}

export default Footer;
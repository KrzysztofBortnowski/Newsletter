import React, { Component } from 'react'

import { connect } from 'react-redux'
import {
    Link
} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div>
                <div>Header</div>
                <div>Menu</div>

            </div>
        )
    }
}

export default Header;
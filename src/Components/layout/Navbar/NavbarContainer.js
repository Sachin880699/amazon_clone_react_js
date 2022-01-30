import React, { Component } from 'react';
import Navbarview from './NavbarView';

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    render() {
        return (
            <div>
               <Navbarview/> 
            </div>
        );
    }
}

export default Navbar;

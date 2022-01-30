import React, { Component } from 'react';
import Loginview from './LoginView';

class Logincontainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        }
    }
    handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value
        console.log(name)
        console.log(value)
        
        this.setState({[name]:value})

       
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <Loginview handleChange={this.handleChange}
                 {...this.satte} 
                 handleSubmit = {this.handleSubmit}
                 />

                
                
            </div>
        );
    }
}

export default Logincontainer;

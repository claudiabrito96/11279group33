import React from 'react';

class LogIn extends React.Component{
    
    state={
        email: ' ',
        pwd: ' '
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        //e.preventDefault()
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                    <input type='email' name='email' placeholder='email' required onChange={this.handleChange}/>
                    </div>
                    <div>
                    <input type='password' name='pwd' placeholder='password' required onChange={this.handleChange}/>
                    </div>
                    <button onSubmit={this.handleSubmit}>Log In</button>
                </form> 
            </div>
        )
    }
}

export default LogIn;
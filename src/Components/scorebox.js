import React, { Component } from 'react'

class Scorebox extends Component {
    onChange= e => {
        window.location.reload()
    }
   
    render() {
       
        const{score} = this.props;
        
        
        return (

            <div className = "col-md-5 mb-0">
                <div><h2 style={{color:"red"}}> Congratulations! You finished the test.</h2></div>
                <p style = {{fontSize: 30}}>Your score is <span class="badge badge-light" style = {{fontSize:30}}>{score}</span> </p>
                
                {/* window.location.reload() */}
                <button type="button" onClick = {this.onChange} class="btn btn-primary"><h5 style= {{textAlign:"center"}}>Wanna try Again?</h5></button>
            </div>
            )
    }
}
export default Scorebox;
import React, { Component } from 'react'

class Header extends Component {
    
displayFirstQuestion = e => {
if (this.props.questions[0] = Object){
  this.props.displayQuiz()
}

}

    render() {
        return (
            <div>
                <h1 className="alert alert-primary" role="alert" > Quiz Page  </h1>
                <hr style = {{border:" 5px solid green", borderRadius: "3px;"}}  />
                <h2>Ready for an Compition</h2>
                <button type="button" onClick = {this.displayFirstQuestion} class="btn btn-primary">Wanna Start?</button>
            </div>
        )
    }
}

export default Header;
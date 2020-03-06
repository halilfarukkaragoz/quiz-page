import React, { Component } from "react";

class Question extends Component {
 
 

  onChange = e => {
   
    const { displayQuestion,setScore, score,questions,numberOfQuestions,changingQuestion,displayScorebox,answers }= this.props
    const { value } = e.target;
  
     console.log(numberOfQuestions)
     console.log(questions[numberOfQuestions].correct_answer)
   
   
  if(numberOfQuestions<9){
    
    changingQuestion(numberOfQuestions+1)
  }
  else displayScorebox()
  
  if (value == questions[numberOfQuestions].correct_answer){
    setScore(score+1)
  }
  }
   
  
    
  
 




  render() {
  

   const{displayQuestion,answers}=this.props;
   


    return (
      <div>
        <br/>
        <br/>
      <div className="col-md-8 mb-6"  style ={{color : "blue",}} >
      <div className="card" style = {{color :"blue"}} >
        <div className="card-header d-flex justify-content-between" style = {{backgroundColor :"yellow"}} >
        {/* <span class="badge badge-pill badge-warning">Wrong</span> */}
          <h4 className="d-inline"> {displayQuestion.category} </h4>
          <p className="card-text">{displayQuestion.difficulty} </p>
        </div>
      </div>
     
        <div className="card-body" >
          <p className="card-text">{displayQuestion.question} </p>
         <ul>
      <li><button type="button" onClick = {this.onChange} value = {answers[0]} class="btn btn-primary">{answers[0]}</button></li>
      <li><button type="button" onClick = {this.onChange} value = {answers[1]} class="btn btn-primary">{answers[1]}</button></li>
      <li><button type="button" onClick = {this.onChange} value = {answers[2]} class="btn btn-primary">{answers[2]}</button></li>
      <li><button type="button" onClick = {this.onChange} value = {answers[3]} class="btn btn-primary">{answers[3]}</button></li>
       
         </ul>
          <br />
        </div>
      
    </div>
    
    </div>
    );
  }
}

export default Question;

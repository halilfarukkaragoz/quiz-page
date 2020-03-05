import React, { Component } from "react";
import Header from "./Components/Header";
import "./App.css";
import Question from "./Components/Question";
import Scorebox from "./Components/scorebox";

class App extends Component {
  state = {
    isVisible:true,
    score: 0,
    questions: [],
    displayQuestion : null,
    wiewHeader : true,
    wiewQuestions : false,
    wiewScorebox : false,
    numberOfQuestions : 1,
    answers : []
  };

componentDidMount = () => {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then(response => response.json())
      .then(data => {
        this.setState({
          questions: data.results
        });
      });
  };

  setScore = score => {
  
    this.setState({
      score

    })
   
  };

displayQuiz = wiewHeader => {
  const{wiewQuestions,questions,displayQuestion,numberOfQuestions,answers}=this.state;
 
  if(questions[1] !=undefined ){this.setState({
    wiewHeader : false,
    wiewQuestions : true,
    displayQuestion : Object.assign(questions[1])
  
    
    
  })
}
if(questions[1] !=undefined )
this.settingAnswers(1)
 
}
settingAnswers (a) {
  const{answers,displayQuestion,questions,} = this.state;
  let temp = questions[a].incorrect_answers;
  temp.push(questions[a].correct_answer) 
  this.shuffle(temp)
  this.setState({
    answers : temp
  })

}
shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
      let index = Math.floor(Math.random() * counter);

      
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }

  return array;
}


changingQuestion = numberOfQuestions => {
  const{questions,answers,displayQuestion}=this.state;
this.setState({
    numberOfQuestions
    
  })
  this.assingingDisplayQuestions(numberOfQuestions)
  this.settingAnswers(numberOfQuestions)
console.log(questions[numberOfQuestions].correct_answer)

}
displayScorebox = wiewScorebox =>{
  this.setState({
    wiewQuestions:false,
    wiewScorebox:true
  })
}
assingingDisplayQuestions(a){
  this.setState({
    displayQuestion : Object.assign(this.state.questions[a])
   
  })
}

   render() {
   
    const { answers,questions, score ,wiewHeader,wiewQuestions,displayQuestion,wiewScorebox } = this.state;
    
    return (
      <div>
      {wiewHeader &&  
      <Header wiewHeader = {wiewHeader} displayQuiz = {this.displayQuiz} questions = {questions} />
    }
    { wiewQuestions &&
    <Question answers = {answers} displayScorebox = {this.displayScorebox} setScore = {this.setScore} score ={score} numberOfQuestions= {this.state.numberOfQuestions} displayQuestion = {displayQuestion} questions = {questions} changingQuestion ={this.changingQuestion} />
  }  
  { wiewScorebox &&  
  <Scorebox score = {score} />}
      </div>
    );
  }
}
export default App;

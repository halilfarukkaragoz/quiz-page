import React, { Component } from 'react'
import User from "./Question"

class Users extends Component {



    render() {
        const { questions, setCurrent, setScore, score, current } = this.props;
        console.log(score)
        return (
            <div>
                {
                    questions.map(question => {

                        return (

                            <User

                                question={question.question}
                                category={question.category}
                                difficulty={question.difficulty}
                                answer1={question.answer1}
                                answer2={question.answer2}
                                answer3={question.answer3}
                                answer4={question.answer4}
                                result={question.result}
                                score={score}
                                current={question.current}
                                setScore={this.props.setScore}
                                setCurrent={this.props.setCurrent}
                            />


                        )
                    })
                }

            </div>
        )
    }
}

export default Users; 
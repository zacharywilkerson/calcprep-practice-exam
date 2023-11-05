import React from "react";
import { useEffect, useState, useRef } from "react";

import QuestionList from "../data/questions.json";
import Question from "./Question.js";
import ExamResults from "./ExamResults.js";

function ExamScreen({retry,total}) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.length));
    const isQuestionEnd = currentQuestionIndex === QuestionList.length;

    function calculateResult(){
        let correct = 0;
        QuestionList.forEach((question,index)=>{
            if(question.answer == markedAnswers[index]){
                correct++;
            }
        });
        // let percentage = Math.ceil((correct/QuestionList.length)*100); // why can't I do this in the return?
        return {
            correct: correct,
            total: QuestionList.length,
            percentage: Math.ceil((correct/QuestionList.length)*100) // why doesn't using total work here
        };
    }

    // const timer = useRef(null);
    // const [seconds, setSeconds] = useState(0);
    // const [minutes, setMinutes] = useState(60);

    // useEffect(() => {
    //     timer = setInterval(() => {
    //         if (seconds===0) {
    //             setMinutes(minutes-1);
    //             setSeconds(59);
    //         } else {
    //             setSeconds(seconds-1)
    //         }
    //     },1000)
    //     return () => clearInterval(timer); 
    // })

    return (
        <div className="exam-screen">
            {
                isQuestionEnd ? (
                    <ExamResults 
                        result = {calculateResult()}
                        retry = {retry}
                    />
                ) : (
                    <Question 
                        question={QuestionList[currentQuestionIndex]}
                        totalQuestions={QuestionList.length}
                        currentQuestion={currentQuestionIndex+1}
                        nextQuestion={(option)=>{
                            setCurrentQuestionIndex(option)
                        }}
                        setAnswer={(index)=>{
                            setMarkedAnswers((arr)=>{
                                let newArr = [...arr];
                                newArr[currentQuestionIndex] = index;
                                return newArr;
                            });
                            // setCurrentQuestionIndex(currentQuestionIndex+1);
                        }}
                        selectedAnswers={markedAnswers}
                        // currentTime={[minutes,seconds]}
                    />
                )
            }
        </div>
    );
}

export default ExamScreen;
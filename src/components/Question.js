import React from "react";
import { useState, useEffect, useRef} from "react";
import {flushSync} from 'react-dom';
// import 'katex/dist/katex.min.css';
// import 'katex/dist/katex.css';
var Latex = require('react-latex');

function Question({question,totalQuestions,currentQuestion,nextQuestion,setAnswer,selectedAnswers}){
    const [selectedOption, setSelectedOption] = useState(null);
    const timer = useRef(null);
    const progressBar = useRef(null);

    let answerList = ["(A)","(B)","(C)","(D)","(E)"];

    function gotoNextQuestion(index){
        if(timer.current){
            clearTimeout(timer.current);
        }
        flushSync(()=>{
            setAnswer(selectedOption);
            nextQuestion(currentQuestion);
            setSelectedOption(selectedAnswers[currentQuestion])
        });
        // console.log('selected answers'+selectedAnswers)
        // setSelectedOption(selectedAnswers[index]);
        // setSelectedOption(null);
    }

    function gotoPreviousQuestion(index){
        if(timer.current){
            clearTimeout(timer.current);
        }
        flushSync(()=>{
            setAnswer(selectedOption);
            nextQuestion(currentQuestion-2);
            setSelectedOption(selectedAnswers[currentQuestion-2])
        });
        // setSelectedOption(null);
    }

    useEffect(()=>{
        progressBar.current.classList.remove("active");
        setTimeout(()=>{
            progressBar.current.classList.add("active");
        },0);
        // setSelectedOption(selectedAnswers[currentQuestion])
        // timer.current = setTimeout(gotoNextQuestion,10*1000); // 10 seconds
        // return gotoNextQuestion;
    },[question]);

    // useEffect(()=>{
    //     setSelectedOption(selectedAnswers[currentQuestion])
    // },[currentQuestion,selectedAnswers]);

    return (
        <div className="question">
            <div className="progress-bar" ref={progressBar}></div>
            <div className="question-count">
                <b> {currentQuestion} </b>
                of
                <b> {totalQuestions} </b>
            </div>
            <div className="main">
                <div className="title">
                    <span>Question:</span>
                    <p className="latexQuestion"><Latex displayMode={question.display}>{question.question}</Latex></p>
                </div>
                <div className="options">
                    {
                        question.choices.map((choice,index)=>{
                            return (
                                <div className={index === selectedOption ? "option active" : "option"}
                                key={index}
                                onClick={()=>setSelectedOption(index)}
                                >
                                    <span>{answerList[index]}</span>
                                    <span><Latex>{choice}</Latex></span>
                                    {/* {answerList[index]} {choice} */}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="control">
                <button className={currentQuestion == 1 ? "disabled" : "enabled"} disabled={currentQuestion == 1 ? true : false} onClick={gotoPreviousQuestion}>
                    <span class="material-symbols-outlined">chevron_left</span>
                    Previous
                    </button>
                {
                currentQuestion == totalQuestions ? (
                    <button className="submit-exam" onClick={gotoNextQuestion}>
                        Submit
                        <span class="material-symbols-outlined">check</span>
                        </button>
                ) : (
                    <button onClick={gotoNextQuestion}>
                        Next
                        {/* <span class="material-symbols-outlined">arrow_forward_ios</span> */}
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                )
                }
            </div>
        </div>
    );
}

export default Question;
import React from "react";

function StartScreen({start}) {
    return (
        <div className="start-screen">
            <h2>Calculus BC</h2>
            <h3>SECTION I, Part A</h3>
            <h4>Time -- 55 minutes</h4>
            <h4>Number of Questions -- 30</h4>
            <p>A CALCULATOR MAY NOT BE USED ON THIS PART OF THE EXAM.</p>
            <div>
                <span>
                        <p><strong>Directions: </strong></p>
                        <p>Solve each of the following problems. After examining the form of the choices, decide which is the best of the choices given and selected the corresponding answer choice. Do not spend too much time on any one problem.</p>
                </span>
                <span>
                        <p><strong>On this exam: </strong></p>
                        <p>Solve each of the following problems. After examining the form of the choices, decide which is the best of the choices given and selected the corresponding answer choice. Do not spend too much time on any one problem.</p>
                </span>
            </div>
            
            <button onClick={start}>Start</button>
        </div>
    );
}

export default StartScreen;
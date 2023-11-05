import React from "react";

function ExamResults({result,retry}){
    return (
        <div className="result-screen">
            <h2>Result: {result.percentage}%</h2>
            <p>Selected {result.correct} correct out of {result.total}.</p>
            <button onClick={retry}>Retry</button>
        </div>
    );
}

export default ExamResults;
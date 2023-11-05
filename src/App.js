// import logo from './logo.svg';
import 'katex/dist/katex.css';
// import 'katex/dist/katex.min.css';
import './App.css';

import ExamScreen from "./components/ExamScreen";
import StartScreen from "./components/StartScreen";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';

import React from "react";
import { useState } from 'react';

function App() {
  const [isExamStarted, setIsExamStarted] = useState(false);

  return (
    <div className='app-container'>
        <NavBar/>
          <div className="exam-container">
            {
              isExamStarted ? (
                <ExamScreen retry={()=>setIsExamStarted(false)}/>
              ) : (
                <StartScreen start={()=>setIsExamStarted(true)}/>
              )
            }
          </div>
        <Footer/>
    </div>
  );
}

export default App;

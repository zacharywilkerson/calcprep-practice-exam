(this["webpackJsonpap-exam"]=this["webpackJsonpap-exam"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('[{"question":"What is the derivative of $f(x)=\\\\cos(x^2+e^x)$?","choices":["$f(x)=x$","$f(x)=x^2$","$f(x)=x^3$","$f(x)=x^4$"],"answer":"0","display":false},{"question":"$\\\\int_2^5 \\\\frac{\\\\sqrt{9-4x^2}}{x}dx =$","choices":["$21$","$6$","$x$","$\\\\pi$","$\\\\mu$"],"answer":"0","display":true},{"question":"Q3","choices":["No options"],"answer":"0","display":false}]')},17:function(e,t,n){},19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(7),r=n.n(c),s=(n(17),n(2)),o=(n(18),n(19),n(8)),i=n(1),u=n(4),m=n(20);var E=function(e){var t=e.question,n=e.totalQuestions,c=e.currentQuestion,r=e.nextQuestion,o=e.setAnswer,i=e.selectedAnswers,E=Object(a.useState)(null),f=Object(s.a)(E,2),d=f[0],h=f[1],p=Object(a.useRef)(null),v=Object(a.useRef)(null),b=["(A)","(B)","(C)","(D)","(E)"];function g(e){p.current&&clearTimeout(p.current),Object(u.flushSync)((function(){o(d),r(c),h(i[c])}))}return Object(a.useEffect)((function(){v.current.classList.remove("active"),setTimeout((function(){v.current.classList.add("active")}),0)}),[t]),l.a.createElement("div",{className:"question"},l.a.createElement("div",{className:"progress-bar",ref:v}),l.a.createElement("div",{className:"question-count"},l.a.createElement("b",null," ",c," "),"of",l.a.createElement("b",null," ",n," ")),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,"Question:"),l.a.createElement("p",{className:"latexQuestion"},l.a.createElement(m,{displayMode:t.display},t.question))),l.a.createElement("div",{className:"options"},t.choices.map((function(e,t){return l.a.createElement("div",{className:t===d?"option active":"option",key:t,onClick:function(){return h(t)}},l.a.createElement("span",null,b[t]),l.a.createElement("span",null,l.a.createElement(m,null,e)))})))),l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:1==c?"disabled":"enabled",disabled:1==c,onClick:function(e){p.current&&clearTimeout(p.current),Object(u.flushSync)((function(){o(d),r(c-2),h(i[c-2])}))}},l.a.createElement("span",{class:"material-symbols-outlined"},"chevron_left"),"Previous"),c==n?l.a.createElement("button",{className:"submit-exam",onClick:g},"Submit",l.a.createElement("span",{class:"material-symbols-outlined"},"check")):l.a.createElement("button",{onClick:g},"Next",l.a.createElement("span",{class:"material-symbols-outlined"},"chevron_right"))))};var f=function(e){var t=e.result,n=e.retry;return l.a.createElement("div",{className:"result-screen"},l.a.createElement("h2",null,"Result: ",t.percentage,"%"),l.a.createElement("p",null,"Selected ",t.correct," correct out of ",t.total,"."),l.a.createElement("button",{onClick:n},"Retry"))};var d=function(e){var t=e.retry,n=(e.total,Object(a.useState)(0)),c=Object(s.a)(n,2),r=c[0],u=c[1],m=Object(a.useState)(new Array(i.length)),d=Object(s.a)(m,2),h=d[0],p=d[1],v=r===i.length;return l.a.createElement("div",{className:"exam-screen"},v?l.a.createElement(f,{result:function(){var e=0;return i.forEach((function(t,n){t.answer==h[n]&&e++})),{correct:e,total:i.length,percentage:Math.ceil(e/i.length*100)}}(),retry:t}):l.a.createElement(E,{question:i[r],totalQuestions:i.length,currentQuestion:r+1,nextQuestion:function(e){u(e)},setAnswer:function(e){p((function(t){var n=Object(o.a)(t);return n[r]=e,n}))},selectedAnswers:h}))};var h=function(e){var t=e.start;return l.a.createElement("div",{className:"start-screen"},l.a.createElement("h2",null,"Calculus BC"),l.a.createElement("h3",null,"SECTION I, Part A"),l.a.createElement("h4",null,"Time -- 55 minutes"),l.a.createElement("h4",null,"Number of Questions -- 30"),l.a.createElement("p",null,"A CALCULATOR MAY NOT BE USED ON THIS PART OF THE EXAM."),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("p",null,l.a.createElement("strong",null,"Directions: ")),l.a.createElement("p",null,"Solve each of the following problems. After examining the form of the choices, decide which is the best of the choices given and selected the corresponding answer choice. Do not spend too much time on any one problem.")),l.a.createElement("span",null,l.a.createElement("p",null,l.a.createElement("strong",null,"On this exam: ")),l.a.createElement("p",null,"Solve each of the following problems. After examining the form of the choices, decide which is the best of the choices given and selected the corresponding answer choice. Do not spend too much time on any one problem."))),l.a.createElement("button",{onClick:t},"Start"))};var p=function(){return l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"logo"},"AP Calculus BC - Practice Exam"),l.a.createElement("p",{className:"disclaimer"},"AP\xae is a trademark registered by the College Board, which is not affiliated with, and does not endorse, this website."))};var v=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",null," \xa9 2023 CalcPrep"),l.a.createElement("p",null,"Unauthorized copy or reuse of any part of this page is illegal."))};var b=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return l.a.createElement("div",{className:"app-container"},l.a.createElement(p,null),l.a.createElement("div",{className:"exam-container"},n?l.a.createElement(d,{retry:function(){return c(!1)}}):l.a.createElement(h,{start:function(){return c(!0)}})),l.a.createElement(v,null))},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),l(e),c(e),r(e)}))};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null))),g()},9:function(e,t,n){e.exports=n(26)}},[[9,1,2]]]);
//# sourceMappingURL=main.df3e9489.chunk.js.map
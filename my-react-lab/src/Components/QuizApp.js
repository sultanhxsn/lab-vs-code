import React, { useState } from 'react';
function QuizApp() {
// Step 1: Define state for selected answer and result
const [selectedAnswer, setSelectedAnswer] = useState(null);
const [result, setResult] = useState("");
// Step 2: Define question and options
const question = "What is the capital of France?";
const options = [
{ id: 1, text: "Berlin", isCorrect: false },
{ id: 2, text: "Madrid", isCorrect: false },
{ id: 3, text: "Paris", isCorrect: true },
{ id: 4, text: "Rome", isCorrect: false }
];
// Step 3: Handle answer selection
const handleAnswerClick = (option) => {
setSelectedAnswer(option.id); // Track selected answer
if (option.isCorrect) {
setResult("Correct! 🎉");
} else {
setResult("Incorrect. Try Again! ❌");
}
};
return (
<div style={{ padding: "20px", fontFamily: "Arial" }}>
<h1>Quiz Application</h1>
<h2>{question}</h2>
<div>
{options.map((option) => (
<button
key={option.id}
onClick={() => handleAnswerClick(option)}

style={{
display: "block",
margin: "10px 0",
padding: "10px",
backgroundColor: selectedAnswer === option.id ?

"#d3d3d3" : "#f0f0f0",

border: "1px solid #ccc",
cursor: "pointer"
}}
>
{option.text}
</button>
))}
</div>
<h3 style={{ color: result === "Correct! 🎉" ? "green" : "red"

}}>{result}</h3>
</div>
);
}
export default QuizApp;
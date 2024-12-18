import React, { useState } from 'react';
function Calculator() {
    const [num, setNum] = useState(''); // Initializing state with an
    const [num2, setNum2] = useState(''); // Initializing state with an
    const [char, setchar] = useState(''); // Initializing state with an
    const [result, setResult] = useState(''); // Initializing state with an

    const handleChange = (event) => {
        setNum(event.target.value); // Update state with the input value
        };

    const handleChange2 = (event) => {
        setNum2(event.target.value); // Update state with the input value
        };

        const handleOperatorChange = (event) => {
            setchar(event.target.value); // Update operator
        };

    const operations = (event) => {
        const num1 = parseFloat(num);
        const num3 = parseFloat(num2);
        let calcres ;
        if (char === "+")
        {
            calcres = (num1 + num3);
        } else if (char === "-")
        {
            calcres = (num1 - num3);
        } else if (char === "*")
        {
            calcres = (num1 * num3);
        } else if (char === "/")
        {
            if (num3 !==0)
            {
                calcres = (num1 / num3);
            } else 
            {
                setResult("A number can't be divided by 0");
            }
        } else 
        {
            setResult("Invalid operator") ;
        }

        setResult(calcres);
    }
return (
<div>
    <input
    type="number"
    placeholder="Enter first number"
    value={num}
    onChange={handleChange}
/>
<input
type="number"
placeholder="Enter second number"
value={num2}
onChange={handleChange2}
/>
<input
type="text"
placeholder="Enter operator: "
value={char}
onChange={handleOperatorChange}
/>
<button onClick={operations}>Calculate</button>
<p>Your result is: {result}</p>
</div>
);
}
export default Calculator;
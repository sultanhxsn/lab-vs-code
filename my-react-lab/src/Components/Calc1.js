import React, { useState } from 'react';
function Calc1() {
const [num1, setNum1] = useState('');
const [num2, setNum2] = useState('');
let sum = 0;

const Add = () => {
    const number = parseFloat(num1);
    const number2 = parseFloat(num2);
    sum = number+number2;
    return sum;
};

const Sub = () => {
    sum = num1-num2;
    return sum;
};

const Mult = () => {
    sum = num1*num2;
    return sum;
};

const Div = () => {
    sum = num1/num2;
    return sum;
};




return (
<div>
<input
type="number"
placeholder="Enter first number"
value={num1}
onChange={(e) => setNum1(e.target.value)}
/>

<input
type="number"
placeholder="Enter second number"
value={num2}
onChange={(e) => setNum2(e.target.value)}
/>

<button onClick={Add}>Add</button>
<button onClick={Sub}>Subtract</button>
<button onClick={Mult}>Multiply</button>
<button onClick={Div}>Divide</button>
<p>
result is: {sum}
</p>
</div>
);
}
export default Calc1;
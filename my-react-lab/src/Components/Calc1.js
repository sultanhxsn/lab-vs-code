import React, { useState } from 'react';
function Calc1() {
const [num1, setNum1] = useState('');
const [num2, setNum2] = useState('');
const [add, setAdd] = useState();
const [sub, setSub] = useState();
const [mult, setMult] = useState();
const [div, setDiv] = useState();

const Add = () => {
    const number = parseFloat(num1);
    const number2 = parseFloat(num2);
    setAdd(number+number2);
};

const Sub = () => {
    const number = parseFloat(num1);
    const number2 = parseFloat(num2);
    setSub(number-number2);
};

const Mult = () => {
    const number = parseFloat(num1);
    const number2 = parseFloat(num2);
    setMult(number*number2);
};

const Div = () => {
    const number = parseFloat(num1);
    const number2 = parseFloat(num2);
    setDiv(number/number2);
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
<br></br>
<button onClick={Add}>Add</button>
<p>
result is: {add}
</p>
<button onClick={Sub}>Subtract</button>
<p>
result is: {sub}
</p>
<button onClick={Mult}>Multiply</button>
<p>
result is: {mult}
</p>
<button onClick={Div}>Divide</button>
<p>
result is: {div}
</p>
</div>
);
}
export default Calc1;
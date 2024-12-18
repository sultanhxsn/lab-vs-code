import React, { useState } from 'react';
function Counter() {
    let [count, setCount] = useState(0); // Initializing state with 0

    const increment = () => {
        setCount(count + 1); // Updating the state
    }

    const decrement = () => {
        if (count > 0){
            setCount(count - 1);}
    }
    const reset = () => {
        setCount(count = 0);
    };
return (
<div>
<h1>Count: {count}</h1>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
<button onClick={reset}>Reset</button>



</div>
);
}
export default Counter;
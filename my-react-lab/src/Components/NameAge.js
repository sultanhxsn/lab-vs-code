import React, { useState } from 'react';
function NameAge() {
const [name, setName] = useState('');
const [age, setAge] = useState('');
return (
<div>
<input
type="text"
placeholder="Enter your name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<input
type="number"
placeholder="Enter your age"
value={age}
onChange={(e) => setAge(e.target.value)}
/>
<p>
Hello, {name}! You are {age} years old.
</p>
</div>
);
}
export default NameAge;
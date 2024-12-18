import React, { useState } from 'react';
function LoginForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [age, setAge] = useState('');


return (
<div>
    <input
    type="text"
    placeholder="Enter your name"
    value={name}
    onChange={(e) => setName(e.target.value)}
/>
<p>
Name is {name}.
</p>


<input
type="text"
placeholder="Enter your email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>

<p>
Email is {email}.
</p>

<input
type="text"
placeholder="Enter your password"
value={pass}
onChange={(e) => setPass(e.target.value)}
/>

<p>
Password is {pass}.
</p>


<input
type="number"
placeholder="Enter your age"
value={age}
onChange={(e) => setAge(e.target.value)}
/>
<p>
Age is {age}.
</p>
</div>
);
}
export default LoginForm;
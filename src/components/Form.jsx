import React, { useState } from "react";

function Form() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


const handleSubmit = (e) => {
  e.preventDefault();
  const forms = {firstName, lastName, email, username, password}

  console.log(forms)
}



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Firstname" 
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />

        <input 
        type="text" 
        placeholder="Lastname" 
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />

        <input 
        type="email" 
        placeholder="Email" 
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <input 
        type="text" 
        placeholder="Username"
        required
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        minLength={4}
        />

        <input 
        type="password" 
        placeholder="Password"
        required
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        minLength={5}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

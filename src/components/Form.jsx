import React from 'react'


function Form() {
  return (
    <div>
      <form>
        <input type="text" placeholder='Firstname' />
        
        <input type="text" placeholder='Lastname' />
        
        <input type="email" placeholder='Email' />
       
        <input type="password" placeholder='Password' />
      
        <button type='submit'>Submit</button>

      </form>
      
      
    </div>
  )
}

export default Form

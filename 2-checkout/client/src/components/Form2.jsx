import React from 'react';

function Form2({ setPage, setForm2 }) {
  return (
    <div>
      <h1>shipping information</h1>
      <form>
        <div>address</div>
        <input placeholder="line1" /><br></br>
        <input placeholder="line2" /><br></br>
        <input placeholder="city" /><br></br>
        <input placeholder="state" /><br></br>
        <input placeholder="zip" /><br></br>
        <br></br>
        <div>phone number</div>
        <input placeholder="phone number" />
      </form>
      <button onClick={() => setPage(1)}>Back</button>
      <button onClick={() => setPage(3)}>Next</button>
    </div>
  )
}

export default Form2;
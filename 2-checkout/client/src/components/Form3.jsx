import React from 'react';

function Form3({ setPage, setForm3 }) {
  return (
    <div>
      <h1>payment information</h1>
      <form>
        <div>credit card information</div>
        <input placeholder="credit card number" /><br></br>
        <input placeholder="expiration date" /><br></br>
        <input placeholder="CVV" /><br></br>
        <input placeholder="zip code" /><br></br>
      </form>
      <button onClick={() => setPage(2)}>Back</button>
      <button onClick={() => setPage(4)}>Next</button>
    </div>
  )
}

export default Form3;
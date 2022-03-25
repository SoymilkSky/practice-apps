import React, { useState } from 'react';

function Confirm({ setPage, form1, form2, form3 }) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div>
      {confirmed ? <h2>Checkout Complete!</h2> :
        <div> confirm all your information is correct
          <div>
            <div>user information</div>
            <span>name: </span><br></br>
            <span>email: </span><br></br>
            <span>password: </span><br></br>
          </div><br></br>
          <div>
            <div>
              <div>address information</div>
              <span>line1: </span><br></br>
              <span>line2: </span><br></br>
              <span>city: </span><br></br>
              <span>state: </span><br></br>
              <span>zip: </span><br></br>
            </div><br></br>
            <div>
              <div>phone number</div>
              <span>phone number: </span>
            </div>
          </div><br></br>
          <div>
            <div>payment information</div>
            <span>credit card number: </span><br></br>
            <span>expiration date: </span><br></br>
            <span>cvv: </span><br></br>
            <span>zip code: </span><br></br>
          </div><br></br>
          <button onClick={ () => setConfirmed(true) }>Confirm</button>
        </div>
      }
      <br></br>
      {confirmed ? null : <button onClick={() => setPage(3)}>Back</button>}
    </div>
  )
}

export default Confirm;
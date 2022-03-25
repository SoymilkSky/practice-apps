import React, { useState } from 'react';

function Confirm({ setPage, sendData, formData }) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div>
      {confirmed ? <h2>Checkout Complete!</h2> :
        <div>confirm all your information is correct
          {formData.map((form, index) =>
            <div key={index}>
              {Object.entries(form).map((kv, index) =>
                <div key={index}>{ kv[0] }: { kv[1] }</div>
              )}
              <br></br>
            </div>
          )}
          <button onClick={ () => { setConfirmed(true); sendData(); } }>Confirm</button>
        </div>}
      <br></br>
      {confirmed ? null : <button onClick={() => setPage(3)}>Back</button>}
    </div>
  )
}

export default Confirm;
import React from 'react';

function Welcome({ setPage }) {
  return (
    <div>
      <h1>Welcome to the checkout process!</h1>
      <h2>Please press next to continue.</h2>
      <button onClick={() => setPage(1)}>Next</button>
    </div>
  )
}

export default Welcome;
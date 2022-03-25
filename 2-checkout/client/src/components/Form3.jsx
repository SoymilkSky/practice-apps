import React from 'react';

function Form3({ setPage, setForm3, form3 }) {
  return (
    <div>
      <h1>payment information</h1>
      <form>
        <div>credit card information</div>
          {Object.entries(form3).map((kv, index) => (
            <div key={ index }>
              <input
                name={ kv[0] }
                value={ kv[1] }
                placeholder={ kv[0] }
                onChange={ (e) => handleChange(e) }/>
                <br></br>
            </div>
            ))}
      </form>
      <button onClick={() => setPage(2)}>Back</button>
      <button onClick={() => setPage(4)}>Next</button>
    </div>
  )
}

export default Form3;
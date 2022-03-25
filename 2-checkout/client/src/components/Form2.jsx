import React from 'react';

function Form2({ setPage, setForm2, form2 }) {

  function handleChange(e) {
    setForm2({ ...form2, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>shipping information</h1>
      <form>
        {Object.entries(form2).map((kv, index) => (
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
      <button onClick={ () => setPage(1) }>Back</button>
      <button onClick={ () => setPage(3) }>Next</button>
    </div>
  )
}

export default Form2;
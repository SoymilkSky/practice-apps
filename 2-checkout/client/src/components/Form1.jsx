import React from 'react';

function Form1({ setPage, setForm1, form1 }) {

  const handleChange = (e) => {
    setForm1({ ...form1, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>user information</h1>
      <form>
        {Object.entries(form1).map((kv, index) => (
          <div key={ index }>
            <input
              name={ kv[0] }
              value={ kv[1] }
              placeholder={ kv[0] }
              onChange={ (e) => handleChange(e) }/>
              <br></br>
          </div>
        ))}
        <br></br>
      </form>
      <button onClick={ () => setPage(0) }>Back</button>
      <button onClick={ () => setPage(2) }>Next</button>
    </div>
  )
}

export default Form1;
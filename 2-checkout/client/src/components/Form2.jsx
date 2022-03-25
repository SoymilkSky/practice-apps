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

        {/* <input
          name="line1"
          value={form2.line1}
          placeholder="line 1"
          onChange={ (e) => handleChange(e) }/><br></br>
        <input
          name="line2"
          value={form2.line2}
          placeholder="line 2"
          onChange={ (e) => handleChange(e)}/><br></br>
        <input
          name="city"
          value={form2.city}
          placeholder="city"
          onChange={ (e) => handleChange(e) }/><br></br>
        <input
          name="state"
          value={form2.state}
          placeholder="state"
          onChange={ (e) => handleChange(e) }/><br></br>
        <input
          name="zip"
          value={form2.zip}
          placeholder="zip"
          onChange={ (e) => handleChange(e) }/><br></br>
        <br></br>
        <div>phone number</div>
        <input
          name="phoneNumber"
          value={form2.phoneNumber}
          placeholder="phone number"
          onChange={ (e) => handleChange(e)} /> */}
      </form>
      <button onClick={ () => setPage(1) }>Back</button>
      <button onClick={ () => setPage(3) }>Next</button>
    </div>
  )
}

export default Form2;
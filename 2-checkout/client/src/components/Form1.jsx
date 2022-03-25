import React from 'react';

function Form1({ setPage, setForm1, form1 }) {

  const handleChange = (key, value) => {
    setForm1({ ...form1, [key]:value });
  }

  return (
    <div>
      <h1>user information</h1>
      <form>
        <input
          name="name"
          value={form1.name}
          placeholder="name"
          onChange={ (e) => handleChange(e.target.name, e.target.value) }/>
        <br></br>
        <input
          name="email"
          value={form1.email}
          placeholder="e-mail address"
          onChange={ (e) => handleChange(e.target.name, e.target.value) }/>
        <br></br>
        <input
          name="password"
          value={form1.password}
          placeholder="password"
          onChange={ (e) => handleChange(e.target.name, e.target.value) }/>
        <br></br>
      </form>
      <button onClick={ () => setPage(0) }>Back</button>
      <button onClick={ () => setPage(2) }>Next</button>
    </div>
  )
}

export default Form1;
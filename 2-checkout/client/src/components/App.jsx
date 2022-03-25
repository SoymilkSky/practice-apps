import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Welcome from './Welcome.jsx';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import Confirm from './Confirm.jsx';

function App() {
  const [page, setPage] = useState(0);
  const [form1, setForm1] = useState({ name: '', email: '', password:'' });
  const [form2, setForm2] = useState({ line1: '', line2: '', city: '', state: '', zip: '', phoneNumber: '' });
  const [form3, setForm3] = useState({ creditCardNum: '', expDate: '', CVV: '', cardZip: '' });

  const pages = {
    0: <Welcome setPage={setPage} />,
    1: <Form1 setPage={setPage} setForm1={setForm1} form1={form1}/>,
    2: <Form2 setPage={setPage} setForm2={setForm2} form2={form2}/>,
    3: <Form3 setPage={setPage} setForm3={setForm3} form3={form3}/>,
    4: <Confirm setPage={setPage} sendData={sendToServer} formData={[form1, form2, form3]}/>
  }

  function sendToServer() {
    let formData = Object.values(form1).concat(Object.values(form2)).concat(Object.values(form3));
    axios.post('/api/checkout', formData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div>
      {pages[page]}
    </div>
  )
}

export default App;
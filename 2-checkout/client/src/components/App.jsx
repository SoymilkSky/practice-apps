import React, { useState, useEffect } from 'react';
import Welcome from './Welcome.jsx';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import Confirm from './Confirm.jsx';

function App() {
  const [page, setPage] = useState(0);
  const [form1, setForm1] = useState({ name: '', email: '', password:'' });
  const [form2, setForm2] = useState({ line1: '', line2: '', city: '', state: '', zip: '', phoneNumber: '' });
  const [form3, setForm3] = useState({ creditCardNum: '', expDate: '', CVV: '', zip: '' });

  const pages = {
    0: <Welcome setPage={setPage} />,
    1: <Form1 setPage={setPage} setForm1={setForm1} form1={form1}/>,
    2: <Form2 setPage={setPage} setForm2={setForm2} form2={form2}/>,
    3: <Form3 setPage={setPage} setForm3={setForm3} form3={form3}/>,
    4: <Confirm setPage={setPage} formData={[form1, form2, form3]}/>
  }

  const sendToServer = () => {
    // axios.post('/api/checkout', {form1, form2, form3})
  }

  const renderPage = () => {
    return pages[page];
  }

  return (
    <div>
      {renderPage()}
    </div>
  )
}

export default App;
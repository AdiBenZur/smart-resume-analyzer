import { useState } from 'react'
import './App.css'

function App() {
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:3000/', {
        method: 'GET'
      });

      const dataResult = await res.text();
      setResponse(dataResult);
    } catch (error) {
      console.error('Error connecting to the server: ', error);
    }
  };

  return (
    <>
    <div>
      <h1>smart resume analyzer</h1>
      <button>Upload Resume</button>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <h2>server response: </h2>
      <p>{response}</p>
    </div>
    </>
  )
}

export default App;

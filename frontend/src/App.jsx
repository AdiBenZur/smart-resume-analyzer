import { useState } from 'react';
import './App.css';
import UploadResumeForm from './components/UploadResumeForm';
import ServerFeedbackLog from './components/ServerFeedbackLog';

function App() {
  const [response, setResponse] = useState('');

  return (
    <div className="app-container">
      <h1 className="title">Smart Resume Analyzer</h1>
      <UploadResumeForm setResponse={setResponse} />
      <ServerFeedbackLog response={response} />
    </div>
  );
}

export default App;

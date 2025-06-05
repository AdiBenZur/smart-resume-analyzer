import { useState } from 'react';
import './App.css';
import UploadResumeForm from './components/UploadResumeForm';
import ServerFeedbackLog from './components/ServerFeedbackLog';

function App() {
  const [resumeText, setResumeText] = useState('');
  const [feedbackData, setFeedbackData] = useState([]);

  return (
    <div className="app-container">
      <h1 className="title">Smart Resume Analyzer</h1>
      <UploadResumeForm setResumeText={setResumeText} setFeedbackData={setFeedbackData} />
      <ServerFeedbackLog resumeText={resumeText} feedbackData={feedbackData} />
    </div>
  );
}

export default App;

import './UploadResumeForm.css';
import { useState } from 'react';

function UploadResumeForm({ setResponse }) {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSelect = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('File does not selected');
      return;
    }

    console.log('Starting upload...');
    // Send the resume to backend
    const formData = new FormData();
    formData.append('resume', file);

    setIsLoading(true); // Activate the spinner

    try {
      const res = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      });

      const dataResult = await res.text();
      setResponse(dataResult);
    } catch (error) {
      console.error('Error connecting to the server:', error);
    } finally {
      setIsLoading(false); // Stop the spinner
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h2 className="section-title">Upload your resume (PDF or Word only)</h2>
        <input
          type="file"
          accept=".pdf, .doc, .docx"
          onChange={handleFileSelect}
        />
        <br />
        <button onClick={handleSubmit}>Submit Resume</button>

        {isLoading && <div className="loader">Analyzing...</div>}
      </div>
    </div>
  );
}

export default UploadResumeForm;
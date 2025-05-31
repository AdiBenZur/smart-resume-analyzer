import './UploadResumeForm.css';

function UploadResumeForm() {
  const [file, setFile] = useState(null);

  const handleFileSelect = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('File does not selected');
      return;
    }

    // Send the resume to backend
    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      });

      const dataResult = await res.text();
      setResponse(dataResult);
    } catch (error) {
      console.error('Error connecting to the server:', error);
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
      </div>
    </div>
  );
}

export default UploadResumeForm;
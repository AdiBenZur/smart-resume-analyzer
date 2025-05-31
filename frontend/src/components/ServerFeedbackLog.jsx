import './ServerFeedbackLog.css';

function ServerFeedbackLog({ response }) {
    if (!response) return null;
  
    return (
      <div className="feedback-log">
        <h2 className="section-title">Server Response:</h2>
        <pre className="response-text">{response}</pre>
      </div>
    );
  }
  
  export default ServerFeedbackLog;
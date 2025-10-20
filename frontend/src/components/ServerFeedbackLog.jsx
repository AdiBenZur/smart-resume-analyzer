import './ServerFeedbackLog.css';


function ServerFeedbackLog({ resumeText, feedbackData }) {
    if (!resumeText || !feedbackData.length) return null;
  
    const feedbackLines = feedbackData.split('\n').filter(line => line.trim() !== '');

    return (
      <div className="feedback-log">
        <h2 className="section-title">Resume Text:</h2>
        <p className="highlighted-resume">{resumeText}</p>

        <h2 className="section-title">Feedback:</h2>
        <ol className="feedback-list">
          {feedbackLines.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ol>
      </div>
    );
  }
  
  export default ServerFeedbackLog;
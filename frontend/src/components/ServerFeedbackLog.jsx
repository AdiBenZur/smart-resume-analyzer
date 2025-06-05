import './ServerFeedbackLog.css';

function ServerFeedbackLog({ response }) {
    if (!response) return null;
  
    const highlightedText = feedbackData.reduce((text, item, index) => {
        const highlightClass = `highlight-${index + 1}`;
        const marker = ` <sup>[${index + 1}]</sup>`;
        const regex = new RegExp(item.phrase, 'i');
        return text.replace(regex, `<span class="${highlightClass}">${item.phrase}${marker}</span>`);
    }, resumeText);

    return (
      <div className="feedback-log">
        <h2 className="section-title">Resume feedback:</h2>
        <p className="highlighted-resume" dangerouslySetInnerHTML={{ __html: highlightedText }} />
        <h2 className="section-title">Feedback:</h2>
        <ol className="feedback-list">
            {feedbackData.map((item, i) => (
                <li key={i}><strong>[{i + 1}]</strong> {item.feedback}</li>
            ))}
        </ol>
      </div>
    );
  }
  
  export default ServerFeedbackLog;
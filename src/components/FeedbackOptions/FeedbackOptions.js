import './FeedbackOptions.css';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedback__container">
      {options.map(option => {
        return (
          <button
            onClick={() => onLeaveFeedback(option)}
            className={`feedback__button ${option}`}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Feedback;

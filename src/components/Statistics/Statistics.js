import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul className="stat__list">
        <li>Good: {good} </li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad} </li>
        <li>Total: {total} </li>
        <li>Positive feedback: {positivePercentage}% </li>
      </ul>
    </div>
  );
};

export default Statistics;

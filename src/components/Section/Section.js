import './Section.css';
const Section = ({ text, children }) => {
  return (
    <section>
      <h2 className="feedback__title">{text}</h2>
      {children}
    </section>
  );
};
export default Section;

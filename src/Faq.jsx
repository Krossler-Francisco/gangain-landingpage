import React, { useState } from "react";

const FAQ = ({ faqs }) => {
  return (
    <div style={faqContainerStyle}>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={faqItemStyle}>
      <button onClick={toggleAnswer} style={buttonStyle}>
        <span style={questionStyle}>{question}</span>
        <span style={{ ...arrowStyle, transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}>▼</span>
      </button>
      {isOpen && <p style={answerStyle}>{answer}</p>}
    </div>
  );
};

const faqContainerStyle = {
  maxWidth: "840px",
  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
  margin: "0 auto",
  borderRadius: ".2rem",
  padding: "20px",
  color: "#000",
  fontFamily: "Arial, sans-serif",
};

const faqItemStyle = {
  marginBottom: "10px",
  borderBottom: "1px solid #ccc",
  color: "#000"
};

const buttonStyle = {
  backgroundColor: "#f9f9f9",
  border: "none",
  borderBottom: "1px solid #eee",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 10px",
  width: "100%",
  textAlign: "left",
  cursor: "pointer",
  color: "#000",
  fontSize: "16px",
  fontWeight: "bold",
};

const questionStyle = {
  flex: 1,
  color: "#000",
};

const arrowStyle = {
  transition: "transform 0.3s ease",
  color: "black",
};

const answerStyle = {
  padding: "15px 10px",
  backgroundColor: "#f1f1f1",
  fontSize: "14px",
  color: "#bbb",
};

export default FAQ;

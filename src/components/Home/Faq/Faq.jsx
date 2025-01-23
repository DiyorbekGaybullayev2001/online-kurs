import { useState } from "react";
import "./Faq.css";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(false);
  const faqData = [
    {
      id: 1,
      question: "Bo'lib to'lash bormi?",
      answer: `Faqat PREMIUM" tarifida mavjud`,
    },
    {
      id: 2,
      question: "Qanday ko'nikmalarga ega bo'lasiz?",
      answer:
        "Targetingni 0 dan mustaqil daromad qiladigan darajada o'rganasiz",
    },
    {
      id: 3,
      question: "O'quvchilar qanday natijalarga erishishadi?",
      answer:
        "A nuqta Targetda hech qanday bilim mavjud emas B nuqta mustaqil daromad qilish",
    },
    {
      id: 4,
      question: "Qanday kafolat berasiz?",
      answer: "Kursdan sizga ma’qul kelmay qolsa pulingiz 100% qaytariladi",
    },
  ];

  const handleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faqs">
        <h1 className="faq-title">Tez tez beriladigan savollar</h1>
        <div className="faqs-cards">
          {faqData.map((faq, index) => (
            <>
              <hr />
              <div className="faq-card" key={index}>
                <div className="questions" onClick={() => handleActive(index)}>
                  <span className="question">{faq.question}</span>
                  {activeIndex === index ? (
                    <IoMdClose className="faq-icon" />
                  ) : (
                    <FaPlus className="faq-icon" />
                  )}
                </div>
                {activeIndex === index && (
                  <div className="answers">
                    <span className="answer">{faq.answer}</span>
                  </div>
                )}
              </div>
            </>
          ))}
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Faq;

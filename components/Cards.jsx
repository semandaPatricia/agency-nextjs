"use client"
import { useState } from 'react';
import styles from '../Accordion.module.css'; // Assuming you have a CSS module for styling

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="wrapper">
      <div className="container">
        <ul className="accordion">
          {accordionData.map((item, index) => (
            <li className="item" key={index}>
              <h2
                className={`${styles.accordionTitle} ${
                  activeIndex === index ? styles.active : ''
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span className={`${styles.accIcon}`}></span>
              </h2>
              <div
                className={`${styles.text} ${
                  activeIndex === index ? styles.show : ''
                }`}
              >
                {item.content}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const accordionData = [
  {
    title: 'London',
    content:
      'London is the capital and largest city of England, the United Kingdom, and the European Union...',
  },
  {
    title: 'Madrid',
    content:
      'Madrid is the capital of Spain and the largest municipality in both the Community of Madrid...',
  },
  // Add more accordion items as needed
];

export default Accordion;


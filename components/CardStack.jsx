import { useEffect, useState } from "react";
import '../css/cardstack.css'; 

const CardStack = ({ cards }) => {
  const cardData = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nihil, quaerat id odit, architecto fugit laborum, nemo repudiandae sint quas distinctio nam quae deleniti natus perferendis recusandae adipisci odio. Maxime."
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nihil, quaerat id odit, architecto fugit laborum, nemo repudiandae sint quas distinctio nam quae deleniti natus perferendis recusandae adipisci odio. Maxime."
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nihil, quaerat id odit, architecto fugit laborum, nemo repudiandae sint quas distinctio nam quae deleniti natus perferendis recusandae adipisci odio. Maxime."
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nihil, quaerat id odit, architecto fugit laborum, nemo repudiandae sint quas distinctio nam quae deleniti natus perferendis recusandae adipisci odio. Maxime."
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nihil, quaerat id odit, architecto fugit laborum, nemo repudiandae sint quas distinctio nam quae deleniti natus perferendis recusandae adipisci odio. Maxime."
    }
  ];

  return (
    <div className="flex justify-center m-7">
    <div className="cards " style={{ paddingBottom: `${Math.max(cardData.length, 1)}em` }}>
      {cardData.map(({ id, title, text }, i) => (
        <div key={id} className="card" style={{ transform: `translateY(${i}em)` }}>
          <h3 className="card__title">{title}</h3>
          <p className="card__text">{text}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CardStack;



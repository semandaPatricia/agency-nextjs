import { useEffect, useState } from "react";
import '../css/cardstack.css'; 
import Image from "next/image";
const CardStack = ({ cards }) => {
  const cardData = [
    {
      id: 1,
      title: "Mobile apps",
      text: "Funding Savers",
      imageUrl:  "https://cdn.dribbble.com/userupload/14316670/file/original-233073bfde4c7dd973ef3b34e95f982d.png?resize=1024x768"
    },
    {
      id: 2,
      title: "loorom",
      text: "Modern Technology",
      imageUrl:  "https://cdn.dribbble.com/userupload/10793867/file/original-66d4e00bf57563148aab1114381e13bd.png?resize=1024x768"
    },
    {
      id: 3,
      title: "Homec",
      text: "Modern Technology",
      imageUrl:  "https://cdn.dribbble.com/userupload/13411560/file/original-9e0a7cb5bab6b7af3439bfd1855de453.png?resize=1024x768"
    },
    {
      id: 4,
      title: "Job portal",
      text: "Modern Technology",
      imageUrl: "https://cdn.dribbble.com/userupload/11085588/file/original-b10244e4f155d72fd2dd51ecca9e3b24.png?resize=1024x768"
    },
    {
      id: 5,
      title: "APIs",
      text: "Modern Technology",
      imageUrl: "https://cdn.dribbble.com/userupload/14199569/file/original-b7f0f1fee306069d8d62ae85cf3710bf.png?resize=1024x768"
    },
    {
      id: 6,
      title: "Booking system",
      text: "Doctors booking",
      imageUrl: "https://cdn.dribbble.com/users/2619712/screenshots/15950309/media/947a56be9c3772cb884887a10a5218a0.png"
    }
  ];

  return (
    <div className="flex justify-center m-7">
    <div className="cards" style={{ paddingBottom: `${Math.max(cardData.length, 1)}em` }}>
      {cardData.map(({ id, title, text, imageUrl }, i) => (
        <div key={id} className="card text-white" style={{ transform: `translateY(${i}em)` }}>
          <h3 className="card__title ">{title}</h3>
          <p className="card__text">{text}</p>
          {imageUrl && (
            <div className="relative justify-center flex">
              <Image
                src={imageUrl}
                alt=""
                width={520}
                height={400}
                className="object-cover "
              />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default CardStack;



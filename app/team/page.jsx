"use client"
import React, { useEffect, useState } from 'react';
import styles from './Team.module.css'; // Import CSS file for styling
import Image from 'next/image';

const Team = () => {
    const [galleryHeight, setGalleryHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const g = document.querySelector(".gallery");
            const items = document.querySelectorAll(".item");
          
            const hero = document.querySelector(".hero");
            //hero.height = g.offsetHeight + "px";
            const w = window.innerWidth;
            let item_row;
            if (w < 640) {
                item_row = 2;
            } else if (w >= 1200) {
                item_row = 4;
            } else {
                item_row = 3;
            }
            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove("odd", "even");
                if (i % item_row === 0 || i % item_row === 2) {
                    items[i].classList.add("odd");
                } else if (i % item_row === 1 || i % item_row === 3) {
                    items[i].classList.add("even");
                }
            }
            //const clone = g.cloneNode(true);
            //clone.classList.add("clone", "show");
            //g.after(clone);
            //g.classList.add("show");
        };
        
        handleResize(); // Call the function on component mount

        let timer = 0;
        const handleResizeThrottled = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                console.log("window resized");
                handleResize();
            }, 300);
        };
        
        window.addEventListener("resize", handleResizeThrottled);
        
        return () => {
            window.removeEventListener("resize", handleResizeThrottled);
        };
    }, []);

  return (
    <div className={styles.hero}>
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 z-10">Gallery</h1>

      <div className="w-full flex flex-wrap duration-200  opacity-1 transition-opacity ">
      <div className={styles.item}>
  <Image src="https://images.pexels.com/photos/7316632/pexels-photo-7316632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={500} height={480} />
</div>
<div className={styles.item}>
  <Image src="https://images.pexels.com/photos/12540814/pexels-photo-12540814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={640} height={480} />
</div>
<div className={styles.item}>
  <Image src="https://images.pexels.com/photos/9563749/pexels-photo-9563749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={640} height={480} />
</div>
<div className={styles.item}>
  <Image src="https://images.pexels.com/photos/21915250/pexels-photo-21915250/free-photo-of-portrait-of-woman-in-sweater.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={640} height={480} />
</div>
<div className={styles.item}>
  <Image src="https://images.pexels.com/photos/11682017/pexels-photo-11682017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={640} height={480} />
</div>
<div className={styles.item}>
  <Image src="https://images.pexels.com/photos/19515319/pexels-photo-19515319/free-photo-of-portrait-of-woman-wearing-turtleneck-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={640} height={480} />
</div>
<div className={styles.item}>
  <Image src="https://images.pexels.com/photos/19452878/pexels-photo-19452878/free-photo-of-portrait-of-man-with-beard-wearing-white-sweater.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={640} height={480} />
</div>
<div className={styles.item}>
  <Image src="https://images.pexels.com/photos/18504480/pexels-photo-18504480/free-photo-of-portrait-of-brunette-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={640} height={480} />
</div>
<div className={styles.item}>
  <Image src="https://images.pexels.com/photos/20644320/pexels-photo-20644320/free-photo-of-portrait-of-woman-with-braid.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={640} height={480} />
</div>
<div className={styles.item}>
  <Image src="https://images.pexels.com/photos/21915252/pexels-photo-21915252/free-photo-of-a-woman-in-a-white-sweater-and-necklace.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={640} height={480} />
</div>
      </div>
      <p className={styles.memo}>Meet our team</p>
    </div>
  );
};

export default Team;

"use client"
import NavMenu from "@/components/NavMenu";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { easings, textRevealMotion } from "@/utils/animations";
import Navbar from "@/components/Navbar";
import Services from "./services/page";
import Contact from "./contact/page";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <section className="h-screen bg-black relative flex flex-col">
        <AnimatePresence>{menuOpen && <NavMenu />}</AnimatePresence>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
       {/* HERO CONTENT*/}
        <motion.div
          className="text-white uppercase tracking-wider px-7 mx-auto flex-1 flex flex-col text-5xl leading-snug sm:text-6xl sm:leading-snug md:text-7xl md:leading-tight lg:text-[6.2rem] xl:text-[7rem]"
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="md:pl-[10%]" variants={textRevealMotion(0)}>
          Crafting 
          </motion.h1>
          <div className="flex items-center bg-black z-10">
            <motion.div
              className="bg-white h-1 flex-1 mr-8 hidden md:block origin-left"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: 1,
                transition: { duration: 0.8, ease: easings.easeInOutQuint },
              }}
            />
            <motion.h1 className="z-20" variants={textRevealMotion(0.2)}>
            Exceptional
            </motion.h1>
          </div>
          <div className="bg-black z-20">
            <motion.h1 variants={textRevealMotion(0.4)}>
            Digital Experiences
            </motion.h1>
          </div>
          <div className="bg-black z-30 flex-1 text-[#ccbaa9] w-full pt-8 md:pl-[20%] text-base normal-case tracking-normal leading-normal">
            <motion.p
              className="max-w-lg"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.8,
                  duration: 0.8,
                  ease: easings.easeOutQuart,
                },
              }}
            >
              Innovative Solutions is a creative agency specializing in cutting-edge 
              digital experiences. Building upon the legacy of Buckles Studio®, we collaborate with businesses worldwide, empowering them to thrive and reach new heights in the digital landscape."
            </motion.p>
          </div>
        </motion.div>
        {/* more CONTENT*/}
        <Services/>
        <Contact/>

        
      </section>
    </main>
  );
}
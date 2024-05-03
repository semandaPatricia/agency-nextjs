import React from "react";
import { motion } from "framer-motion";
import NavMenuItem from "./NavMenuItem";
import { easings } from "@/utils/animations";
import Link from "next/link";
const NavMenu = () => {
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "Services",
      path: "/services"
    },
    {
      id: 3,
      name: "Our Work",
      path: "/work"
    },
    {
      id: 4,
      name: "People & Culture",
      path: "/people"
    },
    
   
    {
      id: 5,
      name: "Get In Touch",
      path: "/contact"
    }
  ];

  return (
    <motion.nav
      className="absolute h-screen w-screen bg-[#eee9e4] flex flex-col justify-end p-8 z-50"
      initial={{ y: "-100%" }}
      animate={{
        y: 0,
        transition: { duration: 1, ease: easings.easeOutQuart },
      }}
      exit={{ y: "-100%", transition: { duration: 0.3 } }}
    >
         <motion.ul exit={{ opacity: 0, transition: { duration: 0 } }}>
        {navItems.map((item, idx) => (
          <Link href={item.path}>
                    <NavMenuItem key={item.id} index={idx + 1} title={item.name}  />
          </Link>

        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default NavMenu;


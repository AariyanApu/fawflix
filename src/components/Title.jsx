'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Title({ title, link, linkName }) {
  return (
    <div className="flex flex-row justify-between items-center mb-2 px-10 sm:px-1">
      <p className="red_gradient text-2xl capitalize font-semibold">{title}</p>
      <div className="flex">
        {/* <div className=" mt-3 h-0 w-40 border-red-600 border  md:w-[500px] lg:w-[800px] xl:w-[900] md:flex hidden " /> */}

        {/* separator */}
        <div className="hidden md:flex items-center justify-center mt-3 md:w-[500px] lg:w-[800px] xl:w-[900px]  red_gradient_border rounded-full" />

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <Link href={link} className=" red_gradient text-xl ml-2">
            {linkName}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

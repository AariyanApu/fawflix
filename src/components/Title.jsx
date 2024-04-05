"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Title({ title, link, linkName }) {
  return (
    <div className="mb-2 flex flex-row items-center justify-between px-10 sm:px-1">
      <p className="red_gradient text-2xl font-semibold capitalize">{title}</p>
      <div className="flex">
        {/* <div className=" mt-3 h-0 w-40 border-red-600 border  md:w-[500px] lg:w-[800px] xl:w-[900] md:flex hidden " /> */}

        {/* separator */}
        <div className="red_gradient_border mt-3 hidden items-center justify-center rounded-full md:flex md:w-[500px]  lg:w-[800px] xl:w-[900px]" />

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <Link href={link} className=" red_gradient ml-2 text-xl">
            {linkName}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

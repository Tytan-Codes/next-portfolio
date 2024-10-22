"use client";

import { motion } from "framer-motion";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ backgroundColor: "#000", opacity: 0 }}
      animate={{ backgroundColor: "#000", opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
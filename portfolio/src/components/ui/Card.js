"use client";

import { motion } from "framer-motion";

export default function Card({ title, description, children, className = "" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition font-mono ${className}`}
    >
      {title && <h4 className="text-lg font-semibold text-black mb-2">{title}</h4>}
      {description && <p className="text-gray-700 mb-4">{description}</p>}
      {children}
    </motion.div>
  );
}

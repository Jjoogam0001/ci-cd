"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Card from "../ui/Card";

export default function CloudDemo() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    axios
      .get("/api/orders") // Optional: Robot Shop proxy
      .then((res) => setOrders(res.data))
      .catch(() => setOrders({ error: "Service unavailable" }));
  }, []);

  return (
    <motion.section
      id="cloud"
      className="py-16 bg-gray-50 font-mono"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-center mb-6 relative">
        <span className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-12 h-0.5 bg-black"></span>
        Cloud Demo
      </h3>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {orders ? (
          Object.entries(orders).map(([key, value]) => (
            <Card key={key} title={key} description={JSON.stringify(value, null, 2)} />
          ))
        ) : (
          <Card title="Loading metrics..." description="Please wait while data loads." />
        )}
      </div>
    </motion.section>
  );
}

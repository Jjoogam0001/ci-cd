"use client";

import { motion } from "framer-motion";
import Card from "../ui/Card";

const skills = [
  "Microservices (Docker, Kubernetes)",
  "Cloud Platforms (AWS, GCP, Azure)",
  "CI/CD (GitHub Actions, ArgoCD)",
  "Monitoring (Prometheus, Grafana, Instana)",
  "Backend (Node.js, Python, Go)"
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-16 max-w-4xl mx-auto px-6 font-mono"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold mb-6 text-center relative">
        <span className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-12 h-0.5 bg-black"></span>
        Skills
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, idx) => (
          <Card key={idx} title={skill} />
        ))}
      </div>
    </motion.section>
  );
}

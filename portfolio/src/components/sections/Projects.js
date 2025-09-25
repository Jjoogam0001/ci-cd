"use client";

import { motion } from "framer-motion";
import Card from "../ui/Card";

const projects = [
  {
    title: "Robot Shop Cloud Demo",
    description: "Deployed microservices on Kubernetes with monitoring and CI/CD.",
    link: "https://github.com/instana/robot-shop"
  },
  {
    title: "Portfolio Backend API",
    description: "Custom API serving portfolio data dynamically.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-16 max-w-5xl mx-auto px-6 font-mono"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold mb-6 text-center relative">
        <span className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-12 h-0.5 bg-black"></span>
        Projects
      </h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, idx) => (
          <Card key={idx} title={project.title} description={project.description}>
            <a href={project.link} className="text-gray-900 font-semibold hover:underline font-mono">
              View Project →
            </a>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}

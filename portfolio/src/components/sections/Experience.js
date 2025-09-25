"use client";

import { motion } from "framer-motion";
import { FaCloud, FaDatabase, FaCogs, FaServer } from "react-icons/fa";
import Card from "../ui/Card";

const timelineItems = [
  {
    year: "2025 – Present",
    role: "Backend Engineer",
    company: "Sigma Digital Solutions",
    highlights: [
      "Architect and implement backend services using Golang, Java, etc.",
      "Built and maintained REST APIs & microservices in AWS/GCP.",
      "Optimized database queries for large-scale analytics platforms.",
      "Code reviews and mentoring junior developers."
    ],
    icon: <FaServer className="text-gray-800 w-6 h-6" />
  },
  {
    year: "2022 – 2025",
    role: "Backend Developer (Go & Java)",
    company: "Derivco Sports Sweden",
    highlights: [
      "Refactored Ruby monolith into 15+ Go microservices.",
      "Achieved 10k+ TPS on PostgreSQL.",
      "Orchestrated Kubernetes (AKS) clusters for 50+ microservices.",
      "CI/CD pipelines with Azure DevOps, reduced deployment time by 60%."
    ],
    icon: <FaCloud className="text-gray-800 w-6 h-6" />
  },
  {
    year: "2020 – 2022",
    role: "Full-Stack Developer (Java/React)",
    company: "Lexicon Växjö",
    highlights: [
      "Developed event-driven backend services using Java & Kafka.",
      "Deployed apps on Azure Kubernetes clusters.",
      "Optimized CI/CD pipelines for reliability."
    ],
    icon: <FaCogs className="text-gray-800 w-6 h-6" />
  }
];

const technicalSkills = [
  { name: "Golang (Echo/Gin)", icon: <FaServer className="text-gray-800 w-5 h-5" /> },
  { name: "Java (Spring Boot)", icon: <FaServer className="text-gray-800 w-5 h-5" /> },
  { name: "Kubernetes (AKS)", icon: <FaCloud className="text-gray-800 w-5 h-5" /> },
  { name: "PostgreSQL / MongoDB / MySQL", icon: <FaDatabase className="text-gray-800 w-5 h-5" /> },
  { name: "REST APIs / NATS / Kafka", icon: <FaCogs className="text-gray-800 w-5 h-5" /> },
  { name: "Prometheus / Grafana / Splunk", icon: <FaCloud className="text-gray-800 w-5 h-5" /> }
];

export default function Experience() {
  return (
    <motion.section
      id="experience-timeline"
      className="py-16 max-w-6xl mx-auto px-6 font-mono"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold mb-8 text-center relative">
        <span className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-12 h-0.5 bg-black"></span>
        Skills & Experience Timeline
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Skills Column */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Technical Skills</h4>
          <div className="space-y-4">
            {technicalSkills.map((skill, idx) => (
              <Card key={idx} className="flex items-center space-x-3 p-4">
                {skill.icon}
                <span className="font-mono text-gray-800">{skill.name}</span>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Column */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Professional Experience</h4>
          <div className="relative border-l-2 border-gray-200 pl-10 space-y-10">
            {timelineItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative flex items-start"
              >
                {/* Timeline Dot / Icon */}
                <span className="absolute -left-6 mt-1 flex items-center justify-center w-6 h-6 bg-white border-2 border-gray-400 rounded-full z-10">
                  {item.icon}
                </span>

                {/* Timeline Content */}
                <div className="ml-8">
                  <p className="text-gray-500 text-sm">{item.year}</p>
                  <h5 className="text-lg font-semibold text-black">{item.role}</h5>
                  <p className="text-gray-700 mb-2 font-mono">{item.company}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {item.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

"use client"

import { motion } from 'framer-motion'
import { Brain, Shield, Zap, Users } from 'lucide-react'

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    name: "Michael Roberts",
    role: "CTO",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    name: "Emily Johnson",
    role: "Head of AI",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
  }
]

const values = [
  {
    icon: <Brain className="h-8 w-8 text-[#4f9eff]" />,
    title: "Innovation First",
    description: "Pushing the boundaries of AI technology to solve real business challenges."
  },
  {
    icon: <Shield className="h-8 w-8 text-[#4f9eff]" />,
    title: "Security & Trust",
    description: "Enterprise-grade security and privacy protection for your business data."
  },
  {
    icon: <Zap className="h-8 w-8 text-[#4f9eff]" />,
    title: "Lightning Fast",
    description: "Instant responses and automation that keeps your business moving."
  },
  {
    icon: <Users className="h-8 w-8 text-[#4f9eff]" />,
    title: "Customer Success",
    description: "Dedicated support ensuring you get the most from our platform."
  }
]

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-space-grotesk font-bold mb-4">
            Our Mission
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            To empower businesses with intelligent automation, making world-class AI technology accessible to companies of all sizes.
          </p>
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-4">Our Story</h2>
            <div className="max-w-3xl mx-auto text-gray-400 space-y-4">
              <p>
                Founded in 2023, SmartAssist emerged from a simple observation: small and medium-sized businesses needed the same powerful AI tools as large enterprises, but in a more accessible package.
              </p>
              <p>
                What started as a simple automation tool has grown into a comprehensive platform used by thousands of businesses worldwide, helping them automate their operations and deliver exceptional customer experiences.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-space-grotesk font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#4f9eff]/20 rounded-full blur-xl"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative rounded-full w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-space-grotesk font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-[#2b2f38]/30 backdrop-blur-lg rounded-xl p-6 border border-[#2b2f38]"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-2">{value.title}</h3>
                <p className="text-gray-400 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
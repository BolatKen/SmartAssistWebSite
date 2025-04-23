"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out SmartAssist",
    features: [
      "Basic AI responses",
      "Up to 100 clients/month",
      "Email support",
      "1 team member",
      "Basic analytics"
    ],
    cta: "Start Free"
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Free, plus:",
      "CRM integrations",
      "Up to 1,000 clients/month",
      "Priority email support",
      "5 team members",
      "Advanced analytics",
      "Custom workflows"
    ],
    cta: "Start 14-Day Trial",
    popular: true
  },
  {
    name: "Business",
    price: "$199",
    period: "/month",
    description: "For enterprises and large teams",
    features: [
      "Everything in Pro, plus:",
      "Full automation suite",
      "Unlimited clients",
      "24/7 priority support",
      "Unlimited team members",
      "Custom integrations",
      "Dedicated account manager",
      "Custom AI training"
    ],
    cta: "Contact Sales"
  }
]

export default function Pricing() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-space-grotesk font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core AI features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-[#2b2f38]/30 backdrop-blur-lg rounded-xl p-8 border ${
                plan.popular 
                  ? 'border-[#4f9eff] shadow-[0_0_20px_rgba(79,158,255,0.15)]' 
                  : 'border-[#2b2f38]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4f9eff] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-[#4f9eff] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                size="lg" 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-[#4f9eff] hover:bg-[#4f9eff]/80' 
                    : 'bg-[#2b2f38] hover:bg-[#2b2f38]/80'
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
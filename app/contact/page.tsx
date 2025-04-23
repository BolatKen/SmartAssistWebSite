"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Instagram, MessageCircle, Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Here you would typically handle the form submission
  }

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
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about SmartAssist? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="bg-[#2b2f38]/30 backdrop-blur-lg rounded-xl p-8 border border-[#4f9eff]">
                <h3 className="text-2xl font-bold text-center mb-4">Thank You!</h3>
                <p className="text-gray-400 text-center">
                  We've received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-[#2b2f38]/30 border-[#2b2f38] focus:border-[#4f9eff] text-white placeholder:text-gray-500"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-[#2b2f38]/30 border-[#2b2f38] focus:border-[#4f9eff] text-white placeholder:text-gray-500"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-[#2b2f38]/30 border-[#2b2f38] focus:border-[#4f9eff] text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="bg-[#2b2f38]/30 border-[#2b2f38] focus:border-[#4f9eff] text-white placeholder:text-gray-500 min-h-[150px]"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#4f9eff] hover:bg-[#4f9eff]/80"
                >
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-[#2b2f38]/30 backdrop-blur-lg rounded-xl p-8 border border-[#2b2f38]">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-[#4f9eff]" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@smartassist.ai" className="text-gray-400 hover:text-[#4f9eff]">
                      hello@smartassist.ai
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-[#4f9eff]" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+77777777777" className="text-gray-400 hover:text-[#4f9eff]">
                      +7 (777) 777 77 77
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2b2f38]/30 backdrop-blur-lg rounded-xl p-8 border border-[#2b2f38]">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-6">
                <a
                  href="https://instagram.com/smartassist.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#4f9eff] transition-colors"
                >
                  <Instagram className="h-8 w-8" />
                </a>
                <a
                  href="https://t.me/smartassist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#4f9eff] transition-colors"
                >
                  <MessageCircle className="h-8 w-8" />
                </a>
                <a
                  href="https://linkedin.com/company/smartassist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#4f9eff] transition-colors"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
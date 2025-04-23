"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN;
    const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID; // например: -1001234567890
    const THREAD_ID = Number(process.env.NEXT_PUBLIC_THREAD_ID); // ID выбранного топика

    const message = `
  📨 Новая заявка с сайта:
  👤 Имя: ${formData.name}
  📞 Телефон: ${formData.phone}
  💬 Сообщение: ${formData.message}
    `;
    console.log("📨 Отправлено:", message);

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          message_thread_id: THREAD_ID,
          parse_mode: "HTML",
        }),
      });

      console.log("✅ Отправлено в Telegram");
    } catch (error) {
      console.error("❌ Ошибка при отправке в Telegram", error);
    }
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0f14] text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
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
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-300">
                  We've received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#1a1d22] border border-white/10 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#4f9eff]"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-[#1a1d22] border border-white/10 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#4f9eff]"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-[#1a1d22] border border-white/10 text-white placeholder:text-gray-500 min-h-[150px] focus:ring-2 focus:ring-[#4f9eff]"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-[#0d0f14] font-semibold hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all"
                >
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-white" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a
                      href="mailto:hello@smartassist.ai"
                      className="hover:text-white"
                    >
                      hello@smartassist.ai
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-white" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <a href="tel:+77777777777" className="hover:text-white">
                      +7 (777) 777 77 77
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-6 text-white">
                <a
                  href="https://instagram.com/smartassist.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4f9eff] transition-colors"
                >
                  <Instagram className="h-8 w-8" />
                </a>
                <a
                  href="https://t.me/smartassist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4f9eff] transition-colors"
                >
                  <MessageCircle className="h-8 w-8" />
                </a>
                <a
                  href="https://linkedin.com/company/smartassist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4f9eff] transition-colors"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

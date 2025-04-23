"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Zap, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Bolat Ken",
    role: "Head of AI & Co-founder",
    image:
      "https://res.cloudinary.com/dul8vhkgz/image/upload/v1745417719/photo_2025-03-02_10-20-42_ivmviz.jpg",
    insta: "https://www.instagram.com/bolatkenb/",
  },
  {
    name: "Dimash Makhmut",
    role: "Founder",
    image:
      "https://res.cloudinary.com/dul8vhkgz/image/upload/v1745417718/photo_2025-03-04_11-27-02_cmneo1.jpg",
    insta: "https://www.instagram.com/dimash090909/",
  },
];

const values = [
  {
    icon: <Brain className="h-8 w-8 text-[#ffffff]" />,
    title: "Инновации В Первую Очередь",
    description:
      "Мы раздвигаем границы ИИ-технологий, чтобы решать реальные бизнес-задачи.",
  },
  {
    icon: <Shield className="h-8 w-8 text-[#ffffff]" />,
    title: "Безопасность & Доверие",
    description:
      "Корпоративный уровень безопасности и защита конфиденциальности ваших бизнес-данных.",
  },
  {
    icon: <Zap className="h-8 w-8 text-[#ffffff]" />,
    title: "Молниеносная Скорость",
    description:
      "Мгновенные ответы и автоматизация, которые поддерживают движение вашего бизнеса.",
  },
  {
    icon: <Users className="h-8 w-8 text-[#ffffff]" />,
    title: "Успех Клиентов",
    description:
      "Преданная поддержка, которая помогает вам максимально эффективно использовать нашу платформу.",
  },
];

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
            Наша миссия
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Дать возможность бизнесам использовать интеллектуальную
            автоматизацию, делая передовые ИИ-технологии доступными для компаний
            любого размера.
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
            <h2 className="text-3xl font-space-grotesk font-bold mb-4">
              Наша история
            </h2>
            <div className="max-w-3xl mx-auto text-gray-400 space-y-4">
              <p>
                Основанный в 2024 году, SmartAssist возник из простого
                наблюдения: малые и средние компании нуждались в таких же мощных
                ИИ-инструментах, как и крупные предприятия, но в более доступной
                форме.
              </p>
              <p>
                Два студента из общежития начали учёбу и заметили, что малым
                бизнесам не хватает доступных инструментов для автоматизации.
                Так появился SmartAssist — решение, которое помогает компаниям
                автоматизировать процессы и улучшать клиентский сервис.
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
          <h2 className="text-3xl font-space-grotesk font-bold text-center mb-12">
            Наша Команда
          </h2>
          <div className="flex justify-center flex-wrap gap-40">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center max-w-xs"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 text-center max-w-xs hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-[#ffffff]/20 rounded-full blur-xl "></div>

                  <a href={member.insta}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative rounded-full w-full h-full object-cover"
                    />
                  </a>
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
          <h2 className="text-3xl font-space-grotesk font-bold text-center mb-12">
            Наши Ценности
          </h2>
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
                <h3 className="text-xl font-semibold text-center mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

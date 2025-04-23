"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Brain,
  ArrowRight,
  Bot,
  Zap,
  ChartBar,
  Users,
  MessageSquare,
  BarChart3,
  Clock,
  CheckCircle2,
  Rocket,
  Shield,
  Target,
} from "lucide-react";
import ContactForm from "@/components/contact-form";

export default function Home() {
  const scrollToFeatures = () => {
    const featuresSection = document.querySelector("#features");
    featuresSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToForm = () => {
    const formSection = document.querySelector("#contact");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff]/10 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ffffff]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#ffffff]/20 rounded-full blur-xl"></div>
                <Brain className="relative w-16 h-16 text-[#ffffff]" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-space-grotesk font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#ffffff]">
               Ваш ИИ-ассистент для продаж, поддержки и автоматизации CRM.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
            >
              SmartAssist помогает автоматизировать взаимодействие с клиентами, обрабатывать запросы мгновенно и развивать ваш бизнес 24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-[#ffffff] hover:bg-[#ffffff]/80 text-lg px-8 h-14 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300"
                onClick={scrollToForm}
              >
                Попробовать Демо Бесплатно
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToFeatures}
                className="border-[#2b2f38] hover:border-[#ffffff] text-lg px-8 h-14 transition-all duration-300"
              >
                Узнать, Как Работает
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div id="contact">
        <ContactForm />
      </div>

      {/* Features Section */}
      <section id="features" className="py-24 bg-[#0d0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold mb-4">
            Продвинутые возможности для вашего бизнеса
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
            Всё, что нужно для автоматизации бизнес-процессов и улучшения взаимодействия с клиентами.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Bot className="h-8 w-8 text-[#ffffff]" />,
                title: "Поддержка на базе ИИ",
                description:
                  "Интеллектуальная поддержка 24/7, которая учится и становится лучше со временем.",
              },
              {
                icon: <Zap className="h-8 w-8 text-[#ffffff]" />,
                title: "Автоматизация процессов",
                description:
                  "Оптимизируйте рутинные задачи и процессы с помощью умной автоматизации.",
              },
              {
                icon: <ChartBar className="h-8 w-8 text-[#ffffff]" />,
                title: "Аналитика и инсайты",
                description:
                  "Аналитика на основе данных для обоснованных бизнес-решений.",
              },
              {
                icon: <Users className="h-8 w-8 text-[#ffffff]" />,
                title: "Совместная работа команды",
                description:
                  "Повышение продуктивности команды с помощью встроенных инструментов для совместной работы.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-[#2b2f38]/50 backdrop-blur-lg rounded-xl p-6 border border-[#2b2f38] hover:border-[#ffffff]/50 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-[#0d0f14]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold mb-4">
              Как работает SmartAssist
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Начните с SmartAssist всего за три простых шага
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="h-12 w-12 text-[#ffffff]" />,
                title: "Быстрая настройка",
                description:
                  "Подключите SmartAssist к вашим текущим инструментам и системам за считанные минуты.",
              },
              {
                icon: <Shield className="h-12 w-12 text-[#ffffff]" />,
                title: "Безопасная интеграция",
                description:
                  "Ваши данные зашифрованы и защищены на уровне корпоративной безопасности.",
              },
              {
                icon: <Target className="h-12 w-12 text-[#ffffff]" />,
                title: "Начните автоматизацию",
                description:
                  "Смотрите, как SmartAssist автоматически оптимизирует ваши бизнес-процессы.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative text-center p-6"
              >
                <div className="flex justify-center mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#ffffff] h-8 w-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#0d0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold mb-4">
              Почему выбирают SmartAssist
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Лидерская производительность и надёжность в отрасли
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-8 w-8 text-[#ffffff]" />,
                metric: "1s",
                title: "Время Ответа",
                description:
                  "Молниеносные автоматические ответы на запросы клиентов",
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-[#ffffff]" />,
                metric: "80%",
                title: "Уровень Автоматизации",
                description: "Рутинные задачи автоматизируются, экономя ваше драгоценное время",
              },
              {
                icon: <Clock className="h-8 w-8 text-[#ffffff]" />,
                metric: "24/7",
                title: "Доступность",
                description: "Круглосуточная поддержка клиентов и автоматизация",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-8 bg-[#2b2f38]/30 rounded-xl border border-[#2b2f38]"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <div className="text-4xl font-bold text-[#ffffff] mb-2">
                  {benefit.metric}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#0d0f14]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold mb-4">
              Нам доверяют лидеры отрасли
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Узнайте, что говорят наши клиенты о SmartAssist
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "SmartAssist has transformed how we handle customer support. Response times are down 80% and customer satisfaction is up.",
                author: "Sarah Johnson",
                role: "Customer Success Manager",
                company: "TechCorp",
              },
              {
                quote:
                  "The automation capabilities are incredible. We've saved countless hours on routine tasks and can focus on strategic initiatives.",
                author: "Michael Chen",
                role: "Operations Director",
                company: "InnovateX",
              },
              {
                quote:
                  "Implementation was seamless and the results were immediate. Our team loves how intuitive the platform is.",
                author: "Emily Rodriguez",
                role: "Head of Support",
                company: "GrowthLabs",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-[#2b2f38]/30 p-6 rounded-xl border border-[#2b2f38]"
              >
                <div className="mb-4">
                  <CheckCircle2 className="h-8 w-8 text-[#ffffff]" />
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-[#ffffff]">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-[#0d0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold mb-4">
              Готовы Преобразить Свой Бизнес?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Присоединяйтесь к тысячам компаний, которые уже используют SmartAssist для автоматизации процессов и повышения удовлетворённости клиентов.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-[#ffffff] hover:bg-[#ffffff]/80"
                onClick={scrollToForm}
              >
                Начать Сейчас
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#2b2f38]">
                Запланировать Демонстрацию
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

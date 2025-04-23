"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
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
    <div className="max-w-xl mx-auto bg-[#111418] border border-[#2b2f38] rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Связаться с нами
      </h2>
      {submitted ? (
        <div className="flex items-center justify-center text-green-400 gap-2">
          <CheckCircle2 className="w-6 h-6" />
          <p>Спасибо! Мы свяжемся с вами в ближайшее время.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              name="name"
              type="text"
              placeholder="Ваше имя"
              required
              onChange={handleChange}
              className="w-full rounded-xl bg-[#1c1f24] text-white border border-[#333] px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition"
            />
          </div>
          <div>
            <input
              name="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              required
              onChange={handleChange}
              className="w-full rounded-xl bg-[#1c1f24] text-white border border-[#333] px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Сообщение"
              required
              rows={5}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#1c1f24] text-white border border-[#333] px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#ffffff] text-[#0d0f14] text-lg font-medium py-3 rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:bg-[#ffffff]/90 transition-all duration-300 shadow-[0_0_12px_rgba(255,255,255,0.4)]"
          >
            Отправить
          </button>
        </form>
      )}
    </div>
  );
}

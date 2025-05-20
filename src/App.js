import React from "react";
import { motion } from "framer-motion";
import { FaGamepad, FaUsers, FaTrophy } from "react-icons/fa";

const CyberDenLanding = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="flex justify-between items-center p-6 bg-gray-900 shadow-md">
        <div className="flex items-center gap-3">
          <img src="/cyberden-logo.png" alt="CyberDen Logo" className="h-10 w-10" />
          <h1 className="text-2xl font-bold tracking-wide">CyberDen</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-lg">
          <a href="#features" className="hover:text-cyan-400">О клубе</a>
          <a href="#gallery" className="hover:text-cyan-400">Фото</a>
          <a href="#contact" className="hover:text-cyan-400">Контакты</a>
        </nav>
      </header>

      <motion.section
        className="flex flex-col items-center text-center py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold mb-4">Добро пожаловать в CyberDen</h2>
        <p className="text-lg text-gray-300 max-w-xl">
          Лучший киберклуб в городе: новейшие ПК, комфортные кресла и атмосфера настоящих чемпионов.
        </p>
        <a href="#contact" className="mt-8 px-6 py-3 bg-cyan-500 rounded-full text-lg hover:bg-cyan-600 transition">
          Забронировать место
        </a>
      </motion.section>

      <section id="features" className="py-20 bg-gray-950 text-center">
        <h3 className="text-3xl font-bold mb-10">Почему выбирают нас</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <FaGamepad className="text-cyan-400 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Топовое оборудование</h4>
            <p className="text-gray-400 mt-2">RTX 4080, 240Hz мониторы, механические клавиатуры.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <FaUsers className="text-cyan-400 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Дружелюбная атмосфера</h4>
            <p className="text-gray-400 mt-2">Идеально как для соло-игроков, так и для командных баталий.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <FaTrophy className="text-cyan-400 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Регулярные турниры</h4>
            <p className="text-gray-400 mt-2">Призы, рейтинги, трансляции и незабываемые эмоции.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black py-20 text-center px-4">
        <h3 className="text-3xl font-bold mb-6">Свяжись с нами</h3>
        <p className="text-gray-400 mb-4">г. Москва, ул. Киберспортсменов, д. 5</p>
        <p className="text-gray-400 mb-4">Телефон: +7 (999) 123-45-67</p>
        <p className="text-gray-400">Email: info@cyberden.ru</p>
      </section>

      <footer className="bg-gray-900 text-gray-500 text-center py-6">
        © 2025 CyberDen. Все права защищены.
      </footer>
    </div>
  );
};

export default CyberDenLanding;

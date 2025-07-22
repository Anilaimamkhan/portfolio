import React from "react";
// import { Button } from '@/components/ui/button';
// import resumePDF from '../assets/anilabano.pdf';
import resumePDF from "../assets/anilabano.pdf"


const projects = [
  {
    title: "Calculator",
    url: "https://anilaimamkhan.github.io/calculator/",
  },
  {
    title: "Login / Signup Form",
    url: "https://anilaimamkhan.github.io/loginsignupform/",
  },
  {
    title: "Todo App",
    url: "https://anilaimamkhan.github.io/todo/",
  },
  {
    title: "Tic Tac Toe",
    url: "https://anilaimamkhan.github.io/tictactoe/",
  },
  {
    title: "Redux Toolkit E-Commerce ",
    url: "https://anilaimamkhan.github.io/redux-toolkit-e-commerce-project/",
  },
  {
    title: " E-Commerce Shop Redux Toolkit",
    url: "https://anilaimamkhan.github.io/e-commerce-shop/",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 p-6 text-center">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">
          Anila Bano
        </h1>
        <p className="text-gray-600 text-lg">
          React Developer 
        </p>
        <a
          href="https://github.com/anilaimamkhan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline block mt-2"
        >
          Visit my GitHub
        </a>
        <a
          href={resumePDF}
          target="_blank"
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700"
        >
          Download Resume
        </a>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition-transform hover:-translate-y-1"
          >
            <h2 className="text-[16px] font-semibold text-gray-800 mb-2">
              {project.title}
            </h2>
            <a
              href={project.url}
              target="_blank"
              className="text-blue-500 hover:underline text-sm"  
              rel="noopener noreferrer"
          
            >
              Visit Project ↗
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

'use client'
import React, { useState } from "react";
import FadeIn from "../app/animations/Fadein";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqData = [
  {
    question: "What Is AIMug Generative AI Tool?",
    answer:
      "AIMug is an advanced AI-powered tool designed to create engaging and intelligent content with ease.AIMug is an advanced AI-powered tool designed to create engaging and intelligent content with ease.AIMug is an advanced AI-powered tool designed to create engaging and intelligent content with ease.AIMug is an advanced AI-powered tool designed to create engaging and intelligent content with ease.AIMug is an advanced AI-powered tool designed to create engaging and intelligent content with ease.",
  },
  {
    question: "How Does AIMug Work?",
    answer:
      "AIMug uses state-of-the-art AI algorithms to generate personalized and relevant content based on user input.",
  },
  {
    question: "Can I Customize the Output?",
    answer:
      "Yes, AIMug allows you to customize outputs to match your desired tone, style, and format.",
  },
  {
    question: "Is AIMug Free to Use?",
    answer:
      "AIMug offers both free and premium plans, providing flexibility to suit different user needs.",
  },
  {
    question: "What Makes AIMug Unique?",
    answer:
      "AIMug stands out with its powerful AI models and intuitive user interface, making content creation effortless.",
  },
  {
    question: "Does AIMug Support Multiple Languages?",
    answer: "Yes, AIMug supports multiple languages for a global audience.",
  },
  {
    question: "Is AIMug Secure?",
    answer: "AIMug prioritizes security, ensuring your data is safe and private.",
  },
  {
    question: "How Can I Get Started with AIMug?",
    answer:
      "Simply sign up, explore the features, and start generating AI-powered content in no time.",
  },
];

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FadeIn>
      <div className="container flex flex-col gap-4 p-4">
        {/* Başlık */}
        <div className="w-full flex-col my-10 gap-4 text-center justify-center items-center flex">
          <strong className="text-primary text-sm">Frequently Asked Questions</strong>
          <h1 className="text-2xl font-bold">
            Questions About our AIMug? ​​​​​​​We have Answers!
          </h1>
        </div>

        {/* Sorular */}
        <div className="flex flex-col gap-4 grid grid-cols-1 lg:grid-cols-2">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border rounded-md bg-base-200 px-4 py-3 "
            >
              <div
                onClick={() => toggleCollapse(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <span className="text-sm font-medium">{faq.question}</span>
                <span>
                  {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all ease-in-out duration-300 ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="mt-2 text-xs text-gray-700">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

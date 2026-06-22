"use client";

import { useState } from "react";

const faqs = [
  ["Is the English Fluency Workshop really free?", "Yes, the workshop is completely free to attend. You just need to register and reserve your seat."],
  ["Who is this workshop for?", "This workshop is for students, job seekers, working professionals, business owners, and anyone who understands English but feels nervous or stuck while speaking."],
  ["What will I learn inside the workshop?", "You’ll learn simple techniques to speak English with more confidence, reduce hesitation, improve daily conversation, and practice English in a better way."],
  ["Do I need to be good at English to join?", "No. This workshop is beginner-friendly. Even if your English is basic, you can join and learn step by step."],
  ["How long will the workshop be?", "The workshop will be around 90 minutes. Please join on time so you don’t miss the important parts."],
  ["What happens after I fill up the form?", "After filling up the form, you’ll be redirected to the thank you page where you can watch a short video and join the WhatsApp group for reminders and updates."],
  ["Will this workshop help me speak English confidently?", "Yes. The workshop is designed to help you understand what is stopping you from speaking and how to start improving your fluency with simple daily practice."],
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto mt-8 grid max-w-5xl gap-3 text-left md:grid-cols-2 md:gap-4">
      {faqs.map(([question, answer], index) => {
        const isOpen = index === openIndex;
        return (
          <div key={question} className="overflow-hidden rounded-2xl border border-[#dce6f8] bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="font-outfit flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-bold text-black sm:px-6"
            >
              <span>{question}</span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8f0ff] text-xl font-normal text-[#1149a6]">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="border-t border-[#e9eef8] px-5 py-4 text-sm leading-6 text-black/70 sm:px-6">{answer}</p>}
          </div>
        );
      })}
    </div>
  );
}

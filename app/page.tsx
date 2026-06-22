import { DateTimeBadge } from "@/components/DateTimeBadge";
import { FaqSection } from "@/components/FaqSection";
import { FlodeskForm } from "@/components/FlodeskForm";
import { LogoHeader } from "@/components/LogoHeader";

const benefits = [
  { icon: "💬", title: "How to speak English without overthinking every sentence" },
  { icon: "⚡", title: "How to reduce nervousness while speaking" },
  { icon: "✍️", title: "How to form simple and natural English sentences" },
  { icon: "🗣️", title: "How to improve daily-life conversation" },
  { icon: "🎯", title: "How to practice English even if you don’t have a speaking partner" },
  { icon: "🌟", title: "How to build confidence step by step" },
];

const steps = [
  "Fill up the form",
  "Reserve your free seat",
  "Join the WhatsApp group for reminders and workshop updates",
  "Attend the live English Fluency Workshop",
  "Learn simple techniques to speak English more confidently for FREE",
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-outfit mx-auto max-w-2xl text-3xl font-extrabold leading-[1.16] tracking-[0.005em] text-black sm:text-4xl">{children}</h2>;
}

export default function HomePage() {
  return (
    <main className="page-shell px-4 py-7 sm:px-8 lg:px-12 lg:py-10">
      <div className="ambient-orb -left-24 top-24 h-80 w-80 bg-[#cbdcff]/70" />
      <div className="ambient-orb -right-28 top-[28%] h-96 w-96 bg-[#ffd7d9]/65" />
      <div className="relative mx-auto max-w-6xl">
      <section className="mx-auto max-w-2xl text-center">
        <LogoHeader />
        <div className="mt-7 sm:mt-9"><DateTimeBadge /></div>
        <h1 className="font-outfit mx-auto mt-7 max-w-2xl text-[2.25rem] font-extrabold leading-[1.14] tracking-[-0.01em] text-black sm:mt-9 sm:text-5xl sm:leading-[1.1] lg:text-6xl">
          Speak English Confidently in Daily Life
        </h1>
        <p className="font-outfit mt-5 text-base font-bold text-[#ef2029] sm:text-lg">Join the FREE English Fluency Workshop</p>
        <p className="font-outfit mx-auto mt-4 max-w-xl text-base leading-7 text-black/75 sm:text-lg sm:leading-8">
          If you understand English but feel nervous while speaking, this workshop will help you learn simple techniques to speak more confidently, form better sentences, and improve your daily conversation.
        </p>
        <a href="#reserve-seat" className="font-poppins mx-auto mt-8 block w-full rounded-2xl bg-[#1149a6] px-5 py-4 text-base font-extrabold text-white shadow-[0_14px_28px_-10px_rgba(17,73,166,0.8)] transition hover:-translate-y-0.5 hover:bg-[#0e3e8f] sm:max-w-[390px]">Reserve My FREE Seat <span aria-hidden="true">→</span></a>
        <p className="font-outfit mx-auto mt-4 w-fit rounded-xl border border-[#ffc9cd] bg-[#fff1f2] px-4 py-2.5 text-sm font-bold text-[#c61f29]">Only 67 seats remaining... Hurry up!</p>
      </section>

      <section className="relative mt-24 overflow-hidden rounded-[2rem] border border-[#d5e1fa] bg-white px-5 py-10 text-center shadow-premium sm:mt-28 sm:px-12 sm:py-14">
        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border-[22px] border-[#ef2029]/20" />
        <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full border-[20px] border-[#1149a6]/15" />
        <div className="relative">
        <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-[#fff0f1] px-4 py-2"><span className="text-lg">💡</span><p className="font-outfit text-sm font-bold uppercase tracking-[0.12em] text-[#ef2029]">You are not alone</p></div>
        <h2 className="font-outfit mx-auto max-w-2xl text-3xl font-extrabold leading-[1.16] tracking-[0.005em] text-black sm:text-4xl">English is in your mind. Let’s make it come out naturally.</h2>
        <div className="font-outfit mx-auto mt-7 max-w-2xl space-y-4 text-[15px] leading-7 text-black/70 sm:text-base">
          <p>Do you understand English but still feel nervous when it’s time to speak?</p>
          <p>Maybe you know the words, but your mind goes blank. Maybe you worry about grammar mistakes, pronunciation, or what other people will think.</p>
          <p className="font-semibold text-black">That’s exactly why this workshop is created.</p>
          <p>Inside this free English Fluency Workshop, you’ll learn simple and practical steps to speak English with more confidence, improve daily conversation, and stop feeling stuck while speaking.</p>
        </div>
        </div>
      </section>

      <section className="relative mt-20 text-center sm:mt-28">
        <SectionTitle>What You’ll Learn Inside This Free Workshop</SectionTitle>
        <p className="font-outfit mx-auto mt-4 max-w-lg text-base leading-7 text-black/65">Simple ideas you can start using in your conversations from day one.</p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article key={benefit.title} className="group relative overflow-hidden rounded-3xl border border-[#dce6f8] bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
              <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl ${index % 2 === 0 ? "bg-[#e8f0ff]" : "bg-[#fff0f1]"}`}>{benefit.icon}</span>
              <span className={`absolute right-5 top-5 text-sm font-extrabold ${index % 2 === 0 ? "text-[#1149a6]" : "text-[#ef2029]"}`}>0{index + 1}</span>
              <p className="font-outfit mt-5 text-base font-normal leading-6 text-black">{benefit.title}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mt-20 rounded-[2rem] border border-[#dce6f8] bg-white/75 px-5 py-10 text-center sm:mt-28 sm:px-10 sm:py-14">
        <SectionTitle>How The Free Workshop Works</SectionTitle>
        <div className="mx-auto mt-9 grid max-w-5xl gap-3 text-left sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step} className="rounded-2xl bg-[#f5f8ff] p-5 text-center">
              <span className="font-outfit mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#1149a6] text-sm font-extrabold text-white">{index + 1}</span>
              <p className="font-outfit mt-4 text-[15px] font-normal leading-6 text-black">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mt-20 text-center sm:mt-28">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FaqSection />
      </section>

      <section id="reserve-seat" className="relative mx-auto mt-20 max-w-[580px] scroll-mt-6 text-center sm:mt-28">
        <p className="font-outfit mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#ef2029]">Your next step</p>
        <SectionTitle>Reserve Your FREE Seat Now</SectionTitle>
        <p className="font-outfit mx-auto mt-3 max-w-md text-base leading-6 text-black/70">Fill up the form below to join the free English Fluency Workshop.</p>
        <div className="mt-6"><FlodeskForm /></div>
      </section>
      </div>
    </main>
  );
}

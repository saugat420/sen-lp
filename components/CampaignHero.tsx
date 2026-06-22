import { DateTimeBadge } from "@/components/DateTimeBadge";
import { LogoHeader } from "@/components/LogoHeader";

export function CampaignHero() {
  return (
    <main className="page-shell flex items-start justify-center px-4 py-7 sm:px-8 lg:px-12 lg:py-10">
      <div className="ambient-orb -left-24 top-24 h-80 w-80 bg-[#cbdcff]/70" />
      <div className="ambient-orb -right-28 top-[28%] h-96 w-96 bg-[#ffd7d9]/65" />
      <section className="relative mx-auto max-w-2xl text-center">
        <LogoHeader />
        <div className="mt-7 sm:mt-9"><DateTimeBadge /></div>
        <h1 className="font-outfit mx-auto mt-7 max-w-2xl text-[2.25rem] font-extrabold leading-[1.14] tracking-[-0.01em] text-black sm:mt-9 sm:text-5xl sm:leading-[1.1] lg:text-6xl">Speak English Confidently in Daily Life</h1>
        <p className="font-outfit mt-5 text-base font-bold text-[#ef2029] sm:text-lg">Join the FREE English Fluency Workshop</p>
        <p className="font-outfit mx-auto mt-4 max-w-xl text-base leading-7 text-black/75 sm:text-lg sm:leading-8">If you understand English but feel nervous while speaking, this workshop will help you learn simple techniques to speak more confidently, form better sentences, and improve your daily conversation.</p>
        <a href="/#reserve-seat" className="font-poppins mx-auto mt-8 block w-full rounded-2xl bg-[#1149a6] px-5 py-4 text-base font-extrabold text-white shadow-[0_14px_28px_-10px_rgba(17,73,166,0.8)] transition hover:-translate-y-0.5 hover:bg-[#0e3e8f] sm:max-w-[390px]">Reserve My FREE Seat <span aria-hidden="true">→</span></a>
        <p className="font-outfit mx-auto mt-4 w-fit rounded-xl border border-[#ffc9cd] bg-[#fff1f2] px-4 py-2.5 text-sm font-bold text-[#c61f29]">Only 67 seats remaining... Hurry up!</p>
      </section>
    </main>
  );
}

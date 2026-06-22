import { LogoHeader } from "@/components/LogoHeader";
import { workshop } from "@/lib/workshop";

export default function WhatsAppGroupPage() {
  return (
    <main className="page-shell flex items-start justify-center">
      <div className="ambient-orb -left-28 top-28 h-72 w-72 bg-[#cbdcff]/65" />
      <div className="ambient-orb -right-28 bottom-12 h-72 w-72 bg-[#ffd7d9]/60" />
      <section className="content-wrap max-w-xl text-center">
        <LogoHeader />
        <div className="mt-9 rounded-3xl border border-[#dbe5fa] bg-white/85 p-6 shadow-premium backdrop-blur sm:p-9">
          <p className="text-3xl" aria-hidden="true">⚠️</p>
          <h1 className="font-outfit mt-3 text-3xl font-extrabold tracking-[-0.01em] text-[#ef2029] sm:text-4xl">Must join group</h1>
          <p className="font-outfit mx-auto mt-4 max-w-md text-[15px] leading-7 text-black/75">Join our official WhatsApp group to receive the workshop link, reminders, and important updates.</p>
          <a href={workshop.whatsappGroupLink} target="_blank" rel="noreferrer" className="font-outfit mx-auto mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_22px_-12px_rgba(37,211,102,0.9)] transition hover:-translate-y-0.5 hover:bg-[#1ebc5a]">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M12.04 2a9.75 9.75 0 0 0-8.33 14.82L2 22l5.33-1.66A9.96 9.96 0 1 0 12.04 2Zm0 17.97a8.16 8.16 0 0 1-4.15-1.13l-.3-.18-3.16.98 1.03-3.06-.2-.32a8.1 8.1 0 1 1 6.78 3.71Zm4.46-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.64-1.19-1.43-1.33-1.67-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.19-.46-.39-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.65.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" /></svg>
            Join WhatsApp Group
          </a>
        </div>
      </section>
    </main>
  );
}

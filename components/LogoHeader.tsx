import Image from "next/image";
import { workshop } from "@/lib/workshop";

export function LogoHeader() {
  return (
    <header className="mb-5 flex justify-center sm:mb-6">
      <Image
        src={workshop.logoPath}
        alt="Spoken English Nepal"
        width={410}
        height={130}
        priority
        className="h-auto w-[180px] sm:w-[205px]"
      />
    </header>
  );
}

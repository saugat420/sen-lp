import { CampaignHero } from "@/components/CampaignHero";
import { notFound } from "next/navigation";

const channels = ["whatsapp", "workshop-workflow", "email", "facebook-group", "instagram", "facebook", "tiktok"];

export function generateStaticParams() {
  return channels.map((channel) => ({ channel }));
}

export default function CampaignPage({ params }: { params: { channel: string } }) {
  if (!channels.includes(params.channel)) notFound();
  return <CampaignHero />;
}

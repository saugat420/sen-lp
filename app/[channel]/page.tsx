import { CampaignHero } from "@/components/CampaignHero";
import { campaignZoomLinks } from "@/lib/workshop";
import { notFound } from "next/navigation";

const channels = Object.keys(campaignZoomLinks) as Array<keyof typeof campaignZoomLinks>;

export function generateStaticParams() {
  return channels.map((channel) => ({ channel }));
}

export default function CampaignPage({ params }: { params: { channel: string } }) {
  if (!channels.includes(params.channel as keyof typeof campaignZoomLinks)) notFound();
  return <CampaignHero registrationLink={campaignZoomLinks[params.channel as keyof typeof campaignZoomLinks]} />;
}

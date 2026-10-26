import CommunityHero from "@/components/sections/community/CommunityHero";
import Foundations from "@/components/sections/community/Foundations";
import Join from "@/components/sections/community/Join";
import Programs from "@/components/sections/community/Programs";
import Showcase from "@/components/sections/community/Showcase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills Synergy community",
  description:
    "Soft skills, corporate grooming, personality development and 1:1 coaching with Shuchi Purohit. Join the Skills Synergy community.",
};

export default function Community() {
  return (
    <>
      <CommunityHero />
      <Foundations />
      <Programs />
      <Showcase />
      <Join />
    </>
  );
}

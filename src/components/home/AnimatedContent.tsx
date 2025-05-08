"use client";

import { ProfileData } from "@/types/project";
import ProfileSection from "@/components/profile/ProfileSection";
import CategoryNavigation from "@/components/navigation/CategoryNavigation";
import SocialLinks from "@/components/social/SocialLinks";
import { motion } from "framer-motion";

interface Props {
  data: ProfileData;
}

export default function AnimatedContent({ data }: Props) {
  const { profile, sns, categorys } = data;

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <ProfileSection profile={profile} />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <CategoryNavigation categories={categorys} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <SocialLinks socialLinks={sns} />
      </motion.div>
    </main>
  );
}

import Image from "next/image";
import { Profile } from "@/types/project";

type Props = {
  profile: Profile;
};

const ProfileSection = ({ profile }: Props) => {
  return (
    <div className="text-center mb-12 bg-background text-foreground">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
        <Image src={profile?.profile_img} alt="Profile" width={128} height={128} className="object-cover" priority />
      </div>
      <h1 className="text-3xl font-bold mb-2 text-foreground">{profile?.name}</h1>
      <p className="text-lg mb-4 text-gray-500">@{profile?.nickname}</p>
      <p className="max-w-lg mx-auto whitespace-pre-line text-foreground/80">{profile?.profile_desc}</p>
    </div>
  );
};

export default ProfileSection;

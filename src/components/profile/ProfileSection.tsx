import Image from "next/image";
import { Profile } from "@/types/project";

type Props = {
  profile: Profile;
};

const ProfileSection = ({ profile }: Props) => {
  return (
    <div className="text-center mb-12">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
        <Image src={profile?.profile_img} alt="Profile" width={128} height={128} className="object-cover" priority />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{profile?.name}</h1>
      <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">@{profile?.nickname}</p>
      <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto whitespace-pre-line">{profile?.profile_desc}</p>
    </div>
  );
};

export default ProfileSection;

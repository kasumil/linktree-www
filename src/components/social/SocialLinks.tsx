import { SNS } from "@/types/project";
import SocialComponents from "@/components/social/SocialComponents";

type Props = {
  socialLinks: SNS[];
}

const SocialLinks = ({ socialLinks }: Props) => {
  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map((snsItem, index) => (
        <SocialComponents key={`sns-${index}`} sns={snsItem} />
      ))}
    </div>
  );
};

export default SocialLinks; 
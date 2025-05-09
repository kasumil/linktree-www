export type Category = {
  id: number;
  category_title: string;
  category_desc: string;
};

export type Project = {
  id: number;
  category_id?: number;
  title: string;
  description: string;
  period?: string;
  techStack?: {
    id: number;
    name: string
  }[];
  content?: string;
  githubUrl?: string;
  link?: string;
  link_show?: number;
  img_sort?: number;
  role?: string;
  media?: { media_type: string; media_url: string }[];
};


export type SNS = {
  sns_url: string;
  sns?: string | undefined;
};

export type Profile = {
  name: string;
  nickname: string;
  profile_img: string;
  profile_desc: string;
};

export type ProfileData = {
  profile: Profile;
  sns: SNS[];
  categorys: Category[];
};

export type ProjectModalProps = {
  project: Project | null;
  isOpen: boolean;
  onOpen?: (project: Project) => void;
  onClose: () => void;
};

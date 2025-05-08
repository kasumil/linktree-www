export interface Career {
    id: number;
    company_name: string;
    position: string;
    period: string;
    tasks: string[];
}

export interface Skill {
    id: number;
    category_name: string;
    items: string[];
}

export interface Education {
    id: number;
    institution_name: string;
    course_name: string;
    period: string;
    description: string;
}

export interface Certification {
    id: number;
    name: string;
    issuer: string;
    issue_date: string;
    description: string;
}

export interface ResumeData {
    career: Career[];
    skills: Skill[];
    education: Education[];
    certifications: Certification[];
} 
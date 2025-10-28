import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export interface Profile {
    id: number;
    fullName: string;
    title: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    linkedInUrl: string;
    gitHubUrl: string;
    imageUrl: string;
    cvUrl: string;
}

export interface Education {
    id: number;
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string; // ISO string
    endDate: string; // ISO string
}

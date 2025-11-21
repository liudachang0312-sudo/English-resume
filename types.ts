export enum Language {
  CN = 'zh',
  EN = 'en',
}

export interface LocalizedString {
  zh: string;
  en: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: LocalizedString;
  politicalStatus?: LocalizedString;
  birthDate: string;
}

export interface EducationItem {
  id: string;
  school: LocalizedString;
  degree: LocalizedString;
  major: LocalizedString;
  period: string;
  achievements?: LocalizedString[];
}

export interface WorkExperienceItem {
  id: string;
  company: LocalizedString;
  position: LocalizedString;
  period: string;
  responsibilities: LocalizedString[];
  description?: LocalizedString;
}

export interface ResumeData {
  name: LocalizedString;
  title: LocalizedString;
  summary: LocalizedString;
  contact: ContactInfo;
  skills: LocalizedString[];
  education: EducationItem[];
  workExperience: WorkExperienceItem[];
  projects?: WorkExperienceItem[];
}

// TODO: Consider splitting this up into multiple files?

export interface IExperience {
    ID: number;
    Type: string;
    Name: string;
    Team?: string;
    Title: string;
    Interval: Date[];
    Location: string;
    Description: string[];
    Skills: string[];
}

export interface IEducation {
    Degrees: string[];
    School: string;
    Interval: Date[];
}

export interface ILanguage {
    Language: string;
    Level: string;
}

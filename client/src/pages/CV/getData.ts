import cvJson from "../../assets/cv.json";
import { IExperience, ILanguage } from "./ICvData";

/**
 * Returns list of Dates converted directly from param list of strings
 * @param stringInterval string[] to be converted to date[]
 * @returns Date[] converted from stringInterval
 */
function stringsToDates(stringInterval: string[]): Date[] {
    let dateInterval: Date[] = [];
    for (let s of stringInterval) {
        let d = new Date(s);
        dateInterval.push(d);
    }
    return dateInterval;
}

/**
 * Reads in experience entries from JSON file and returns them in list
 * @returns IExperience list of work experiences in cv.json
 */
function getExperiences(): IExperience[] {
    let experiencesJson = cvJson.experiences;
    let experiencesList: IExperience[] = [];
    for (let e of experiencesJson) {
        let interval = stringsToDates(e.interval);
        let storeExp: IExperience = {
            Type: e.type,
            Name: e.name,
            Team: e.team,
            Title: e.title,
            Interval: interval,
            Location: e.location,
            Description: e.description,
            Skills: e.skills,
        };
        experiencesList.push(storeExp);
    }
    return experiencesList;
}

/**
 * Reads in citizenship entries from JSON file and returns them in list
 * @returns string[] of citizenships listed in CV
 */
function getCitizenship(): string[] {
    let citizenships: string[] = cvJson.general.citizenship;
    return citizenships;
}

/**
 * Reads in language entries from JSON file and returns them in list
 * @returns ILanguage[] of languages listed in CV
 */
function getLanguage(): ILanguage[] {
    let languagesJson = cvJson.general.languages;
    let languagesList: ILanguage[] = [];
    for (let l of languagesJson) {
        let storeLanguage: ILanguage = {
            Language: l.language,
            Level: l.level,
        };
        languagesList.push(storeLanguage);
    }
    return languagesList;
}

/**
 * Reads in contact entries from JSON file and returns them in list
 * @returns string[] of contact types listed in CV
 */
function getContact(): string[] {
    let contact: string[] = cvJson.general.contact;
    return contact;
}

export { getExperiences };

import { experiences } from "../../../data/experiences";
import { general } from "../../../data/general";
import { IExperience } from "../types/IExperience";
import { ILanguage } from "../types/ILanguage";
import { IEducation } from "../types/IEducation";

/**
 * Returns list of Dates converted directly from param list of strings
 * @param stringInterval string[] to be converted to date[]
 * @returns Date[] converted from stringInterval
 */
function stringListToDateList(stringInterval: string[]): Date[] {
    let dateInterval: Date[] = stringInterval.map((s) => new Date(s));
    return dateInterval;
}

/**
 * Reads in citizenship entries from JSON file and returns them in list
 * @returns string[] of citizenships listed in CV
 */
function getCitizenship(): string[] {
    let citizenships: string[] = general.citizenship;
    return citizenships;
}

/**
 * Reads in contact entries from JSON file and returns them in list
 * @returns string[] of contact types listed in CV
 */
function getContact(): string[] {
    let contact: string[] = general.contact;
    return contact;
}

/**
 * Reads in education entry in JSON file and returns it in IEducation
 * @returns IEducation of education stored in cv.json
 */
function getEducation(): IEducation {
    let educationJson = general.education;
    let interval = stringListToDateList(educationJson.interval);
    let newEducation: IEducation = {
        Degrees: educationJson.degrees,
        School: educationJson.school,
        Interval: interval,
    };
    return newEducation;
}

/**
 * Reads in experience entries from JSON file and returns them in list
 * @returns IExperience list of work experiences in cv.json
 */
function getExperiences(): IExperience[] {
    let experiencesList: IExperience[] = [];
    for (let e of experiences) {
        let interval = stringListToDateList(e.interval);
        let newExperience: IExperience = {
            ID: e.id,
            Type: e.type,
            Name: e.name,
            Team: e.team,
            Title: e.title,
            Interval: interval,
            Location: e.location,
            Description: e.description,
            Skills: e.skills,
        };
        experiencesList.push(newExperience);
    }
    return experiencesList;
}

/**
 * Reads in language entries from JSON file and returns them in list
 * @returns ILanguage[] of languages listed in CV
 */
function getLanguages(): ILanguage[] {
    let languagesJson = general.languages;
    let languagesList: ILanguage[] = [];
    for (let l of languagesJson) {
        let newLanguage: ILanguage = {
            Name: l.language,
            Level: l.level,
        };
        languagesList.push(newLanguage);
    }
    return languagesList;
}

export {
    getCitizenship,
    getContact,
    getEducation,
    getExperiences,
    getLanguages,
};

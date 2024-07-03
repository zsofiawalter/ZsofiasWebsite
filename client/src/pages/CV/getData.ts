import cvJson from "../../assets/cv.json";
import { IExperience } from "./IExperience";

/**
 * Returns date in format to be use in CV
 * @param s string in form to be converted to date
 * @returns string of month and year of date
 */
function formatDate(s: string) {
    if (typeof s == "string") {
        let dateList = new Date(s).toDateString().split(" ");
        let month = dateList[1];
        let year = dateList[3];
        return month + " " + year;
    } else {
        return "";
    }
}

// TODO: consider passing date into IExperience and formatting date into string later

/**
 * Reads in entries from JSON file and adds them to list
 * @returns IExperience list of work experiences in cv.json
 */
function getExperiences() {
    let experiencesJson = cvJson.experiences;
    let experiencesList: IExperience[] = [];
    for (let e of experiencesJson) {
        let storeExp: IExperience = {
            Type: e.type,
            Name: e.name,
            Team: e.team,
            Title: e.title,
            Start: formatDate(e.interval[0]),
            End: formatDate(e.interval[1]),
            Location: e.location,
            Description: e.description,
            Skills: e.skills,
        };
        experiencesList.push(storeExp);
    }
    return experiencesList;
}

export default getExperiences;

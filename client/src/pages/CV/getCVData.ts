import cvJson from "../../assets/cv.json";
import { IExperience } from "./IExperience";

/**
 * Define interfaces for enforcing data structure
 */

function formatDate(s: string | undefined) {
    if (typeof s == "string") {
        let dateList = new Date(s).toDateString().split(" ");
        let month = dateList[1];
        let year = dateList[3];
        let formattedDate = month + " " + year;
        return formattedDate;
    } else {
        return "";
    }
}

function getExperiences() {
    let cvExperiences = cvJson.experiences;
    let storeExperiences: IExperience[] = [];
    for (let e of cvExperiences) {
        let storeExp: IExperience = {
            Type: e.type,
            Name: e.name,
            Team: e.team,
            Title: e.description[0],
            Start: "e.interval[0]",
            End: "e.interval[1]",
            Location: "e.location",
            Description: e.description,
            Skills: e.skills,
        };
        storeExperiences.push(storeExp);
    }
    return storeExperiences;
}

export {};

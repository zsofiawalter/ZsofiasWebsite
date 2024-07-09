import { ILanguage } from "../types/ILanguage";

/**
 * Takes in ILanguage and returns string in format "LANGUAGE, LEVEL"
 * @param {ILanguage }l language data
 * @returns string in format "LANGUAGE, LEVEL"
 */
function formatLanguage(l: ILanguage): string {
    let formattedLanguage = l.Name + ", " + l.Level;
    return formattedLanguage;
}

/**
 * Takes in ILanguage[] and returns string[] of strings formatted by formatlLanguage()
 * @param {ILanguage[]} languageList
 * @returns string[] formatted by formatLanguage()
 */
function formatLanguages(languageList: ILanguage[]): string[] {
    let formattedLanguages = languageList.map((l) => formatLanguage(l));
    return formattedLanguages;
}

export { formatLanguages };

// TODO: Consider splitting this up into multiple files?

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

/**
 * Returns date in format to be use in CV
 * @param d Date
 * @returns string of date in format "MMM YYYY"
 */
function formatDate(d: Date): string {
    let dateList = d.toDateString().split(" ");
    let month = dateList[1];
    let year = dateList[3];
    let formattedDate = month + " " + year;
    return formattedDate;
}

/**
 * Takes in Date[] and returns string "START - END" formatted by formatDate()
 * @param dateList of start and end dates
 * @returns string version of formatted "START - END" formatted by formatDate()
 */
function formatInterval(dateList: Date[]): string {
    let start = formatDate(dateList[0]);
    let end = dateList[1] ? formatDate(dateList[1]) : "Present";
    let formattedInterval = start + " - " + end;
    return formattedInterval;
}

export { formatInterval };

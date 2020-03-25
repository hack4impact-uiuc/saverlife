export function monthToString(date) {
    switch (date.getMonth()) {
        case 0: return "January";
        case 1: return "Feburary";
        case 2: return "March";
        case 3: return "April";
        case 4: return "May";
        case 5: return "June";
        case 6: return "July";
        case 7: return "August";
        case 8: return "September";
        case 9: return "October";
        case 10: return "November";
    }

    return "December";
}

export function dayToString(date) {
    let day = date.getDate();

    if (day >= 10 && day <= 20)
        return day + "th";

    switch (day % 10) {
        case 1:
            return day + "st";
        
        case 2:
            return day + "nd";
        
        case 3:
            return day + "rd";
    }

    return day + "th";
}
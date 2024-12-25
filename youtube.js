function hideYoutubeOnWeekdays() {
    /**
     * Description: Sets the attribute for the first body tag
     *              to hidden between Sunday and Saturday (exclusive).
     * Special Notes:
     * Sunday is 0
     * Monday is 1
     * ...
     * Friday is 5
     * Saturday is 6
     **/
    const today = new Date()
    if (today.getDay() > 0 && today.getDay() < 6) {
        let body = document.getElementsByTagName("body");
        body[0].setAttribute("style", "display: none !important");
        console.log("\n\nAlert:\nToday is a weekday. Youtube will be re-enable on the weekends.\n\n\n");
    } else {
        console.log("\n\nAlert:\nCongratulations on making it to the weekend!\n\n\n");
    }
}

// Hide the body on weekdays.
hideYoutubeOnWeekdays();


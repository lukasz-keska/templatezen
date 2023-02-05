import eventpost from "../data/event/event.json";

// Event details
function getEvent(id) {
    return eventpost.filter(event => { return event.id === parseInt(id) })[0];
}
// Recent post
function changeToMonth(month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}
function setDemoDate() {
    var today = new Date();
    eventpost.slice(0, 4).map(post => {
        post.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000);
        // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
        // in the blog.json object
        post.postdate = `${today.getDate() - 2} ${changeToMonth(today.getMonth())}, ${today.getFullYear()}`;
        return post;
    });
}
function getRecentPost() {
    var elems = eventpost.filter(post => {
        return post.timestamp < new Date(post.postdate);
    });
    return elems;
}
setDemoDate();
function getDateInitial(string) {
    var names = string.split(' '),
        initials = '<span>' + names[0].substring(0, 2) + '</span>';

    if (names.length > 2) {
        initials += names[names.length - 2].substring(0, 3).toUpperCase();
    }
    return initials;
};
export { getEvent, getRecentPost, getDateInitial };
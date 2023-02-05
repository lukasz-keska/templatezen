import sermonpost from "../data/sermon/sermon.json";

// Sermon details
function getSermon(id) {
    return sermonpost.filter(sermon => { return sermon.id === parseInt(id) })[0];
}
// Recent post
function changeToMonth(month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}
function setDemoDate() {
    var today = new Date();
    sermonpost.slice(0, 4).map(post => {
        post.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000);
        // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
        // in the blog.json object
        post.postdate = `${today.getDate() - 2} ${changeToMonth(today.getMonth())}, ${today.getFullYear()}`;
        return post;
    });
}
function getRecentPost() {
    var elems = sermonpost.filter(post => {
        return post.timestamp < new Date(post.postdate);
    });
    return elems;
}
setDemoDate();
// Filter 
function getFilteredPosts(posts, filter = { tag: '', author: '' }) {
    var tagFilter = filter.tag !== undefined && filter.tag !== null && filter.tag !== '';
    var authorFilter = filter.author !== undefined && filter.author !== null && filter.author !== '';
    
    // Tag filter
    if (tagFilter) {
        posts = posts.filter(post => {
            return (post.tags !== undefined && post.tags !== null) && post.tags.includes(parseInt(filter.tag))
        })
    }
    // Author filter
    if (authorFilter) {
        posts = posts.filter(post => {
            return (post.author !== undefined && post.author !== null) && post.author.includes(parseInt(filter.author))
        })
    }
    return posts;
}
export { getSermon, getFilteredPosts, getRecentPost };
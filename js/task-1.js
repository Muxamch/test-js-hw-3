`use strict`;

function slugify(title) {
    let lowerCaseString = title.toLowerCase();
    let array = lowerCaseString.split(" ");
    let slug = array.join("-");
    return slug;
}

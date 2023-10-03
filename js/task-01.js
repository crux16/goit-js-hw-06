// targeting DOM which is the document/HTML, anywhere in DOM finding the ID name
const categories = document.getElementById('categories');

// finding children of the ID and collecting the number of children
const listCategory = categories.children;
console.log('Number of categories: ',listCategory.length);

// finding other list of all queries class from DOM
const lists = document.querySelectorAll('.item');

for (let i = 0; i < lists.length; i += 1) {

    // finding the firstElement which is the header 2 tag
    const title = lists[i].firstElementChild.textContent;

    // finding the last element which is the ul and counts the number of item
    const countElement = lists[i].lastElementChild.children.length;
    console.log(' ');
    console.log("Category: ", title );
    console.log("Element: ", countElement);
}
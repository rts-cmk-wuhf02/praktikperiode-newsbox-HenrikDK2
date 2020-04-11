let storage = JSON.parse(localStorage.getItem('articles'));
let defaultCategories = ['Sports', 'Health', 'World', 'Technology', 'Travel', 'Jobs', 'Business'];
let categories = JSON.parse(localStorage.getItem('categories'));
if (localStorage.getItem('categories') === null) {
  categories = defaultCategories;
}
categories.sort();

function storageFunction() {
  if (storage === null) storage = [];
}
const categoryList = document.getElementById('category-list');
let categories = []
storage.forEach(category => {
  categories.push(category.category);
})
categories = [...new Set(categories)];

document.addEventListener('DOMContentLoaded', () => {
  categories.forEach(category => {
    let clone = document.querySelector('#category-template').content.cloneNode(true)
    const articleList = clone.querySelector('.article-list');
    let list = document.querySelector('#category-list');

    storage.forEach(article => {
      if (article.category.toLowerCase() === category.toLowerCase()) {
        let articleClone = document.querySelector('#article-template').content.cloneNode(true);
        articleClone.querySelector('h3').textContent = article.title;
        articleClone.querySelector('p').textContent = article.desc;
        if (article.img) {
          articleClone.querySelector('img').src = article.img;
        }
        articleList.append(articleClone);
      }
    })


    clone.querySelector('.category').textContent = category;
    list.append(clone)
  })

  swiper();
  categoriesHideAndShow();
  storageFunction();
});
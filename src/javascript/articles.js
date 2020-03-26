const categoryList = document.getElementById('category-list');
let categories = ['Coronavirus (2019-nCoV)', 'Missing Persons', 'Movies', 'Computers and the Internet'];

document.addEventListener('DOMContentLoaded', async () => {
  const data = await rssToJson('https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml').then(res => res.rss.channel.item)
  data.forEach(article => {
    if (article.category) {
      article.category.forEach(category => {
        if (categories.includes(category.value)) {
          let clone = document.querySelector('#category-template').content.cloneNode(true);
          clone.querySelector('.category').textContent = category.value;
          categoryList.append(clone);
          categories.splice(categories.indexOf(category.value), 1)
        }

        const array = document.querySelectorAll('.category')
        for (let i = 0; i < array.length; i++) {
          if(category.value.includes(array[i].textContent)){
            const articleList = array[i].parentElement.parentElement.querySelector('.article-list');
            let clone = document.querySelector('#article-template').content.cloneNode(true);
            clone.querySelector('h3').textContent = article.title;
            clone.querySelector('p').textContent = article.description;
            if(article["media:content"]){
              clone.querySelector('img').src = article["media:content"].url;
            }
            articleList.append(clone);
          }
        }
      })
    }
  });

  storage();
  swiper();
  categoriesHideAndShow();
});
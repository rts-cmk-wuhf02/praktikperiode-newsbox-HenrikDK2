const categoryList = document.getElementById('category-list');

document.addEventListener('DOMContentLoaded', async () => {
  try {
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      const obj = await rssToJson(category).then(rss => rss.rss.channel);
      let clone = document.querySelector('#category-template').content.cloneNode(true)
      const articleList = clone.querySelector('.article-list');
      let list = document.querySelector('#category-list');
      toggleCategory(clone);
      
      for (let z = 0; z < obj.item.length; z++) {
        const article = obj.item[z];
        let articleClone = document.querySelector('#article-template').content.cloneNode(true);
        articleClone.querySelector('h3').textContent = article.title;
        articleClone.querySelector('p').textContent = article.description;
        if(article["media:content"]){
          articleClone.querySelector('img').src = article["media:content"].url;
        }
        articleList.append(articleClone);
      }
      
      clone.querySelector('.category').textContent = category;
      list.append(clone)
    }
    
    swiper();
    storageFunction();
    
    const articleBtns = document.querySelectorAll('.article-btn');
    articleBtns.forEach(btn => {
      sliderBtn(btn);
    })
  } catch (error) {
    console.log(error)
  }
});
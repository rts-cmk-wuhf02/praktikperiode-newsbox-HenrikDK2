function toggleCategory(clone){
  clone.querySelector('div').addEventListener('touchstart', e=>{
    const parent = e.currentTarget.parentElement;
    const icon = parent.querySelector('ion-icon');
    const articleList = parent.querySelector('.article-list');
    articleList.classList.toggle('hidden');

    if(articleList.classList.contains('hidden')){
      icon.name ="chevron-forward-outline";
    }else {
      articleList.classList.add("fadeIn", "animated");
      icon.name ="chevron-down-outline";
    } 
  })
}
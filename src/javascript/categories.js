function categoriesHideAndShow(){
  const categories = document.querySelectorAll('.categories');
  categories.forEach(category => {
    const div = category.querySelector('div')
    div.addEventListener('touchstart', e=>{
      const parent = e.currentTarget.parentElement;
      const icon = parent.querySelector('ion-icon');
      const articleList = parent.querySelector('.article-list');
      articleList.classList.toggle('hidden');
      
      if(articleList.classList.contains('hidden')){
        icon.name ="chevron-forward-outline";
      }else icon.name ="chevron-down-outline";
    })
  })
}
const ptr = PullToRefresh.init({
  mainElement: 'body',
  onRefresh() {
    categoryList.innerHTML ="";
    getArticles();
  }
});
const ptr = PullToRefresh.init({
  mainElement: 'body',
  iconArrow: `<div id="floatingCirclesG">
	<div class="f_circleG" id="frotateG_01"></div>
	<div class="f_circleG" id="frotateG_02"></div>
	<div class="f_circleG" id="frotateG_03"></div>
	<div class="f_circleG" id="frotateG_04"></div>
	<div class="f_circleG" id="frotateG_05"></div>
	<div class="f_circleG" id="frotateG_06"></div>
	<div class="f_circleG" id="frotateG_07"></div>
	<div class="f_circleG" id="frotateG_08"></div>
</div>`,
iconRefreshing:"<div><div>",
distReload:40,
instructionsReleaseToRefresh:"Release to refresh news",
  onRefresh() {
    categoryList.innerHTML = "";
    getArticles();
  }
});
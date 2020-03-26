function storage() {
  const articleBtns = document.querySelectorAll('.article-btn');
  let storage = localStorage.getItem('articles');

  if (storage === null) storage = [];

  articleBtns.forEach(btn => {
    const item = btn.offsetParent;
    btn.addEventListener('click', e => {
      const data = {
        title: item.querySelector('h3').textContent,
        desc: item.querySelector('p').textContent,
        img: item.querySelector('img').src,
      };

      localStorage.setItem('articles', storage.push(data));
    })
  })
}
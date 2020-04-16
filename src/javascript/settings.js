const btn = document.querySelectorAll('.btn');
const list = document.querySelector('.category-list');
document.getElementById('search').style.display = "none";

defaultCategories.forEach(category => {
  let clone = document.querySelector('#category-template').content.cloneNode(true);
  let hide = false;
  clone.querySelector('h3').textContent = category;
  if (categories.includes(category)) hide = true;
  if (hide === true) {
    clone.querySelector('.btn').classList.add('bg-enable');
    clone.querySelector('.btn').classList.remove('bg-disable');
    clone.querySelector('.btn').querySelector('div').style.transform  = "translateX(38px)";
  }
  clone.querySelector('.btn').addEventListener('touchstart', e => {
    if (hide === true) {
      e.currentTarget.classList.remove('bg-enable');
      e.currentTarget.classList.add('bg-disable');
      anime({
        targets: e.currentTarget.querySelector('div'),
        translateX:"2px",
        duration: 300
      })
      const index = categories.findIndex(x => x.toLowerCase() === category.toLowerCase());
      if (index > -1) {
        categories.splice(index, 1);
        localStorage.setItem('categories', JSON.stringify(categories))
      }
      hide = false;
    } else {
      e.currentTarget.classList.add('bg-enable');
      e.currentTarget.classList.remove('bg-disable');
      anime({
        targets: e.currentTarget.querySelector('div'),
        translateX:"38px",
        duration: 300
      })
      categories.push(category);
      localStorage.setItem('categories', JSON.stringify(categories))
      hide = true;
    }
  });
  list.append(clone)
})
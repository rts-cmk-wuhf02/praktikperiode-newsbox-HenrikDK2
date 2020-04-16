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
    clone.querySelector('.btn').querySelector('div').style.left = "38px";
  }
  clone.querySelector('.btn').addEventListener('touchstart', e => {
    if (hide === true) {
      e.currentTarget.classList.add('bg-disable');
      e.currentTarget.classList.remove('bg-enable');
      e.currentTarget.querySelector('div').classList.remove('slideInLeft');
      e.currentTarget.querySelector('div').classList.add('animated', 'slideInRight', 'fastest');
      e.currentTarget.querySelector('div').style.left = "2px";
      const index = categories.findIndex(x => x.toLowerCase() === category.toLowerCase());
      if (index > -1) {
        categories.splice(index, 1);
        localStorage.setItem('categories', JSON.stringify(categories))
      }
      hide = false;
    } else {
      e.currentTarget.classList.add('bg-enable');
      e.currentTarget.classList.remove('bg-disable');
      e.currentTarget.querySelector('div').classList.remove('slideInRight');
      e.currentTarget.querySelector('div').classList.add('animated', 'slideInLeft', 'fastest');
      e.currentTarget.querySelector('div').style.left = "38px"
      categories.push(category);
      localStorage.setItem('categories', JSON.stringify(categories))
      hide = true;
    }
  });
  list.append(clone)
})
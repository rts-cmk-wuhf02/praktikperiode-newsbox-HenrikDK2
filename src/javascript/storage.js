let storage = JSON.parse(localStorage.getItem('articles'));

function storageFunction() {
  const articleBtns = document.querySelectorAll('.article-btn');
  if (storage === null) storage = [];

  articleBtns.forEach(btn => {
    const item = btn.parentElement;
    const data = {
      category: item.parentElement.parentElement.querySelector('.category').textContent,
      title: item.querySelector('h3').textContent,
      desc: item.querySelector('p').textContent,
      img: item.querySelector('img').src,
    };

    if (storage.findIndex(x => x.title === data.title) >= 0) {
      btn.classList.add('bg-danger')
      btn.querySelector('ion-icon').name = "trash-outline";
    }

    btn.addEventListener('click', e => {
      if (storage.findIndex(x => x.title === data.title) >= 0) {
        const index = storage.findIndex(x => x.title === data.title);
        storage.splice(index, 1);
        localStorage.setItem('articles', JSON.stringify(storage));
        if (document.title === "Archive") {
          if (item.parentElement.childElementCount < 2) {
            item.parentElement.parentElement.remove();
          }
          item.remove();
        }

        btn.classList.remove('bg-danger')
        btn.querySelector('ion-icon').name = "file-tray-outline";
      } else {
        storage.push(data)
        localStorage.setItem('articles', JSON.stringify(storage));


        if (document.title === "Newsbox") {
          if (item.parentElement.childElementCount < 2) {
            item.parentElement.parentElement.remove();
          }
          item.remove();
        }
      }
    })
  })
}
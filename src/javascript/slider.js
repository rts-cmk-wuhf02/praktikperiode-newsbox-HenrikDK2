function swiper() {
  const articles = document.querySelectorAll('.article');
  const regex = /[-?\d]{0,}/gm;
  articles.forEach(article => {
    let left;
    let startX;
    article.addEventListener('touchstart', (e) => {
      left = e.currentTarget.style.left.match(regex)[0];
      startX = e.touches[0].screenX;
    })

    article.addEventListener('touchmove', (e) => {
      if (left === "") left = 0;
      let newX = (startX + parseInt(left)) - e.touches[0].screenX;

      if (newX < -110) {
        newX = -128;
      }

      if (newX > 0) {
        newX = 0;
      }
      article.style.left = newX + "PX";
    });
  });
}
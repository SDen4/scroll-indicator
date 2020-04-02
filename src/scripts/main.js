const wrapper = document.querySelector('.wrapper'),
      topline = document.querySelector('.toplinescroll'),
      currentWinWidth = parseInt(window.getComputedStyle(wrapper).width),
      totalScrollHeight = parseInt(document.body.scrollHeight - document.documentElement.clientHeight);

let currentY;

window.addEventListener('scroll', function() {
    currentY = window.pageYOffset;
    topline.style.width = (currentY/totalScrollHeight*currentWinWidth) + 'px';
});
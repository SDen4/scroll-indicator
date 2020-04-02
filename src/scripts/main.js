const wrapper = document.querySelector('.wrapper'),
      indicator = document.querySelector('.indicator'),
      currentWinWidth = parseInt(window.getComputedStyle(wrapper).width),
      totalScrollHeight = parseInt(document.body.scrollHeight - document.documentElement.clientHeight);

let currentY;

window.addEventListener('scroll', () => {
    currentY = window.pageYOffset;
    indicator.style.width = (currentY/totalScrollHeight*currentWinWidth) + 'px';
});
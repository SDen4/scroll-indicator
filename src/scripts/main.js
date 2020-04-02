const wrapper = document.querySelector('.wrapper'),
      topline = document.querySelector('.toplinescroll'),
      currentWinWidth = parseInt(window.getComputedStyle(wrapper).width),
      documentHeight = parseInt(document.body.scrollHeight - document.documentElement.clientHeight);

let currentY, lineWidth;

window.addEventListener('scroll', function() {
    currentY = window.pageYOffset;
    lineWidth = currentY/documentHeight*currentWinWidth;
    topline.style.width = lineWidth + 'px';
});
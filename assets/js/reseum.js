// 自我介紹內容動畫
var textWrapper = document.querySelector('.introduce');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.introduce .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 20 * (i+1)
  }).add({
    targets: '.introduce',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 100000
  });


//專案作品標題動畫
var textWrapper = document.querySelector('.project_title .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.project_title .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.project_title .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.project_title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 5000
  });
import anime from 'animejs/lib/anime.es';

const titleWrapper = document.querySelector('.title-animate');

titleWrapper.innerHTML = titleWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: '.title-animate .letter',
  opacity: [0, 1],
  easing: 'easeInOutQuad',
  duration: 1000,
  delay: (i) => 150 * (i + 1),
});

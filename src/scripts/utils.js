import anime from 'animejs/lib/anime.es';

const scaleUp = (element) => {
  anime({
    targets: element,
    scale: [0, 1],
    duration: 2000,
  });
};

const moveToRight = (element) => {
  anime
    .timeline({
      easing: 'easeOutExpo',
      duration: 750,
    })
    .add({
      targets: element,
      opacity: [0, 1],
      translateX: ['-0.5em', 0],
      easing: 'easeOutExpo',
      duration: 600,
      offset: '-=600',
    });
};

const strechToRight = (element) => {
  anime({
    targets: element,
    opacity: [0, 1],
    delay: 500,
    translateX: ['-5%', 0],
    easing: 'easeOutElastic(1, .2)',
  });
};

const translateY = (element) => {
  anime
    .timeline({
      delay: function (i) {
        return i * 100;
      },
      endDelay: 1000,
      easing: 'easeInOutQuad',
      // direction: "alternate",
    })
    .add(
      {
        targets: element,
        opacity: [0, 1],
        color: '#FFFDFA',
      },
      0
    );
};

// const counterIncrement = (element, { startCounter, limitCounter }) => {
//   //TODO: Continue here ...
// };

export { scaleUp, moveToRight, strechToRight, translateY };

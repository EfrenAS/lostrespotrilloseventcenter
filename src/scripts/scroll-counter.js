import anime from "animejs/lib/anime.es";

const titleWrapper = document.querySelector(".title-animate");

titleWrapper.innerHTML = titleWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".title-animate .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 1000,
  delay: (el, i) => 150 * (i + 1),
});

// import { increaseCounter } from "./increment-counter";

// const counters = document.querySelectorAll(".card-title .counter");
// const countersContainer = document.querySelector(".about-us");

// let isActivated = false;

// window.addEventListener("scroll", () => {
//   if (
//     window.pageYOffset >
//       countersContainer.offsetTop - countersContainer.offsetHeight - 200 &&
//     isActivated === false
//   ) {
//     counters.forEach((counter) => {
//       counter.innerText = 0;

//       increaseCounter(counter);

//       // let count = 0;
//       // function updateCount() {
//       //   const target = parseInt(counter.dataset.count);

//       //   if (count < target) {
//       //     count++;
//       //     counter.innerText = count;

//       //     setTimeout(updateCount, 100);
//       //   } else {
//       //     counter.innerText = target;
//       //   }
//       // }
//       // updateCount();
//       // isActivated = true;
//     });
//   } else if (
//     window.pageYOffset <
//       countersContainer.offsetTop - countersContainer.offsetHeight - 500 ||
//     (pageYOffset === 0 && isActivated === true)
//   ) {
//     counters.forEach((counter) => {
//       counter.innerText = 0;
//     });
//     isActivated = false;
//   }
// });

// // Si dividimos el 49 entre 1000 = 0
// // Si divimos enter 100 = 0
// // Si divimos entre 10 = 4
// // Si divimos entre 49 = 49

// // Si dividimos el 490. entre 1000 = 0
// // Si divimos enter 100 = 4
// // Si divimos entre 10 = 49
// // Si divimos entre 490 = 490

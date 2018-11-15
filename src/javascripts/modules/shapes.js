import 'gsap';

const triangle = document.querySelector('#triangle');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');

const masterTl = new TimelineMax({
  paused: true,
  repeat: -1,
  repeatDelay: 0.5
});

const triangleTl = new TimelineMax();

triangleTl
.timeScale(4)
.to(triangle, 0.5, {
  scaleX: 1.2,
  scaleY: 0.8,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyoEase: true,
  ease: Power1.easeIn
})
.to(triangle, 0.5, {
  y: -150,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyoEase: true,
  ease: Power1.easeOut
})
.to(triangle, 0.85, {
  rotation: 360,
  transformOrigin: "50% 66.66%",
  ease: Power1.easeInOut
}, "-=0.95")
.to(triangle, 0.5, {
  scaleX: 1.2,
  scaleY: 0.8,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyoEase: true,
  ease: Power1.easeOut
});

const squareTl = new TimelineMax();

squareTl
.timeScale(4)
.to(square, 0.5, {
  scaleX: 1.2,
  scaleY: 0.8,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyoEase: true,
  ease: Power1.easeIn
})
.to(square, 0.5, {
  y: -150,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyoEase: true,
  ease: Power1.easeOut
})
.to(square, 0.85, {
  rotation: 360,
  transformOrigin: "50% 50%",
  ease: Power1.easeInOut
}, "-=0.95")
.to(square, 0.5, {
  scaleX: 1.2,
  scaleY: 0.8,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyoEase: true,
  ease: Power1.easeOut
});

const circleTl = new TimelineMax();

circleTl
.timeScale(4)
.to(circle, 0.5, {
  scaleX: 1.2,
  scaleY: 0.8,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyoEase: true,
  ease: Power1.easeIn
})
.to(circle, 0.5, {
  y: -150,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyoEase: true,
  ease: Power1.easeOut
})
.to(circle, 0.5, {
  scaleX: 1.2,
  scaleY: 0.8,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyoEase: true,
  ease: Power1.easeOut
});

const shapes = {
  init() {
    masterTl.add([triangleTl, squareTl, circleTl], 0, "start", 0.2);
    masterTl.play();
  }
}

export { shapes }

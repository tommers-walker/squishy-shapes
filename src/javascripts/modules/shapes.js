import 'gsap';

const triangle = document.querySelector('#triangle');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');

const masterTl = new TimelineMax({
  paused: true,
  repeat: -1,
  repeatDelay: 0.5
})

const triangleTl = new TimelineMax({

});

triangleTl
.timeScale(3)
.to(triangle, 0.5, {
  scaleX: 1.25,
  scaleY: 0.75,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyo: true,
  ease: Power0.easeNone
})
.to(triangle, 0.5, {
  y: -100,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyo: true,
  ease: Power0.easeNone
})
.to(triangle, 0.85, {
  rotation: 360,
  transformOrigin: "50% 65%",
  ease: Power0.easeNone
}, "-=0.95")
.to(triangle, 0.5, {
  scaleX: 1.25,
  scaleY: 0.75,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyo: true,
  ease: Power0.easeNone
})

const squareTl = new TimelineMax({

})

squareTl
.timeScale(3)
.to(square, 0.5, {
  scaleX: 1.25,
  scaleY: 0.75,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyo: true,
  ease: Power0.easeNone
})
.to(square, 0.5, {
  y: -100,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyo: true,
  ease: Power0.easeNone
})
.to(square, 0.85, {
  rotation: 360,
  transformOrigin: "50% 50%",
  ease: Power0.easeNone
}, "-=0.95")
.to(square, 0.5, {
  scaleX: 1.25,
  scaleY: 0.75,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyo: true,
  ease: Power0.easeNone
})

const circleTl = new TimelineMax({

})

circleTl
.timeScale(3)
.to(circle, 0.5, {
  scaleX: 1.25,
  scaleY: 0.75,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyo: true,
  ease: Power0.easeNone
})
.to(circle, 0.5, {
  y: -100,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyo: true,
  ease: Power0.easeNone
})
.to(circle, 0.5, {
  scaleX: 1.25,
  scaleY: 0.75,
  transformOrigin: "50% 100%",
  repeat: 1,
  yoyo: true,
  ease: Power0.easeNone
})

const shapes = {
  init() {
    masterTl.add([triangleTl, squareTl, circleTl], 0, "start", 0.2)
    masterTl.play()
  }
}

export { shapes }

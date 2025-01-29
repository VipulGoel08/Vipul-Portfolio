//cursor follower
let cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    x: e.x + 5,
    y: e.y + 5,
    duration: 1,
    ease: "power1.out",
  });
});

//menu section opening
let menuBtn = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
let tl_3 = gsap.timeline();

menuBtn.addEventListener("click", function () {
  tl_3.to(".menu-overlay", {
    x: 0,
    duration: 1.5,
    ease: "power4.inOut",
  });

  navbar.style.scale = "0";
  tl_3.from(".menu-hero p", {
    x: 50,
    opacity: 0,
    stagger: 0.1,
  });
});

//menu section closing
let menuCloseBtn = document.querySelector(".menuCloseBtn");
menuCloseBtn.addEventListener("click", function () {
  gsap.to(".menu-overlay", {
    x: "100%",
    duration: 1.5,
    ease: "power4.inOut",
  });

  setTimeout(() => {
    navbar.style.scale = "1";
  }, 1500);
});

//contact section opening
let contactSection = document.querySelector(".contact-section");
gsap.from(contactSection, {
  width: "20%",
  height: "20vh",
  opacity: 0,
  borderRadius: 60,
  y: 100,
  ease: "power4.out",
  scrollTrigger: {
    scroller: "body",
    trigger: contactSection,
    start: "top 100%",
    end: "top 40%",
    scrub: 1,
  },
});

// about page home section opening

gsap.from(".navbar", {
  y: -50,
  duration: 2,
  opacity: 0,
  ease: "power4.out",
});
gsap.from(".hero-left", {
  y: 50,
  duration: 2,
  opacity: 0,
  ease: "power4.out",
});
gsap.from(".hero-right", {
  x: 50,
  duration: 2,
  opacity: 0,
  ease: "power4.out",
});

//about page home section closing

gsap.from(".navbar p", {
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".navbar p",
    start: "top -40%",
    end: "top -90%",
    scrub: 1,
  },
});
gsap.to(".hero-section", {
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".hero-section",
    start: "top 0%",
    end: "top -80%",
    scrub: 1,
  },
});

// about page second section opening

gsap.from(".about-second-right", {
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".about-second-right",
    start: "top 80%",
    end: "top 20%",
    scrub: 1,
  },
});
gsap.from(".about-left-content p, .about-left-content button", {
  opacity: 0,
  stagger: 0.6,
  scrollTrigger: {
    scroller: "body",
    trigger: ".about-second-right",
    start: "top 50%",
    end: "top 20%",
    scrub: 3,
  },
});

//about page education section opening
gsap.from(".courses-names .diploma, .class-10", {
  opacity: 0,
  x: -100,
  stagger: 0.5,
  scrollTrigger: {
    scroller: "body",
    trigger: ".courses-names",
    start: "top 90%",
    end: "top 60%",
    scrub: 1,
  },
});

//education content opening

let diplomaOpen = document.querySelector(".diploma p");
let diplomaSvg = document.querySelector(".diploma p svg");
let dOpen = false;

diplomaOpen.addEventListener("click", function () {
  if (!dOpen) {
    gsap.to(".diploma-details", {
      height: "auto",
      duration: 1,
    });
    diplomaSvg.style.transform = "rotate(135deg)";
  } else {
    gsap.to(".diploma-details", {
      height: "0",
      duration: 1,
    });
    diplomaSvg.style.transform = "rotate(0deg)";
  }
  dOpen = !dOpen;
});

let class10Svg = document.querySelector(".class-10 p svg");
let class10Open = document.querySelector(".class-10 p");
let cOpen = false;

class10Open.addEventListener("click", function () {
  if (!cOpen) {
    gsap.to(".class10-details", {
      height: "auto",
      duration: 1,
    });
    class10Svg.style.transform = "rotate(135deg)";
  } else {
    gsap.to(".class10-details", {
      height: "0",
      duration: 1,
    });
    class10Svg.style.transform = "rotate(0deg)";
  }
  cOpen = !cOpen;
});

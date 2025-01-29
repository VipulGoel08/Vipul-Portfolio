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

//Featured project section opening
gsap.from(".projects-section", {
  opacity: 0,
  duration: 1,
});
gsap.from(".projects-section h1, .projects-section h5", {
  opacity: 0,
  x: -100,
  duration: 1,
});
gsap.from(".featured-projects p", {
  opacity: 0,
  x: -100,
  stagger: 0.2,
  duration: 1,
});

//practice project section opening
gsap.from(".practice-projects-section h1, .practice-projects-section h5", {
  opacity: 0,
  x: -100,
  scrollTrigger: {
    scroller: "body",
    trigger: ".practice-projects-section h1",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from(".practice-projects p", {
  opacity: 0,
  x: -100,
  stagger: 0.5,
  scrollTrigger: {
    scroller: "body",
    trigger: ".practice-projects p",
    start: "top 70%",
    end: "top 40%",
    scrub: 1,
  },
});

// project image show on hovering name

let project1 = document.querySelector(".pjt_1 p");
let project2 = document.querySelector(".pjt_2 p");
let project3 = document.querySelector(".pjt_3 p");
project1.addEventListener("mouseenter", function () {
  gsap.to(".pjt_1 img", {
    x: -50,
    opacity: 1,
    duration: 1,
    ease: "elastic.out(1.5,0.5)",
  });
});
project1.addEventListener("mouseleave", function () {
  gsap.to(".pjt_1 img", {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  });
});
project2.addEventListener("mouseenter", function () {
  gsap.to(".pjt_2 img", {
    x: -50,
    opacity: 1,
    duration: 1,
    ease: "elastic.out(1.5,0.5)",
  });
});
project2.addEventListener("mouseleave", function () {
  gsap.to(".pjt_2 img", {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  });
});
project3.addEventListener("mouseenter", function () {
  gsap.to(".pjt_3 img", {
    x: -50,
    opacity: 1,
    duration: 1,
    ease: "elastic.out(1.5,0.5)",
  });
});
project3.addEventListener("mouseleave", function () {
  gsap.to(".pjt_3 img", {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  });
});

let pracProject1 = document.querySelector(".prac-pjt_1 p");
let pracProject2 = document.querySelector(".prac-pjt_2 p");
let pracProject3 = document.querySelector(".prac-pjt_3 p");
pracProject1.addEventListener("mouseenter", function () {
  gsap.to(".prac-pjt_1 img", {
    x: -50,
    opacity: 1,
    duration: 1,
    ease: "elastic.out(1.5,0.5)",
  });
});
pracProject1.addEventListener("mouseleave", function () {
  gsap.to(".prac-pjt_1 img", {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  });
});
pracProject2.addEventListener("mouseenter", function () {
  gsap.to(".prac-pjt_2 img", {
    x: -50,
    opacity: 1,
    duration: 1,
    ease: "elastic.out(1.5,0.5)",
  });
});
pracProject2.addEventListener("mouseleave", function () {
  gsap.to(".prac-pjt_2 img", {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  });
});
pracProject3.addEventListener("mouseenter", function () {
  gsap.to(".prac-pjt_3 img", {
    x: -50,
    opacity: 1,
    duration: 1,
    ease: "elastic.out(1.5,0.5)",
  });
});
pracProject3.addEventListener("mouseleave", function () {
  gsap.to(".prac-pjt_3 img", {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  });
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

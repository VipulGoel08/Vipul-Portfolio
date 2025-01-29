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

//typewriter effect
let typed = new Typed(".auto-type", {
  strings: [
    "MERN Stack Developer",
    "UI/UX Designer",
    "Frontend Developer",
    "Programmer",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// pre loader
let tl_1 = gsap.timeline();
tl_1.from(".pre-loader-text", {
  y: 100,
  opacity: 0,
  delay: 0.2,
  stagger: 0.1,
  ease: "power4.in",
});

tl_1.to(".pre-loader-textFill", {
  color: "#e5e3dc",
  duration: 1,
  ease: "power1.out",
});

tl_1.from(".pre-loader-btn", {
  opacity: 0,
  duration: 0.5,
});

//menu section opening
let menuBtn = document.querySelector(".menu-icon");
let menuOverlay = document.querySelector(".menu-overlay")
let navbar = document.querySelector(".navbar");
let tl_2 = gsap.timeline();

menuBtn.addEventListener("click", function () {
  menuOverlay.style.scale = "1"
  tl_2.to(".menu-overlay", {
    x: 0,
    duration: 1.5,
    ease: "power4.inOut",
  });

  navbar.style.scale = "0";
  tl_2.from(".menu-hero p", {
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
    menuOverlay.style.scale = "0"
  }, 1500);
});

// home section opening
let preLoaderBtn = document.querySelector(".pre-loader-btn");
let preLoader = document.querySelector(".pre-loader");

preLoaderBtn.addEventListener("click", function (e) {
  gsap.to(".pre-loader", {
    height: 0,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });
  setTimeout(() => {
    preLoader.style.scale = "0"
  }, 1000);
  gsap.from(".navbar", {
    y: -50,
    duration: 1.5,
    opacity: 0,
    ease: "power4.out",
  });
  gsap.from(".hero-left", {
    y: 50,
    duration: 1.5,
    opacity: 0,
    ease: "power4.out",
  });
  gsap.from(".hero-right", {
    x: 50,
    duration: 1.5,
    opacity: 0,
    ease: "power4.out",
  });
  gsap.from(".lower-section", {
    y: 20,
    duration: 1.5,
    opacity: 0,
    ease: "power4.out",
  });
});

//home section closing

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
gsap.to(".hero-left", {
  opacity: 0,
  y: -30,
  scrollTrigger: {
    scroller: "body",
    trigger: ".links",
    start: "top 50%",
    end: "top 0%",
    scrub: 1,
  },
});
gsap.to(".hero-right", {
  opacity: 0,
  y: -30,
  scrollTrigger: {
    scroller: "body",
    trigger: ".links",
    start: "top 50%",
    end: "top 0%",
    scrub: 1,
  },
});
gsap.to(".lower-section", {
  opacity: 0,
  y: -30,
  scrollTrigger: {
    scroller: "body",
    trigger: ".links",
    start: "top 50%",
    end: "top 0%",
    scrub: 1,
  },
});

//about section opening
let aboutSection = document.querySelector(".about-section");
let aboutContent = document.querySelector(".about-content");

const aboutText = document.getElementById("about-text");

const words = aboutText.innerText.split(" ");

aboutText.innerHTML = words
  .map((word) => `<span class="word">${word}</span>`)
  .join(" ");

const wordSpans = document.querySelectorAll("#about-text .word");

gsap.from(wordSpans, {
  opacity: 0,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    scroller: "body",
    trigger: wordSpans,
    start: "top 90%",
    end: "top 60%",
    scrub: 1,
  },
});

//Featured project section opening

gsap.from(".projects-section h1", {
  opacity: 0,
  x: -100,
  scrollTrigger: {
    scroller: "body",
    trigger: ".projects-section h1",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from(".featured-projects p", {
  opacity: 0,
  x: -100,
  stagger: 0.5,
  scrollTrigger: {
    scroller: "body",
    trigger: ".featured-projects p",
    start: "top 70%",
    end: "top 40%",
    scrub: 1,
  },
});

//practice project section opening
gsap.from(".practice-projects-section h1", {
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
  borderRadius: 40,
  y: 100,
  ease: "power4.out",
  scrollTrigger: {
    scroller: "body",
    trigger: contactSection,
    start: "top 100%",
    end: "top 60%",
    scrub: 1,
  },
});
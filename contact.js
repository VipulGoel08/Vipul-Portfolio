// contact page opening

gsap.from(".contact-page",{
    opacity: 0,
    x: -50,
    duration: 1
})

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

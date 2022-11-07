var swiper = new Swiper(".slide-content",{
    slidesPerView: 3,
    spaceBetween: 25,
    centeredSlides: true,
    fade: 'true',
    loop: true,
    grabCursor: 'true',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  

breakpoints:{
    0: {
        slidesPerView:1,
    },
    520: {
        slidesPerView:1,
    },
    950: {
        slidesPerView:1.5,
    },
},
});

var tl = gsap.timeline();
tl.from("#cnttxt h1",{
  opacity: 0,
  delay:0,
  duration: 1,
  y: 100,
})
  .from("#leftcontent .img",{
    opacity: 0,
    delay:0,
    duration: 1,
    y: 100,
  },
  "-=1"
  )
  .from("#rightcontent .imgr",
  {
    opacity: 0,
    delay: 0,
    duration: 1,
    y: -100,
  },
  "-=1"
  )
  .from("#rightcontent .imgr2",
  {
    opacity: 0,
    delay: 0,
    duration: 1,
    y: 100,
  },
  "-=1"
  )
  .from(
    "#nav",
    {
      opacity: 0,
      y: 0,
      duration: 1,
    },
    "-=1"
  )
  .from("#scndtxt",{
    opacity: 0,
    delay: 0,
    duration: 1,
    y:20,
  },
  "-=1"
  )

  .from(
    "#page2 h3, #page2 h1,#aboutus, #circle",
    {
      scrollTrigger:{
        trigger: "#page2 h3, #page2 h1,#aboutus, #circle",
        scroller: "body",
        // markers: true,
        scrub: 2,
        start: 'top 100%'
      },
      y:70,
      stagger: 0.5,
      duration: 2,
      delay:1,
    },
    "-=1"
  )
  .from("#subleftma",
  {
    scrollTrigger:{
      trigger: "#subleftma",
      scroller: "body",
      start: "top 70%",
      scrub: 1,
    },
    x: 30,
    duration: 1
  },
  "-=1"
  )

  .from("#subleftmb",
  {
    scrollTrigger:{
      trigger: "#subleftmb",
      scroller: "body",
      start: "top 70%",
      scrub: 1,
    },
    y: 30,
    duration: 1,
  },
  "-=1"
  )
  .from("#subrightma2",
  {
    scrollTrigger: {
      trigger: "#subrightma2",
      scroller: "body",
      start: "top 70%",
      scrub: 1,
    },
    x: 20,
    duration: 1,
  },
  "-=1"
  )
  .from("#subrightmb2",
  {
    scrollTrigger:{
      trigger: "#subrightmb2",
      scroller: "body",
      start: "top 70%",
      scrub: 1,
    },
    x : 50,
    duration: 1,
  },
  "-=1"
  )
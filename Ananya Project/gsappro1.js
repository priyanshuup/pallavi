var tl = gsap.timeline();

tl.from("#page1 h1", {
  opacity: 0,
  delay: 0,
  duration: 1,
  y: 100,
})
  .from(
    "#page1 #img1",
    {
      opacity: 0,
      duration: 1,
      y: 100,
      delay: 0,
    },
    "-=1"
  )
  .from(
    "#page1 #img2",
    {
      opacity: 0,
      duration: 1,
      x: 100,
      delay: 0,
    },
    "-=1"
  )
  .from(
    "#page1 #img3",
    {
      opacity: 0,
      duration: 1,
      y: -100,
      delay: 0,
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

  .from(
    "#findout",
    {
      opacity: 0,
      duration: 1,
      y: 20,
    },
    "-=1"
  )

  .from(
    "#page2 h4,#p2h1,#about,#circle",
    {
      scrollTrigger: {
        trigger: "#page2 h4,#p2h1, #about,#circle",
        scroller: "body",
        // markers:true,
        scrub: 2,
        start: "top 100%"
      },
      y: 70,
      stagger: 0.5,
      duration: 2,
      delay: 1,
    },
    "-=1"
  )

  .from("#imga",
    {
      scrollTrigger: {
        trigger: "#imga",
        scroller: "body",
        start: "top 70%",

        // markers: true,
        scrub: 1,
      },
      x: 30,
      // stagger:1,
      duration: 1,
    },
    "-=1"
  )
  .from("#imgb",
    {
      scrollTrigger: {
        trigger: "#imgb",
        scroller: "body",
        start: "top 70%",

        // markers : "true"
        scrub: 1,

      },
      y: 30,
      // stagger:1,
      duration: 1,
    },
    "-=1"
  )

  .from("#imgc",
    {
      scrollTrigger: {
        trigger: "#imgc",
        scroller: "body",
        start: "top 70%",
        // markers : "true"
        scrub: 1,
      },
      x : 20,
      // stagger:1,
      duration: 1,
    },
    "-=1"
  )

  .from("#imgd",
    {
      scrollTrigger: {
        trigger: "#imgd",
        scroller: "body",
        start: "top 70%",
        // markers : "true"
        scrub: 1,
      },
      x : 50,
      // stagger:1,
      duration: 1,
    },
    "-=1"
  )


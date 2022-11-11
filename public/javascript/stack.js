gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.stack',
    start: 'top 60%',
    end: 'top 30%',
    scrub: 5,
  },
})

tl.to('.stack', { x: 50, duration: 2 }).to('.stack', { x: 0, duration: 3 })

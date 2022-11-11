gsap.registerPlugin(ScrollTrigger)

const tl=gsap.timeline({
    scrollTrigger: {
        trigger: '.section__subtitle--about',
        start: 'top 90%',
        end: 'top 30%',
        scrub: 5,
    }
})

const otl = gsap.timeline({
  scrollTrigger: {
    trigger: '.about__social-media',
    start: 'top 90%',
    end: 'top 30%',
    scrub: 5
  },
})

tl.to('.section__subtitle--about', {x: -50, duration: 4})
.to('.section__subtitle--about', {x: 0, duration: 5})

otl.to('.about__social-media', {x: 50, duration: 3})
.to('.about__social-media', {x:0, duration: 3})
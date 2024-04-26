// function anim(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });




// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }
// anim();
$('#page1 h1').textillate({ in: { effect: 'RollInUp' } });
var circle = document.querySelector("#cursor");
window.addEventListener("mousemove",function(dets){
    circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
}) 

gsap.to("#vv",{
    scrollTrigger:{
        trigger:"#page1",
        start:"top top",
        scrub:2,
        pin:"#main"
    },
    width:"100%",
    left:0,
    ease:"Expo.easeinOut"
})
gsap.to("#v1",{
    scrollTrigger:{
        trigger:"#page1",
        start:"top top",
        scrub:3,
    },
    left:'-300px',
    opacity:0
})
gsap.to("#v2",{
    scrollTrigger:{
        trigger:"#page1",
        start:"top top",
        scrub:3,
    },
    right:'-300px',
    opacity:0
})
gsap.to("#im",{
    scrollTrigger:{
        trigger:"#page1",
        start:"top top",
        scrub:3,
    },
    left:'-300px',
    opacity:0
})

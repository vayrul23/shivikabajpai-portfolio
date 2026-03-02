gsap.registerPlugin(ScrollTrigger);

/* Scroll progress */
window.addEventListener("scroll", () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.querySelector(".progress-bar").style.width = scrolled + "%";
});

/* Pin philosophy */
gsap.to(".philosophy", {
  scrollTrigger:{
    trigger:".philosophy",
    start:"top top",
    end:"+=100%",
    scrub:true,
    pin:true
  }
});

/* Counter animation */
document.querySelectorAll('.counter').forEach(counter => {
  const target = +counter.getAttribute('data-target');
  ScrollTrigger.create({
    trigger: counter,
    start: "top 80%",
    onEnter: () => {
      let count = 0;
      const update = setInterval(() => {
        count += target / 50;
        if(count >= target){
          counter.innerText = target;
          clearInterval(update);
        } else {
          counter.innerText = Math.ceil(count);
        }
      }, 20);
    }
  });
});

/* Progress bars */
document.querySelectorAll('.bar-fill').forEach(bar => {
  ScrollTrigger.create({
    trigger: bar,
    start: "top 85%",
    onEnter: () => {
      bar.style.width = bar.getAttribute("data-width") + "%";
    }
  });
});

gsap.from(".hero-left h1", {
  y:50,
  opacity:0,
  duration:1.2
});

gsap.from(".hero-tag", {
  y:30,
  opacity:0,
  delay:0.3,
  duration:1
});

gsap.from(".hero-right img", {
  scale:0.9,
  opacity:0,
  delay:0.4,
  duration:1.2
});

gsap.from(".hero-text h1", {
  y: 40,
  opacity: 0,
  duration: 1
});

gsap.from(".hero-text h2", {
  y: 30,
  opacity: 0,
  delay: 0.2,
  duration: 1
});

gsap.from(".hero-text p", {
  y: 30,
  opacity: 0,
  delay: 0.4,
  duration: 1
});

gsap.from(".hero-image img", {
  scale: 0.95,
  opacity: 0,
  delay: 0.3,
  duration: 1
});

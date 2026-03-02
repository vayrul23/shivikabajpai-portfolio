gsap.registerPlugin(ScrollTrigger);

// Pin philosophy section
gsap.to(".philosophy", {
  scrollTrigger:{
    trigger:".philosophy",
    start:"top top",
    end:"+=100%",
    scrub:true,
    pin:true
  }
});

// Counter animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100;

    if(current < target){
      counter.innerText = Math.ceil(current + increment);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };

  ScrollTrigger.create({
    trigger: counter,
    start: "top 80%",
    onEnter: update
  });
});

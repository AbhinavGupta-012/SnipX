// Ensure GSAP and ScrollTrigger are loaded
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Example animation for the header
    gsap.from("header h1", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out"
    });
  
    gsap.from("header p", {
      opacity: 0,
      y: -30,
      duration: 1,
      delay: 0.5,
      ease: "power2.out"
    });
  
    // Animate the FAQ items
    gsap.from(".faq-item", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".faq-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  
    // Animate the newsletter form
    gsap.from(".newsletter-form", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".newsletter",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  
    // Example of animating the pop-up
    gsap.from("#loginPopUp", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#loginPopUp",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });
  
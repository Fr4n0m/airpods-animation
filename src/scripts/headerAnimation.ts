import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isInitialized = false;

export function initHeaderAnimation() {
  if (isInitialized) return;
  isInitialized = true;

  gsap.registerPlugin(ScrollTrigger);

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=1000",
      scrub: 0.5,
    },
  });

  timeline.to(
    ".main-nav",
    {
      y: "-100%",
    },
    0,
  );

  timeline.to(
    ".subnav",
    {
      y: "-66px",
      x: "-8px",
      backdropFilter: "blur(20px)",
      borderBottomWidth: 100,
    },
    0,
  );

  timeline.to(
    ".subnav-container",
    {
      borderBottomWidth: 0,
    },
    0,
  );
}

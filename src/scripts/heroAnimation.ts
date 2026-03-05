import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TOTAL_FRAMES = 65;
const CANVAS_WIDTH = 1068;
const CANVAS_HEIGHT = 600;

let isInitialized = false;

export function initHeroAnimation() {
  if (isInitialized) return;
  isInitialized = true;

  gsap.registerPlugin(ScrollTrigger);

  const canvas = document.getElementById("hero") as HTMLCanvasElement | null;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const heroCanvas = canvas;
  const heroContext = ctx;

  heroCanvas.width = CANVAS_WIDTH;
  heroCanvas.height = CANVAS_HEIGHT;

  const images = Array.from({ length: TOTAL_FRAMES }, (_, index) => {
    const image = new Image();
    image.src = `/images/${String(index).padStart(4, "0")}.png`;
    return image;
  });

  const airpods = { frame: 0 };

  gsap.fromTo(
    ".title",
    { opacity: 0, scale: 0.7 },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "back.out(1.7)",
    },
  );

  gsap.fromTo(
    "canvas",
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 1.2, ease: "back.inOut", delay: 0.5 },
  );

  gsap.to(".title", {
    scale: 1.1,
    autoAlpha: 0,
    immediateRender: false,
    scrollTrigger: {
      scrub: 0.5,
      start: "center center",
    },
  });

  gsap.to(airpods, {
    frame: TOTAL_FRAMES - 1,
    ease: "none",
    snap: "frame",
    scrollTrigger: {
      scrub: 0.5,
    },
    onUpdate: render,
  });

  images[0].onload = render;

  function render() {
    const frame = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(airpods.frame)));
    const image = images[frame];
    if (!image) return;
    heroContext.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
    heroContext.drawImage(image, 0, 0);
  }
}

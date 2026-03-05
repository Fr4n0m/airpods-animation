let isInitialized = false;

export function initScrollInertia() {
  if (isInitialized) return;
  isInitialized = true;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

  if (prefersReducedMotion || isTouchDevice) return;

  let currentScroll = window.scrollY;
  let targetScroll = currentScroll;
  let velocity = 0;
  let rafId = 0;

  const damping = 0.065;
  const friction = 0.92;
  const wheelStrength = 0.8;
  const stopThreshold = 0.15;

  const getMaxScroll = () =>
    Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

  const animateScroll = () => {
    targetScroll += velocity;
    targetScroll = Math.max(0, Math.min(getMaxScroll(), targetScroll));

    const deltaToTarget = targetScroll - currentScroll;
    currentScroll += deltaToTarget * damping;

    velocity *= friction;

    if (Math.abs(velocity) < 0.01) {
      velocity = 0;
    }

    if (Math.abs(deltaToTarget) <= stopThreshold && velocity === 0) {
      currentScroll = targetScroll;
    }

    window.scrollTo(0, currentScroll);

    if (Math.abs(targetScroll - currentScroll) > stopThreshold || velocity) {
      rafId = window.requestAnimationFrame(animateScroll);
    } else {
      rafId = 0;
    }
  };

  const onWheel = (event: WheelEvent) => {
    event.preventDefault();
    velocity += event.deltaY * wheelStrength;
    velocity = Math.max(-160, Math.min(160, velocity));

    if (!rafId) {
      rafId = window.requestAnimationFrame(animateScroll);
    }
  };

  const onScroll = () => {
    if (!rafId) {
      currentScroll = window.scrollY;
      targetScroll = currentScroll;
      velocity = 0;
    }
  };

  const onResize = () => {
    const maxScroll = getMaxScroll();
    currentScroll = Math.max(0, Math.min(window.scrollY, maxScroll));
    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
  };

  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
}

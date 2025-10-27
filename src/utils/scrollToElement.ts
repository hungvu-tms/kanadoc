export function scrollToElement(target: string) {
  if (typeof window === "undefined") return;

  let element: HTMLElement | null = null;

  if (target.startsWith("#")) {
    element = document.querySelector(target);
  } else if (target.startsWith(".")) {
    element = document.querySelector(target);
  } else {
    element =
      document.getElementById(target) || document.querySelector(`.${target}`);
  }

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    console.warn(`scrollTo: not found "${target}"`);
  }
}

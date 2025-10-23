import { useEffect, useState } from "react";

export function useScrollTable<T extends HTMLElement>(ref: React.RefObject<T>) {
  const [state, setState] = useState({
    atStart: true,
    atEnd: false,
    scrollLeft: 0,
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const canScroll = scrollWidth > clientWidth;
      const atStart = !canScroll || scrollLeft <= 0;
      const atEnd = !canScroll || scrollLeft + clientWidth >= scrollWidth - 1;
      setState({ atStart, atEnd, scrollLeft });
    };

    handleScroll();
    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ref]);

  return state;
}

import { useLayoutEffect } from 'react';

const smoothScrollOptions = {
  speed: 500,
  offset: -50,
  updateURL: true,
  popstate: true,
  emitEvents: false,
  //header: 'header',
  easing: 'easeInOutCubic',
};

export const useSmoothScroll = options => {
  useLayoutEffect(() => {
    const noop = () => {};
    const loadSmoothScroll = async () => {
      const module = await import('smooth-scroll');
      const SmoothScroll = module.default;

      new SmoothScroll('a[href*="#"]', {
        ...smoothScrollOptions,
        ...options,
      });
    };

    loadSmoothScroll();

    return noop;
  }, [options]);
};

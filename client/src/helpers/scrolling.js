import debounce from 'lodash.debounce';

const handleScrollingCallback = cb => debounce(cb, 500);

export const initScrolling = cb => {
  window.addEventListener('scroll', handleScrollingCallback(cb), {
    passive: true,
  });
};

export const destroyScrolling = () => {
  window.removeEventListener('scroll', handleScrollingCallback);
};

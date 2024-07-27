type Fn = (...params: any[]) => any;


export const debounce = <T extends Fn>(fn: T, wait = 1000) => {
  let timeout: number;
  return function execFn<E>(ev: E) {
    const later = () => {
      clearTimeout(timeout);
      fn(ev);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

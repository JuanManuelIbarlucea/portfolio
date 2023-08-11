export function debounce(callback: () => void, delay: number) {
  let timeoutId: any;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
}

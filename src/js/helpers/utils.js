export function throttle(func, delay ) {
  let prev = Date.now();
  return function(){
    const context = this;
    const now = Date.now();
    const args = arguments;
    if(now - prev >= delay) {
      func.apply(context, args)
      prev = now;
    }
  }
}

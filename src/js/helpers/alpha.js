export const calculateChange = (e, hsv, container) => {
  const rect = container.getBoundingClientRect()
  const { width: containerWidth } = rect;
  const x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX
  // const y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY
  const left = x - (rect.left + window.pageXOffset)

  let alpha;
  
  if (left < 0) {
    alpha = 0
  } else if (left >= containerWidth) {
    alpha = 100
  } else {
    alpha = (left / containerWidth)*100 >> 0
  }

    if (hsv.a !== alpha) {
      return {
        h: hsv.h,
        s: hsv.s,
        v: hsv.v,
        a: alpha / 100,
        source: 'hsv',
      }
    } else {
      return hsv
    }
}
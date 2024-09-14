export const calculateChange = (e, hsv, container) => {
  const rect = container.getBoundingClientRect()
  const { width: containerWidth } = rect;
  const x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX
  // const y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY
  const left = x - (rect.left + window.pageXOffset)

  let hex;
  if (left < 0) {
    hex = 0
  } else if (left > containerWidth) {
    hex = 359
  } else {
    const percent = left / containerWidth * 100
    hex = ((360 * percent) / 100)
  }

    if (hsv.h !== hex) {
      return {
        h: hex,
        s: hsv.s,
        v: hsv.v,
        a: hsv.a,
        source: 'hsv',
      }
    } else {
      return hsv
    }
}
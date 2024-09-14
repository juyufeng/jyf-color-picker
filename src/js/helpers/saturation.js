export function calculateChange(e, hsv, container){
  const rect = container.getBoundingClientRect()
  const { width: containerWidth, height: containerHeight } = rect;
  const x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX
  const y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY
  let left = x - (rect.left + window.pageXOffset)
  let top = y - (rect.top + window.pageYOffset)

  if (left < 0) {
    left = 0
  } else if (left > containerWidth) {
    left = containerWidth
  }

  if (top < 0) {
    top = 0
  } else if (top > containerHeight) {
    top = containerHeight
  }

  const Saturation = left / containerWidth
  const Value = 1 - (top / containerHeight)
  return {
    h: hsv.h,
    s: Saturation,
    v: Value,
    a: hsv.a,
    source: 'hsv',
  }
}

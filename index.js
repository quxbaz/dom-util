const fireOnce = (el, event, handler) => {
  /*
    Fires an handler once, then detaches it.
  */
  el.addEventListener(event, function once() {
    handler.apply(null, arguments)
    el.removeEventListener(event, once)
  })
}

export {fireOnce}

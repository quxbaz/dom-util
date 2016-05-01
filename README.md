# dom-util

Utilities for using the DOM.

## API

### fireOnce
```javascript
// Fires an handler once, then detaches it.

let i = 0
fireOnce(el, 'click', () => i++)
el.click()
el.click()

// i === 1
```
# dom-util

Utilities for using the DOM.

## API

### fireOnce(element, event, handler)
Fires an handler once, then detaches it. Example:
```javascript
const el = document.getElementById('my-button')
let i = 0
fireOnce(el, 'click', () => i++)
el.click()
el.click()

// i === 1
```
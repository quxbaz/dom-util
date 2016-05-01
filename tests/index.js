import expect from 'expect'
import {fireOnce} from 'dom-util'

const doc = document

describe("fireOnce()", () => {
  it("triggers an event handler only once.", () => {
    let el = doc.createElement('button')
    let i = 0
    fireOnce(el, 'click', () => i++)
    el.click()
    el.click()
    expect(i).toEqual(1)
  })
})


// Stops mocha from intercepting errors so we have proper source-map support
// mocha.allowUncaught()

mocha.run()

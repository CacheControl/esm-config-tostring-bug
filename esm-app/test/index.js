import assert from 'assert'
import { MyClass } from 'esm-package'

describe('My Class', () => {
  it('returns the class name', () => {
    console.log(MyClass); //
    const mc = new MyClass()

    console.log(mc.getName());
  })
})

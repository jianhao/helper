import assert from 'assert'
import { add } from '../src/index'

describe('EnumData:', () => {
  /**
   * EnumData conflict
   */
  describe('add', () => {
    test('1 + 2 = 3', () => {
      assert.strictEqual(add(1, 2), 3)
    })
  })
})

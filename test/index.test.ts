import { describe, expect, it } from 'vitest'
import { sum } from '../src'

describe('Sum Suite', () => {
  it('Sums 2 values', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

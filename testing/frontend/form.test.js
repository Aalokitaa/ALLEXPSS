import { describe, it, expect } from 'vitest'
import { validateForm } from './form'

describe('Form Testing', () => {
  it('valid input', () => {
    expect(validateForm("Aahan")).toBe(true)
  })

  it('empty input', () => {
    expect(validateForm("")).toBe(false)
  })
})
import { it, expect } from 'vitest'
import { Example } from './Example'

it('works', async () => {
  expect(Example.helloWorld()).toBe('Hello World')
})

import { echo } from '../src/index.js'

describe('echo()', () => {
  it('should echo text from server', async () => {
    expect(await echo('test1')).toEqual('test1')
    expect(await echo('test2')).toEqual('test2')
  })
})

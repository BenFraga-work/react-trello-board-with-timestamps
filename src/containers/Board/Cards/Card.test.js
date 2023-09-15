import { getColorFromTime, timeFormat } from './Card'

describe('Card', () => { 

  test('formats time correctly', () => {
    expect(timeFormat(90061000)).toBe('1d1h1m1s until deadline')
    expect(timeFormat(-90061000)).toBe('1d1h1m1s past deadline')
    expect(timeFormat(-3661000)).toBe('1h1m1s past deadline')
  })
  
  test('time color is correct', () => {
    expect(getColorFromTime(Date.now() + 90061000)).toEqual({background: '#88ff88'})
    expect(getColorFromTime(Date.now() - 90061000)).toEqual({background: '#ff8888'})
    expect(getColorFromTime(Date.now() + 3661000)).toEqual({background: '#ffff88'})
  })

})


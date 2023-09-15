const fn = require('./tests')

test('formats time correctly', () => {
	expect(fn[0](90061000)).toBe('1d1h1m1s until deadline')
	expect(fn[0](-90061000)).toBe('1d1h1m1s past deadline')
	expect(fn[0](-3661000)).toBe('1h1m1s past deadline')
})

test('time color is correct', () => {
	expect(fn[1](Date.now() + 90061000)).toEqual({background: '#88ff88'})
	expect(fn[1](Date.now() - 90061000)).toEqual({background: '#ff8888'})
	expect(fn[1](Date.now() + 3661000)).toEqual({background: '#ffff88'})
})
const index = require('./index')

test('should show number in full for number 0', () => {
    const number = index.numberInFull(0)
    expect(number).toEqual('zero')
})

test('should show number in full for number equal 20', () => {
    const number = index.numberInFull(20)
    expect(number).toEqual('twenty')
})

test('should show number in full for number over 20', () => {
    const number = index.numberInFull(21)
    expect(number).toEqual('twenty one')
})

test('should show number in full for number over 100', () => {
    const number = index.numberInFull(113)
    expect(number).toEqual('one hundred thirteen')
})

test('should show number in full for number over 120', () => {
    const number = index.numberInFull(136)
    expect(number).toEqual('one hundred thirty six')
})

test('should show number in full for number over 1000', () => {
    const number = index.numberInFull(1254)
    expect(number).toEqual('one thousand two hundred fifty four')
})

test('should show number in full for number over 10000', () => {
    const number = index.numberInFull(15254)
    expect(number).toEqual('fifteen thousand two hundred fifty four')
})

test('should show number in full for number over 100000', () => {
    const number = index.numberInFull(154254)
    expect(number).toEqual('one hundred fifty four thousand two hundred fifty four')
})

test('should show number in full for number over 1000000', () => {
    const number = index.numberInFull(4482682)
    expect(number).toEqual('four million four hundred eighty two thousand six hundred eighty two')
})


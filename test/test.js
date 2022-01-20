const assert = require('assert')
const sieve = require('./../sieve')


describe("testing for prime numbers", () => {
    before(() => {
        console.log('starting with the test')
    })

    it("for prime numbers between 1and 10", () => {
        assert.deepEqual(sieve(1,10).farr, [2,3,5,7])
    })

    it("for prime numbers between 990 and 1000", () => {
        assert.deepEqual(sieve(990,1000).farr, [991,997])
    })

    after(() => {
        console.log('done with the test')
    })
})


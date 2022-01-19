const router = require('express').Router()
const intuition = require('./intuition')
const sieve = require('./sieve')
const data = require('./schema')

router.get('/', (req,res) => {
    res.setHeader('Content-type','text/html')
    res.send('Congratulation!!! you are now connected<br><br>To get Prime numbers I have provided with two methods do a query as mentioned<br><br>1)Basic intuition - http://localhost:3000/intuition/?num1=x&num2=y<br>2)Sieve - http://localhost:3000/sieve/?num1=x&num=y')
})

router.get('/sieve/', (req,res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2
    var start = process.hrtime()
    var k = sieve(num1, num2)
    var end = process.hrtime(start)
    var t =((end[0] * 1000000000 + end[1]) /1000000).toFixed(3)
    var time = Date.now()    
    var today = new Date(time)
    var date = today.toISOString()
    var fin = {
        "array": k,
        "execution": t,
        "date": date
    }
    data.create(fin)
    res.send(fin)
})

router.get('/intuition/', (req,res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2
    var start = process.hrtime()
    var k = intuition(num1, num2)
    var end = process.hrtime(start)
    var t =((end[0] * 1000000000 + end[1]) /1000000).toFixed(3)
    var time = Date.now()    
    var today = new Date(time)
    var date = today.toISOString()
    var fin = {
        "array": k,
        "execution": t,
        "date": date
    }
    data.create(fin)
    res.send(fin)
    
})

module.exports = router
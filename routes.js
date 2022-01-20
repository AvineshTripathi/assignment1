const router = require('express').Router()
const sieve = require('./sieve')
const data = require('./schema')

// this is for the entry req that a client makes 
router.get('/', (req,res) => {
    res.setHeader('Content-type','text/html')
    res.send('Congratulation!!! you are now connected<br><br>To get Prime numbers I have provided with two methods do a query as mentioned<br><br>1)Basic intuition - http://localhost:3000/intuition/?num1=x&num2=y<br>2)Sieve - http://localhost:3000/sieve/?num1=x&num=y')
})

// this is for the sieve req 
router.get('/sieve/', (req,res) => {
    const num1 = req.query.num1 // querying the url
    const num2 = req.query.num2
    var start = process.hrtime() // starting the timer
    var values = sieve(num1, num2) // calling the sieve function
    var end = process.hrtime(start) // stopping the timer
    var t =((end[0] * 1000000000 + end[1]) /1000000).toFixed(3) // converting the time into ms form 
    var time = Date.now()    
    var today = new Date(time)
    var date = today.toISOString() // getting the date and other related details
    var fin = {
        "array": values.farr,
        "length": values.length,
        "execution": t,
        "date": date
    }
    data.create(fin) // creating the object in the mongodb atlas
    res.send(fin) // sending the response
})


module.exports = router
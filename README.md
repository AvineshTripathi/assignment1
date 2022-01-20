# assignment

# assignments

## How to run this?
1) Clone the repo
2) run ``` npm install``` to install dependencies
3) run ```nodemon server``` (nodemon itself restarts the server when there is change in the code locally)

Your software would be now runnning on PORT 3000

## How to make a call 

Either from curl or postman or simple web browser you can make a call to the api

When the serving is up and running make a **GET** req to following url http://localhost:3000

You will find the further instruction on the webpage or response of your req.


Make a req to http://localhost:3000/sieve/?num1=**x**&num2=**y** where x and y are the numbers between which prime numbers would be printed


## What I have used to make the entire project 

1) **nodejs** and **expressjs** for web server 
2) **nodemon** for running the server continuously 
3) **mongodb** as a database
4) Algorithm 

## Algorithm

I have used logic similar to that of **sieve of eratosthenes** and implemented in my own manner

According to sieve of eratosthenes we use a boolean array size equal to number of element between the range. Then we iterating from 2 to end number and while iterating we eleminate multiple of the iterating number based on boolean array. Lets suppose has we find a multiple we turn the boolean variable of the index equal to multiple into false. We continue doing same thing again and again for all values  in range whoes boolean variable has not turned into false. At last the indexs of array of boolean whoes value remain true are all the prime numbers.

Utilising this logic I have formed an array from 2 to the end of range. After that I iterate the array of prime number and put only those number which are greater or equal to start number of range into my final array. This way I am able to find all the prime numbers in an given range.

Here I have not used boolean array in place of the I have performed same step on single array by deleting those entries which doesnot follow the condition I have given

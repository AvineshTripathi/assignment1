module.exports = function (start, end) {
    var key = start
    var temp = []
    //loop for iterating all the numbers between start and end 
    for (; key<=end; key++){

        //1 is neither prime nor composite hence removing this iteration if key is 1
        if(key == 1){
            break
        }

        //2 is only even number which is prime hence logging this to console and going to next key
        if(key == 2){
            temp.push(key)
            continue
        }

        if(isPrime(key)){
            temp.push(key)
        }
    }

    return temp
}


//function to check if given number is prime or not

function isPrime(n) {
    var temp = 3
    if(n%2 == 0){
        return false
    }
    for(var i=3; i<=Math.sqrt(n); i++){
        if(n%i == 0){
            return false
        }
    }
    return true
}



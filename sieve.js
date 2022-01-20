module.exports = function (start, end) {
    
    var arr = [] // for storing the prime number from 2 to end number
    var farr=[] // for storing final the prime number array croped from the arr 
    var length = -1 // storing farr length to send to route

    // implementing the sieve of eratosthenes
    // we eleminate the multiple of the prime numbers here starting from 2 
    for(var k=2; k<=end; k++){
        arr.push(k)
    }
    for(var i=0; i<end-1; i++){
        for(var count =2; count*arr[i]<=end; count++){
            var index = arr.indexOf(arr[i]*count)
            if(arr.indexOf(arr[i]*count) == -1){
                continue
            }
            arr.splice(index,1)            
        }
    }

    //cropping the arr to required final array by checking the condition of equality 
    for(var m=0; m<arr.length; m++){
        if(arr[m]>=start){
            farr.push(arr[m])
        }
    }
    length = farr.length
    return {farr, length}
}
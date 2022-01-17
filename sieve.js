module.exports = function (start, end) {
    var arr = new Array(end-start + 1).fill(true)
    
    //loop for iterating the array
    // assuming i=1 being start
   for(var i=start; i<end)

    arr.forEach( (value, i) => {
        if(value == true){
            console.log(i)
        }
    })
}
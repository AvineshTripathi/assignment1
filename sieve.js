module.exports = function (start, end) {
    
    var arr = []
    for(var k=2; k<=end; k++){
        arr.push(k)
    }
    console.log(arr)
    var startIndex=-1
    for(var i=0; i<end-1; i++){
        for(var count =2; count*arr[i]<=end; count++){
            var index = arr.indexOf(arr[i]*count)
            if(arr.indexOf(arr[i]*count) == -1){
                continue
            }
            arr.splice(index,1)            
        }
        if(arr[i]<start){
            arr.splice(i,1)
        }
    }

    console.log(arr)
}
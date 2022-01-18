module.exports = function (start, end) {
    
    var arr = []
    var farr=[]
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
    }
    for(var m=0; m<arr.length; m++){
        if(arr[m] >=start){
            farr.push(arr[m])
        }
    }
    console.log(farr)
}
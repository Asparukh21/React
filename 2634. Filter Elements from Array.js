/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var filteredarr1 = [];
    for(var i =0; i<arr.length; i++){
        if(fn(arr[i],i)){
            filteredarr1.push(arr[i]);
        }
    }
    return filteredarr1;
};

let arr = [10 , 30 , 40 , 690, 60 , 49 , 50609, 405 ,4905,]

let max = arr[0]

for(let i = 1 ; i < arr.length ; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(max);

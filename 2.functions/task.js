Задание 1
function getArrayParams(...arr) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    if (arr.length === 0) {
        return { min: 0, max: 0, avg: 0 };
    }

    for (let num of arr) {
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
        sum += num;
    }

    const avg = (sum / arr.length).toFixed(2); 

    return {
        min: min,
        max: max,
        avg: Number(avg) 
    };
}
console.log(getArrayParams(-99, 99, 10)); 
console.log(getArrayParams(1, 2, 3, -100, 10)); 
console.log(getArrayParams(5)); 
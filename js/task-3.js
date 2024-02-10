function filterArray(numbers, value) {
    let num = [];
    for (const item of numbers) {
        if (item > value) {
            num.push(item);
        }
    }
             return num;
}
   

   
filterArray([1, 2, 3, 4, 5], 3);                      
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38); 
filterArray([12, 24, 8, 41, 76], 20); 



console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

















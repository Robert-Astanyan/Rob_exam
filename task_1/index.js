let array = [ 1, 12, 254, 5, 154, 554, 7, 9, 3, 99, 33];

const newArray = array.filter(myFunction);

function myFunction(arr){
    return arr % 2 == 1
}

console.log(newArray);
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false

function check (arg1, arg2){
    this.arg1 = arg1;
    this.arg2 = arg2;
    if(this.arg1.indexOf(this.arg2) !== -1){
        return true;
    } else{
        return false;
    }
}

console.log("check([1, 2, 3, 4, 5], 3)"+ " ➞ " + check([1, 2, 3, 4, 5], 3));
console.log("check([1, 1, 2, 1, 1], 3) "+ " ➞ " + check([1, 1, 2, 1, 1], 3) );
console.log("check([5, 5, 5, 6], 5)"+ " ➞ " + check([5, 5, 5, 6], 5));
console.log("check([], 5)"+ " ➞ " + check([], 5));
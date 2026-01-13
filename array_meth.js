//push()=("add one or more elements to the end of an array")
//pop()=("remove the last element from an array and returns that element")
//shift()=("remove the first element from an array and return that element")
//unshift()=("add the first element from an array and return that element")
//concate()=("combines two or more arrays and returns a new array")
//join()=("create a new string by concatenating all the elements of an array and returns a string by a specified operator")
//slice()=("returns a shallow copy of a portion of an array")
//splice()=("change the content of an array by removing, replacing")
//indexof()=("to find index of the element and if it is not present then it will show -1")
//foreach()=("executes a provided function once for each array")

let sports = ["cricket", "football"];

sports.push("tennis",222);
console.log(sports);
console.log(sports.length);

sports.pop();
console.log(sports);

sports.shift();
console.log(sports);

sports.unshift("swimming");
console.log(sports);

let score =  [350,20,44];
let total = score.concat(sports);
console.log(total);

myteam = total.join("*");
console.log(myteam);

new1 = total.slice(3,5);
console.log(new1);

new2=total.indexOf("swimming");
console.log(new2);

let student = ["sona","priya","shriya","puja"];
student.forEach(function(item,index){
    console.log(index + 0 +","+item);
})
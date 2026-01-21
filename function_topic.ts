function user():number{
    return a;
}
let a = 80;

//function expression
const add = function(c:number,d:number){
    return c+d;
}
add(60,79);

//optional parameter
const product = (title:string,price:number,discount?:boolean)=>{
    return `the product name is ${title} and price is ${price} and discount is ${discount}`
}
console.log(product("LG",88));
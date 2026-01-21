//interface
interface student{
    name:string;
    age:number;
    height?:string //optional parameter
}
const stu:student={
    name:'arpita',
    age:23
}
const newstu:student={
    name:'sonalika',
    age:22
}
console.log(`student name is ${newstu.name} and age is ${newstu.age}`);

//inheritance
interface player extends student{
    playerid:string;
}
const captain:player={
    name:'abhi',
    age:32,
    height:'6ft',
    playerid:'player12'
}
console.log(`player details are: name-${captain.name} age-${captain.age} height-${captain.height} player id-${captain.playerid}`)

//type aliases
type datasample = string|number|boolean;

interface product{
    name: datasample;
    price: datasample;
    discount: datasample;
}

const sampleproduct: product={
    name: "apple",
    price: "200",
    discount: "false"
}

console.log(sampleproduct.price);
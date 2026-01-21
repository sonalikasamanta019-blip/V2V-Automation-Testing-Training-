const apple:{color:String, price:Number, discount:Boolean}={
color: "red",
price: 40,
discount: true
}
console.log("Color:"+apple.color);
console.log("Price:"+apple.price);
console.log("Discount:"+apple.discount);

//arrays
let cities = ["pune","mumbai","chennai","durg"];
cities[1] = "bombay";
console.log(cities);

//shorthand notation
let city:string[]|number[] = ["pune","mumbai","durg","bhilai"];
city=[10,20,30,40];
console.log(city)

//generic type notation
let country: Array<string|number>=["india","us",30,40];
country [1] =70;
console.log(country);

//any
let name: Array<any>=["sonalika",60,true,{city:"durg"}];
console.log(name);

//tuple
let employee: [string,number]=["apple",40];
employee[0]="mango";
employee[1]=70;
console.log(employee);

//special type:  any and undefined

function student(name:string){
    console.log("student name is",name);
}
student("amit");

function add(a:number,b:number):void{
    console.log(a+b);
}
add(10,20);

//undefined type
let st:undefined;
st
console.log(st);

//never type

function failedtoconnect():never{
    throw new Error("connection failed");
}
const dbconnection =()=>{
    try{
        console.log("db connected!!");
    }
    catch(error){
        failedtoconnect();
    }
}
dbconnection();

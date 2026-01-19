// const today = new Date()
// today.getDate()
// console.log(today)

const capitals = {
    india: "newdelhi",
    maharastra: "mumbai",
    up: "lucknow",

    location: function(){
        return "i work in : " + this.maharastra
    }
}
capitals.maharastra = "PUNE";
console.log(capitals.maharastra);


/*const a = document.getElementById("company");
a.innerText = "Capgemini";
a.innerHTML = "<h1>Capgemini</h1>";
a.textContent = "Capgemini pune branch";

var abc = document.getElementsByClassName("revenue")[0];
abc.innerHTML = "<h1>budget</h1>";

const ab = document.getElementsByTagName("p");
// ab.textContent = "We are Testers!!";
// ab.innerHTML = "<h1>We are employees!!</h1>"
for(let i=0;i<ab.length;i++){
    ab[i].textContent="changed paragraph";
}*/

/*const z = document.querySelector("#company");
z.textContent = "Wipro";

var y = document.querySelector(".nav-left");
y.textContent = "Java";

const bbc = document.querySelectorAll(".Sales");
for(let i=0;i<bbc.length;i++){
    bbc[i].textContent="java!!";

}*/

const abc = document.querySelector("header")//.attributes.id.value;
//console.log(abc);
abc.setAttribute("style","color:red;background-color:yellow");

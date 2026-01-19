const mainForm = document.getElementById("myForm");
const user = document.getElementById("name");
const inputname = document.getElementById("name1");

mainForm.addEventListener("submit",function(e){
    e.preventDefault();

    const myUserName = user.value;
    inputname.textContent = myUserName;
    mainForm.reset();
})

const userinput = document.getElementById("name");
userinput.addEventListener("focus",function(event){
    event.target.style.background = "grey";
})

const mynewcolor = document.getElementById("mycolors");
const mynewbox = document.getElementById("box");
mynewcolor.addEventListener("change",function(){
    mynewbox.style.background = mynewcolor.value;
})

function handleChange(){
    const c = document.getElementById("country").value;
    const d = document.getElementById("name2");
    d.textContent = c;
}


const anime = setInterval(sampleanimation,1000)
const ani = setTimeout(sample,1000)

let a=0;
function sampleanimation(){
    a=a+1

    if(a==5){
        clearInterval(anime)
    }
    else{
    const textanimation = document.getElementById("title")
    textanimation.style.fontSize = a+"rem"
    }
}

let b=0;
function sample(){
    b=b+1

    if(b==10){
        clearInterval(ani)
    }
    else{
    const textanime = document.getElementById("title1")
    textanime.style.fontSize = b+"rem"
    }
}
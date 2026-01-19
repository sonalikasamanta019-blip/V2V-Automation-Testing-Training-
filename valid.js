function validationForm(){
    a = document.getElementById("username").value;
    b = document.getElementById("password").value;

    if(a=="" || b==""){
        alert("please enter username or password");
    }
    else{
        alert("form submitted!! username:" + a + "  password:" + b);
    }
}
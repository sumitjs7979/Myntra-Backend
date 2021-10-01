function validate() {
    var num = document.getElementById("mobileNum").value;
    console.log(num);
    if(num.length===10){
        window.location.href = "homepage";
       alert("Login Successful")
    }else {
        alert("login Id is incorrect");
       
    }
}
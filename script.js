console.log("hello user")
function pass_dect(){
    let password=document.getElementById("password").value
    let mesg
        if (password.length<6){
            mesg="weak passwords"
    }
    else{
        mesg="strong password"
    }
    document.getElementById("message").innerText=mesg
}

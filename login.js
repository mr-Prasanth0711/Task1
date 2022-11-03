function validate(){
    var entername=document.getElementById("user").value;

    var enterPass=document.getElementById("pass").value;

    var arr = JSON.parse(localStorage.getItem("User Details"));

    store.forEach(element => {
        if(entername== element.name){
            if(enterPass==element.Password){
                setSuccess(Password,"");
                alert
            }else{
                Error(Password,"Invalid passsword")
            }
        }
        
    });
}
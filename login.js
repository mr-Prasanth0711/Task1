function validate(){
    var entername=document.getElementById("user").value;

    var enterPass=document.getElementById("pass").value;

    var data_user1 = JSON.parse(localStorage.getItem("User Details"));

    
    for(var i in data_user1){
        var entry = data_user1[i]
        }
        
        if(entername == entry.name && enterPass == entry.Password){
            alert("Log in successfull")
           // window.location.href = "curhat.jsp"
        }else{
            alert("wrong username or password")
            }           
        //console.log(data_user1)
        //console.log('username = ' + entry.username)
        
    }

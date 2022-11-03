function validate() {
    var getname = document.getElementById("user").value;
    console.log(getname);
    var getemail = document.getElementById("email").value;
    console.log(getemail);
    var getmobile = document.getElementById("mobileno").value;
    console.log(getmobile);
    var getpassword = document.getElementById("pass").value;
    console.log(getpassword);
    var getconfirmpassword = document.getElementById("cpass").value;
    console.log(getconfirmpassword);
    var getrole = document.getElementById("role").value;


    var arr = JSON.parse(localStorage.getItem("User Details"));





    //Javascript reGex for Email Validation.
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    // Javascript reGex for Phone Number validation.
    var regPhone = /^\d{10}$/;

    // Javascript reGex for Name validation                                    
    var regName = /^[a-zA-Z ]{2,30}$/;

    var regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;



    if (getname === "") {
        Error(user, "Enter Username");
    } else if (!regName.test(getname)) {

        Error(user, "Enter Valid Username");
    } else {
        Error(user, "")

    }

    if (getemail === "") {
        Error(email, "Enter Email Id");
    } else if (!regEmail.test(getemail)) {
        Error(email, "Enter Valid Email Id");
    } else {
        Error(email, "");

    }

    if (getmobile === "") {
        Error(mobileno, "Enter Mobile Number");
    } else if (isNaN(getmobile) || getmobile.length != 10) {
        Error(mobileno, "Enter valid Mobile Number")
    } else {
        Error(mobileno, "");

    }

    if (getpassword === "") {
        Error(pass, "Enter Password");
    } else if (!regpass.test(getpassword)) {
        Error(pass, "Enter Valid Password");
    } else {
        Error(pass, "");

    }

    if (getconfirmpassword === "") {
        Error(cpass, "Enter Confirm Password");
    } else if (getconfirmpassword != getpassword) {
        Error(cpass, "Password must be match");
    } else {

        var array = [];
        const myObject = {
            name: getname,
            Email: getemail,
            MobileNo: getmobile,
            Password: getpassword
        };
        if (arr == null) {
            localStorage.setItem("User Details", JSON.stringify([myObject]));

        }else{
            arr.push(myObject);
            localStorage.setItem("User Details",JSON.stringify(arr));
        }

        alert("Registration Success")
    }


}
Error = (input, message) => {
    const inputfield = input.parentElement;
    const errorpara = inputfield.querySelector("p");
    errorpara.innerHTML = message;
}


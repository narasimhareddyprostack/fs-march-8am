function validateForm() {
    let userName = document.getElementById('userData').value;
    let mobile = document.getElementById('mobileData').value;
    /*  if (userName.length == 0) {
         document.getElementById('userMessage').innerHTML = "Plese Enter User Name"
         //console.log("Please Enter USer Name")
     } */
    if (userName.length < 3) {
        document.getElementById('userMessage').innerHTML = "Plese Enter User Name Should be min 5 Char"
        //console.log("Please Enter USer Name")
    }
    if (mobile.length == 0) {
        document.getElementById('mobileMessage').innerHTML = "Plese Enter Mobile Number"
        //console.log("Please Enter Mobile Number")
    }
    return false
}
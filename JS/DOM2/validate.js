function validate() {
    let userName = document.getElementById('userData').value;

    /*   let userRef = document.getElementById('userMessage');
      console.log(userRef) */
    if (userName.length == 0) {
        document.getElementById('userMessage').innerHTML = "Please Enter User Name"
    }
    /* let ref = document.getElementById('userData')
    console.log(ref)
    console.log("Test 123") */
    /*  console.log(userName) */
    return false
}
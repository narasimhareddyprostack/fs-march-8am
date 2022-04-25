function getData() {
    console.log(document.getElementById('keypressdemo').value)
}
function diplayData() {
    document.getElementById('abc').style.background = "red"

}


function getMoreData() {
    console.log("Test case 123")
}

function chageText() {
    let ename = document.getElementById('ename').value;
    document.getElementById('ename').value = ename.toUpperCase();
}


function changeColor() {
    console.log("Test case focus")
    document.getElementById('focusdemo').style.background = "green"
}
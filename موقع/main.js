function changeInnerText(element) {
    if (element .innerText == "Login")
    {
        element .innerText = "Logout";
    } else {
        element .innerText = "Login";
    }
}
function remove(element){
    element.remove();
}

function showAlert(){
    alert('This button was clicked')
}
function changeLikesColors(element){
    element.style.color  = "red";
    element.style.backgroundColor = "blue";
}
function addLike(element){
    changeLikesColors(element)
    var likes = document.querySelector('#likes');
    likes.innerText++;
}
function changePadding(element) {
    changeLikesColors(element)
    element.style.padding = "20px";
}
function changeBorder(element){
    changeLikesColors(element)
    element.style.borderColor = "brown";
    element.style.borderWidth = "5px";
    element.style.borderStyle = "solid";
}
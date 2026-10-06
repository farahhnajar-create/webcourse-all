const learnMore = document.getElementById("learnMore");
learnMore.addEventListener("click", function(event){
    event.preventDefault();
    if(learnMore.style.backgroundColor ==="black"){
        learnMore.style.backgroundColor = "#211086C7";
        learnMore.style.color = "white";
    }
    else{
        learnMore.style.backgroundColor ="black";
        learnMore.style.color = "white";
    }
});
const shopiPhone = document.getElementById("shopiPhone");
const iPhoneTitle = document.getElementById("iPhoneTitle");
shopiPhone.addEventListener("click",function(event){
    event.preventDefault();
    iPhoneTitle.innerHTML ="choose your iPhone";
});
const searchicon = document.getElementById("searchicon");
searchicon.onclick = function(){
    alert("search clicked");
};
const storelink = document.getElementById("storelink");
storelink.ondblclick = function(){
    storelink.style.color= "blue";
};
var istatus =document.querySelector("h2")

var addFriend=document.querySelector("#Add")


var removeFriend=document.querySelector("#Remove")

addFriend.addEventListener("click",function()
{
    istatus.innerHTML="Friends"
    istatus.style.color="green"
})

removeFriend.addEventListener("click",function()
{
    istatus.innerHTML="stranger"
    istatus.style.color="blue"
})
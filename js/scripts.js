const clickButton = document.querySelector('.click-me')
// console.log(clickButton);
function clickHandler()
{
    alert("You clicked me!")
    // clickButton.removeEventListener("click", clickHandler);
}
clickButton.addEventListener("click", clickHandler, {once:true} );


function changeBGcolor()
{
    // clickButton.addEventListener("")
    // document.body.style.background = "pink"; #mixing css and javascript = bad
    document.body.classList.add("pinkBG");
}
clickButton.addEventListener("click", changeBGcolor);
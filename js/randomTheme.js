//change theme randomly
function getRandomColor() {
    return `#${Math.floor(Math.random() *256*256*256).toString(16)}`;
}

document.getElementById("theme").addEventListener("click", function(){
    document.body.style.backgroundColor = getRandomColor(); 
});
//update date and time
function updateDateTime(){
    let now=new Date();
    
    let dayName = now.toLocaleString("en-US", { weekday: "short" });
    let dateString = now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

    document.getElementById("day").innerText = `${dayName},`;
    document.getElementById("date").innerText = dateString;
}
setInterval(updateDateTime, 1000);
updateDateTime();
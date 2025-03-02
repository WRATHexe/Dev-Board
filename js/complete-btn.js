    let buttons = document.getElementsByClassName("complete-btn");
    let activityLog = getElement("activityLog");
    let clearHistory =getElement("clearHistory");
    for (let btn of buttons) {
        btn.addEventListener("click", function () {
            this.disabled = true;
            this.classList.add("opacity-70");

            let taskName = this.parentElement.parentElement.querySelector("h3").innerText;
            alert("You have completed the task: " + taskName);
            //handles task completion update
            const completeTask = getElement("completed-task");
            completeTask.innerText = parseInt(completeTask.innerText) + 1;
            const remainingTask = getElement("pending-task");
            remainingTask.innerText = parseInt(remainingTask.innerText) - 1;
            //handles activity log
            let time = new Date().toLocaleTimeString();
            let p = document.createElement("p");
            p.classList.add("bg-gray-200", "p-2", "rounded-lg", "text-sm");
            p.innerText = `You have completed the task "${taskName}" at ${time}`;
            activityLog.appendChild(p);

            let allDisabled = [...buttons].every(button => button.disabled);
            if (allDisabled) {
                alert("Congratulations!! You have completed all your tasks!");
            }
            clearHistory.addEventListener("click", function () {
                activityLog.innerHTML = "";
            });
        });
    }

    function getElement(id)
    {
        return document.getElementById(id);
    }
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

    //change theme randomly
    function getRandomColor() {
        return `#${Math.floor(Math.random() *256*256*256).toString(16)}`;
    }

    document.getElementById("theme").addEventListener("click", function(){
        document.body.style.backgroundColor = getRandomColor(); 
    });

    //redirect to blog page
    document.getElementById("to-blog").addEventListener("click", function(){
        window.location.href = "./blog.html";
    });
    
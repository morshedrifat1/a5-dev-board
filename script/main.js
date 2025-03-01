const allBtn = document.querySelectorAll('.completed-btn');
let nowTask = parseInt(document.getElementById("now-task").innerText);


for (let i = 0; i < allBtn.length; i++){ 
    allBtn[i].addEventListener('click', function (event) {

        // completed alert 
        alert("Boant updated Successfully");


        // after completed button disable
        allBtn[i].disabled = true;
        allBtn[i].classList.add("disabled");

        //total task number calculation
        const completedTask = getInnerTextById("completed-task");
        const totalTask = completedTask + 1;
        setInnerTextById("completed-task",totalTask);

        // activity log

        let bdTime24 = new Date().toLocaleTimeString();
        const activity = document.getElementById("activity");
        const createDiv = document.createElement('div');
        const getParent = event.target.parentElement.parentElement.parentElement;
        const taskTitle = getParent.querySelector(".card-title").innerText;

        createDiv.innerHTML = `
            <div class="bg-[#f4f7ff] p-3 rounded-lg">
                    <p class="text-[#494a4d] text-base">You have Complete The Task <span>${taskTitle}</span> at <span>${bdTime24}</span></p>
                </div>
        `;
        activity.appendChild(createDiv);



        // now task update number
        nowTask = nowTask - 1;
        document.getElementById("now-task").innerText = nowTask;

        // all task finished alert
        if (nowTask === 0) {
          alert("congrates!!! You have completed all the current task");
        }
    })
}

// bg color change section

document.getElementById("theme").addEventListener('click', function () {
    function getRandomRGB() {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);

      return `rgb(${r}, ${g}, ${b})`;
    }
    const themeColor = getRandomRGB();
    document.body.style.backgroundColor = themeColor;
});



const activityBox = document.getElementById("activity");
const historyButton = document.getElementById("clear-history");
historyButton.addEventListener('click', function () {
    activityBox.innerHTML = "";
})


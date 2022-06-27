const watch = document.querySelector("#watch");
let seconds = 0;
let timer;
let startButton = document.querySelector("#start")
let waitButton = document.querySelector("#wait")

const startWatch = () => {
    if(startButton.textContent === "Start"){
        startButton.textContent = "Stop"
        watch.classList.remove('wait');
        clearInterval(timer);
        timer = setInterval(()=> {
            seconds += 10;
            let dateTimer = new Date(seconds);
            watch.innerHTML =
                ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':'+
                ('0'+dateTimer.getUTCSeconds()).slice(-2)
        },10);
    }else {
        startButton.textContent = 'Start'
        waitWatch();
        resetWatch()
    }

}

const waitWatch = () => {
    watch.classList.add('wait');
    clearInterval(timer);
};

const resetWatch = () => {
    watch.classList.remove('wait');
    clearInterval(timer);
    seconds=0;
    watch.innerHTML='00:00';
    startWatch()
};

document.addEventListener('click', (e)=>{

    console.log(`clicked on ${e.target}`)
    const element = e.target;
    if (element.id === 'start') startWatch();
    if (element.id === 'reset') resetWatch();
})

waitButton.addEventListener('dblclick', (e) => {

    startButton.textContent = "Start";
    waitWatch()
})
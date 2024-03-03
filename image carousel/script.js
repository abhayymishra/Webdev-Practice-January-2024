const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval;

function run() {
    idx++;
    changeImage();
}

function changeImage() {
    if(idx > img.length - 1){
        idx = 0;
    }
    else if(idx < 0){
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    interval = setInterval(run , 2000);
    clearInterval(interval);
    
}

rightBtn.addEventListener('click' , () => {
    idx++;
    changeImage();
    resetInterval();
})

leftBtn.addEventListener('click' , () => {
    idx--;
    changeImage();
    resetInterval();
})
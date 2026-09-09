var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');

var h = document.getElementById('hour');
var m = document.getElementById('minute');
var s = document.getElementById('sec');

var startTimer = null;

start.disabled = true;

[h, m, s].forEach(input => {
    input.addEventListener('input', () => {
        if (h.value > 0 || m.value > 0 || s.value > 0) {
            start.disabled = false;
        } else {
            start.disable = true;
        }
    });
});

start.addEventListener('click', function(){
    function startInterval(){
        startTimer = setInterval(function(){
            timer();
        }, 1000);
    }
    startInterval();
    start.style.display = "none";
    reset.style.display = "inline-block";
    pause.style.display = "inline-block";
});

pause.addEventListener('click', function(){
    stopInterval();
    pause.style.display = "none";
    start.style.display = "inline-block";
});

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopInterval();
    start.disabled = true;
    start.style.display = "inline-block";
    pause.style.display = "none";
    reset.style.display = "none";
});

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
        start.disable = true;
    } else if (s.value != 0){
        s.value--;
    } else if (m.value != 0 && s.value){
        s.value = 59;
        m.value--;
    } else if (h.value != 0 && m.value == 0) {
        start.disabled = true;
    }
    return;
}

function stopInterval() {
    clearInterval(startTimer);
}
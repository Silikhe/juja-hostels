
let dd = document.getElementById("days");
let hh = document.getElementById("hours");
let mm = document.getElementById("min");
let ss = document.getElementById("sec");


function countDown(){
    // var now = new Date(milliseconds)
    // var now = new Date(dateString)
    var now = new Date()
    var eventDate = new Date(0,0,0);

    let currentTime =now.getTime();
    let eventTime = eventDate.getTime();

        let remTime = currentTime-eventTime;

        let s =Math.floor(remTime/1000);
        let m =Math.floor(s/60);
        let h =Math.floor(m/60);
        let d =Math.floor(h/24);

        d %= 24;
        h %= 60;
        m %= 60;
        s %= 60;


    // d = (d<10)?"0"+d:d;
    h = (h < 10) ? "0"+ h : h;
    m = (m < 10) ? "0"+ m : m;
    s = (s < 10) ? "0"+ s : s;

    dd.innerText = d;
    hh.innerText = h;
    mm.innerText = m;
    ss.innerText = s;


setTimeout(countDown, 1000);

}

countDown();
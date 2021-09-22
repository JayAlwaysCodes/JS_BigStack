function countdown(){
    let now = new Date();
    let eventDate = new Date(2021,10,20);
    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();
    let remTime = eventTime - currentTime;
    let s = Math.floor(remTime/1000);
    let  m = Math.floor(s/60);
    let h = Math.floor(m/60);
    let d = Math.floor(h/24);
    let we = Math.floor(d/7)


    we %= 7
    h %= 24
    m %= 60
    s %= 60

    h = (h<10 ) ? '0' + h : h;
    m = (m<10 ) ? '0' + m : m;
    s = (s<10 ) ? '0' + s : s;

    document.getElementById('days').textContent = d;
    document.getElementById('days').innerText = d;

    document.getElementById('hours').textContent = h;
    document.getElementById('minutes').textContent = m;
    document.getElementById('seconds').textContent = s;

    setTimeout(countdown, 1000)


}
countdown()
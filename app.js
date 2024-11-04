function clock(){
    var text = document.getElementById("text")

    var date = new Date()

    var hours = date.getHours()

    var timerepresentator = "AM"

    if(hours > 12){
        hours = hours -12;
        timerepresentator = "PM ";
    }

    if(hours < 10){
        hours = "0" + hours;
    }

    // console.log(time)

    var min = date.getMinutes()
    var sec = date.getSeconds()

    if(min < 10){
        min = "0" + min;
    }

    if(sec < 10){
        sec = "0" + sec;
    }

    // console.log(min,sec)

    text.innerHTML = `${hours}: ${min}: ${sec} ${timerepresentator}`

}
setInterval(clock,1000)
clock()
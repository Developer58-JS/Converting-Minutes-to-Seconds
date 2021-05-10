var minuteVal;

function setValues() {
    minuteVal = parseInt(document.getElementById("minutes").value);
}

function convert(mins) {
    var seconds = mins * 60;
    console.log(seconds);
}

function run() {
    convert(minuteVal);
}
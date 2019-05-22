var onload = document.getElementById('body');
var numberCol = 0;
var july = 28;
var month = [31, july, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const Data = new Date;

function event() {
    var div = document.createElement("div");
    div.setAttribute('class', 'colEvent');
    div.setAttribute("id", `colEvent${numberCol}`);
    document.getElementById(`a${numberCol}`).appendChild(div);
    for (var i = 0; i != 3; i++) {
        var div = document.createElement("div");
        div.setAttribute("id", `event${numberCol}${i}`);
        div.setAttribute('class', 'eventBox');
        document.getElementById(`colEvent${numberCol}`).appendChild(div);
        document.getElementById(`event${numberCol}${i}`).style.height = document.getElementById(`event${numberCol}${i}`).clientWidth + "px";
    }
}
function loadas() {
    for (numberCol; numberCol <= month[Data.getMonth()] - 1; numberCol++) {
        var idBox = document.getElementsByClassName('columnDay')[numberCol % 7].id;
        var colDay = document.getElementById(idBox);
        var div = document.createElement("div");
        div.setAttribute("id", `a${numberCol}`);
        div.setAttribute('class', 'box');
        document.getElementById(idBox).appendChild(div);
        document.getElementById(`a${numberCol}`).innerHTML = numberCol + 1;
        event();
        var widthBoxDay = document.getElementById(`a${numberCol}`).clientWidth;
        document.getElementById(`a${numberCol}`).style.height = widthBoxDay + "px";
    }
}
onload.addEventListener('onload', loadas());
if(Data.getFullYear() % 4 === 0)
{
    july = 29; 
}

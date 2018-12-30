

function copper() {
    var c = document.getElementById('current');
    var now = Math.floor(parseInt(c.firstChild.nodeValue, 10) + 2);
    c.firstChild.nodeValue = ""+ now;
}

function silver() {
    var c = document.getElementById('current');
    var now = Math.floor(parseInt(c.firstChild.nodeValue, 10) + 3);
    c.firstChild.nodeValue = ""+ now;
}

function gold() {
    var c = document.getElementById('current');
    var now = Math.floor(parseInt(c.firstChild.nodeValue, 10) + 5);
    c.firstChild.nodeValue = ""+ now;
}

function reset() {
    var c = document.getElementById('result');
    var b = document.getElementById('current');
    var now = Math.floor(2 ^ Math.floor((Math.random()*10+5) * 10) + 3 ^ Math.floor((Math.random()+13) * 10) + 5 ^ Math.floor((Math.random()+4) * 10));
    c.firstChild.nodeValue = ""+ now;
    b.firstChild.nodeValue = ""+ 0;
}

function match() {
    var c = document.getElementById('result');
    var b = document.getElementById('current');
    if (c.firstChild.nodeValue == b.firstChild.nodeValue){
        c.firstChild.nodeValue = ""+ 0;
        b.firstChild.nodeValue = ""+ 0;
        alert("You won !");
    }else{
        alert("Incorrect !");
    }

}

// add event listener to table

document.addEventListener('DOMContentLoaded', function () {
    var b1 = document.getElementById("copper");
    b1.addEventListener('click', copper, false);
    var s1 = document.getElementById("silver");
    s1.addEventListener('click', silver, false);
    var g1 = document.getElementById("gold");
    g1.addEventListener('click', gold, false);
    var r1 = document.getElementById("reset");
    r1.addEventListener('click', reset, false);
    var m1 = document.getElementById("match");
    m1.addEventListener('click', match, false);
}, false);
var block = [];
var number;
var gameOver = false;

window.onload = function() {
    if (gameOver) {
        alert ("You Winnn");
        return;
    }

    for (let i=1; i<=4;i++) {
        block[i] = [];
    }

    block[1][1] = document.getElementById("b1");
    block[1][2] = document.getElementById("b2");
    block[1][3] = document.getElementById("b3");
    block[1][4] = document.getElementById("b4");
    block[2][1] = document.getElementById("b5");
    block[2][2] = document.getElementById("b6");
    block[2][3] = document.getElementById("b7");
    block[2][4] = document.getElementById("b8");
    block[3][1] = document.getElementById("b9");
    block[3][2] = document.getElementById("b10");
    block[3][3] = document.getElementById("b11");
    block[3][4] = document.getElementById("b12");
    block[4][1] = document.getElementById("b13");
    block[4][2] = document.getElementById("b14");
    block[4][3] = document.getElementById("b15");
    block[4][4] = document.getElementById("b16");

    block[1][1].addEventListener('click', function(){
        if (document.getElementById("b1").innerHTML >= 14) document.getElementById("b1").innerHTML=0;
        else document.getElementById("b1").innerHTML ++;
    });
    block[1][2].addEventListener('click', function(){
        if (document.getElementById("b2").innerHTML >= 14) document.getElementById("b2").innerHTML=0;
        else document.getElementById("b2").innerHTML ++;
    });
    block[1][3].addEventListener('click', function(){
        if (document.getElementById("b3").innerHTML >= 14) document.getElementById("b3").innerHTML=0;
        else document.getElementById("b3").innerHTML ++;
    });
    block[1][4].addEventListener('click', function(){
        if (document.getElementById("b4").innerHTML >= 14) document.getElementById("b4").innerHTML=0;
        else document.getElementById("b4").innerHTML ++;
    });
    block[2][1].addEventListener('click', function(){
        if (document.getElementById("b5").innerHTML >= 14) document.getElementById("b5").innerHTML=0;
        else document.getElementById("b5").innerHTML ++;
    });
    block[2][2].addEventListener('click', function(){
        if (document.getElementById("b6").innerHTML >= 14) document.getElementById("b6").innerHTML=0;
        else document.getElementById("b6").innerHTML ++;
    });
    block[2][3].addEventListener('click', function(){
        if (document.getElementById("b7").innerHTML >= 14) document.getElementById("b7").innerHTML=0;
        else document.getElementById("b7").innerHTML ++;
    });
    block[2][4].addEventListener('click', function(){
        if (document.getElementById("b8").innerHTML >= 14) document.getElementById("b8").innerHTML=0;
        else document.getElementById("b8").innerHTML ++;
    });
    block[3][1].addEventListener('click', function(){
        if (document.getElementById("b9").innerHTML >= 14) document.getElementById("b9").innerHTML=0;
        else document.getElementById("b9").innerHTML ++;
    });
    block[3][2].addEventListener('click', function(){
        if (document.getElementById("b10").innerHTML >= 14) document.getElementById("b10").innerHTML=0;
        else document.getElementById("b10").innerHTML ++;
    });
    block[3][3].addEventListener('click', function(){
        if (document.getElementById("b11").innerHTML >= 14) document.getElementById("b11").innerHTML=0;
        else document.getElementById("b11").innerHTML ++;
    });
    block[3][4].addEventListener('click', function(){
        if (document.getElementById("b12").innerHTML >= 14) document.getElementById("b12").innerHTML=0;
        else document.getElementById("b12").innerHTML ++;
    });
    block[4][1].addEventListener('click', function(){
        if (document.getElementById("b13").innerHTML >= 14) document.getElementById("b13").innerHTML=0;
        else document.getElementById("b13").innerHTML ++;
    });
    block[4][2].addEventListener('click', function(){
        if (document.getElementById("b14").innerHTML >= 14) document.getElementById("b14").innerHTML=0;
        else document.getElementById("b14").innerHTML ++;
    });
    block[4][3].addEventListener('click', function(){
        if (document.getElementById("b15").innerHTML >= 14) document.getElementById("b15").innerHTML=0;
        else document.getElementById("b15").innerHTML ++;
    });
    block[4][4].addEventListener('click', function(){
        if (document.getElementById("b16").innerHTML >= 14) document.getElementById("b16").innerHTML=0;
        else document.getElementById("b16").innerHTML ++;
    });

    setInterval(check, 1000/10);
}

var cnt4 = 0;
var cnt6 = 0;
var cnt7 = 0;
var cnt10 = 0;
var cnt11 = 0;
var cnt12 = 0;
var cnt13 = 0;
var cnt14 = 0;

var hihi = [];

function check() {
    for (i=1;i<=4;i++) hihi[i] = [];
    hihi[1][1] = parseInt(document.getElementById("b1").innerHTML);
    hihi[1][2] = parseInt(document.getElementById("b2").innerHTML);
    hihi[1][3] = parseInt(document.getElementById("b3").innerHTML);
    hihi[1][4] = parseInt(document.getElementById("b4").innerHTML);
    hihi[2][1] = parseInt(document.getElementById("b5").innerHTML);
    hihi[2][2] = parseInt(document.getElementById("b6").innerHTML);
    hihi[2][3] = parseInt(document.getElementById("b7").innerHTML);
    hihi[2][4] = parseInt(document.getElementById("b8").innerHTML);
    hihi[3][1] = parseInt(document.getElementById("b9").innerHTML);
    hihi[3][2] = parseInt(document.getElementById("b10").innerHTML);
    hihi[3][3] = parseInt(document.getElementById("b11").innerHTML);
    hihi[3][4] = parseInt(document.getElementById("b12").innerHTML);
    hihi[4][1] = parseInt(document.getElementById("b13").innerHTML);
    hihi[4][2] = parseInt(document.getElementById("b14").innerHTML);
    hihi[4][3] = parseInt(document.getElementById("b15").innerHTML);
    hihi[4][4] = parseInt(document.getElementById("b16").innerHTML);

    for (let i=1;i<=4;i++) {
        var sumcol = 0; var sumrow = 0;
        for (let j=1;j<=4;j++) {
            sumcol += hihi[i][j];
            sumrow += hihi[j][i];
        }
        console.log("col "+i + ": " + sumcol + "row " + i + ": " + sumrow);
        if (sumcol != 38) return;
        if (sumrow != 38) return;
    }

    if (hihi[1][1] + hihi[2][2] + hihi[3][3] + hihi[4][4] != 38) return;
    if (hihi[4][1] + hihi[3][2] + hihi[2][3] + hihi[1][4] != 38) return;

    for (let i=1;i<=4;i++) {
        for (let j=1;j<=4;j++) {
            if (hihi[i][j]==4) cnt4++;
            if (hihi[i][j]==6) cnt6++;
            if (hihi[i][j]==7) cnt7++;
            if (hihi[i][j]==10) cnt10++;
            if (hihi[i][j]==11) cnt11++;
            if (hihi[i][j]==12) cnt12++;
            if (hihi[i][j]==13) cnt13++;
            if (hihi[i][j]==14) cnt14++;
        }
    }

    cnt4 = 0; cnt6 = 0; cnt7 = 0; cnt10 = 0; cnt11 = 0; cnt12 = 0; cnt13 = 0; cnt14 = 0;
    // console.log("4:"+cnt4+"; 6:"+cnt6+"; 7:"+cnt7+"; 10:"+cnt10+"; 11:"+cnt11+"; 12:"+cnt12+"; 13:"+cnt13+"; 14:"+cnt14);
    if (cnt4>=1 && cnt6>=1 && cnt7>=2 && cnt10>=5 && cnt11>=1 && cnt12>=2 && cnt13>=1 && cnt14>=1) gameOver=true;
}


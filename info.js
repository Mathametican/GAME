var t=Math.floor((Math.random()*500)+1);
var count=0;

function Kontrol(){
    var i=Number(document.getElementById("in1").value);

    if(t>i){
    count++;
    document.getElementById("cc").innerHTML=count;
    document.getElementById("sonuc").innerHTML="Please Enter Big Number Than Your Guess Number";
    }
    else if(t<i){
        count++;
        document.getElementById("cc").innerHTML=count;
        document.getElementById("sonuc").innerHTML="Please Enter Small Number Than Your Guess Number";
    }
    else if(t==i){
    count++;
    document.getElementById("cc").innerHTML=count;
    document.getElementById("sonuc").innerHTML="Congratulations You Guess the True Number";
    }
}

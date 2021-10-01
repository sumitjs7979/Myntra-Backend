function random1(number){
    return Math.floor(Math.random()*number);
}
function color_value(){
var col="rgb("+random1(255)+","+random1(255)+","+random1(255)+")";
return col;
}
var aa=document.getElementById('a');
var bb=document.getElementById('b');
var cc=document.getElementById('c');
var dd=document.getElementById('d')
function back_color_change1(){

aa.style.color=color_value();
aa.style.background=color_value();
}
function back_color_change2(){

bb.style.color=color_value();
bb.style.background=color_value();
}
function back_color_change3(){

cc.style.color=color_value();
cc.style.background=color_value();
}
function back_color_change4(){

dd.style.color=color_value();
dd.style.background=color_value();
}
aa.addEventListener('click',back_color_change1)
bb.addEventListener('click',back_color_change2)
cc.addEventListener('click',back_color_change3)
dd.addEventListener('click',back_color_change4)
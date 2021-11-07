// function random1(number){
//     return Math.floor(Math.random()*number);
// }
// function color_value(){
// var col="rgb("+random1(255)+","+random1(255)+","+random1(255)+")";
// return col;
// }
var aa=document.getElementById('a');
var bb=document.getElementById('b');
var cc=document.getElementById('c');
var dd=document.getElementById('d')

function back_color_change1(){

aa.style.color= "white";
aa.style.background= "green";
bb.style.color="black";
bb.style.background= "white";
cc.style.color="black";
cc.style.background= "white";
dd.style.color="black";
dd.style.background= "white";
// console.log("1")
// if( aa.style.color==="white" && aa.style.background=== "green"){
//    // console.log(aa.style.background)
//     return true;
// }else{
//     return false;
// }
}
function back_color_change2(){
    aa.style.color= "black";
    aa.style.background= "white";
bb.style.color="white";
bb.style.background= "green";
cc.style.color="black";
cc.style.background= "white";
dd.style.color="black";
dd.style.background= "white";
// console.log("2")
// if( bb.style.color==="white" && bb.style.background=== "green"){
//     return true;
// }else{
//     return false;
// }
}
function back_color_change3(){
    aa.style.color= "black";
    aa.style.background= "white";
    bb.style.color="black";
bb.style.background="white";
// console.log("3")
cc.style.color="white";
cc.style.background= "green";
dd.style.color="black";
dd.style.background= "white";
// if( cc.style.color==="white" && cc.style.background=== "green"){
//     return true;
// }else{
//     return false;
// }
}
function back_color_change4(){
    aa.style.color= "black";
    aa.style.background= "white";
    bb.style.color="black";
bb.style.background="white";

cc.style.color="black";
cc.style.background= "white";
    dd.style.color="white";
    dd.style.background= "green";
   // console.log("4")
    // if( dd.style.color==="white" && dd.style.background=== "green"){
    //     return true;
    // }else{
    //     return false;
    // }
   
}

aa.addEventListener('click',back_color_change1)
bb.addEventListener('click',back_color_change2)
cc.addEventListener('click',back_color_change3)
dd.addEventListener('click',back_color_change4)

// var x= back_color_change1()
//     var y= back_color_change2()
    
//     var z= back_color_change3()
//     var zz= back_color_change4()
//   // console.log(y())

// function addbag(){
  
//     // console.log(x,y,z,zz)
//     if(x ===true || y ===true || z ===true || zz ===true ){
//          window.location.href = "checkout";
//     }
//     else{
//         alert("Please select size")
//     }
// }
var but=document.getElementById('checkbut');
         var div=document.getElementById('coupondiv');
         var input=document.getElementById('inputbox');
         var coupon_para=document.createElement('p');
         var showdiscount=document.createElement('p');
         var showtotal=document.createElement('h4');
         var contbut=document.createElement('button');
         contbut.setAttribute('class','contbutton');
         var anch=document.createElement('a');
         anch.innerText ='CONTINUE'
         coupon_para.setAttribute("class","p")
         showdiscount.setAttribute("class","p")
         showtotal.setAttribute('class','h');
         but.onclick=function(){
             check();
         }
 function check(){
             if(input.value==='FIRST30'){
                  var disc=760-(760*30/100);
            coupon_para.innerText= "coupon applied";
            coupon_para.style.color= 'green';
           showdiscount.innerText = "Total Discount Rs 228 applied successfully";
           showtotal.innerText = `Total Price After Discount = Rs ${Math.round(disc)}`;
           anch.setAttribute('href','checkoutpage2')
            contbut.append(anch);
            div.append(coupon_para,showdiscount,showtotal,contbut);
             }else{
                coupon_para.innerText= "coupon not valid !";
            coupon_para.style.color= 'red';
            showdiscount.innerText = "";
           showtotal.innerText = "";
           anch.setAttribute('href','checkout')
            contbut.append(anch);
            div.append(coupon_para,showdiscount,showtotal,contbut);
             }   
         }
            
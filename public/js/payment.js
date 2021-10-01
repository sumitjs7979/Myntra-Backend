obj=[{
    card_Number:1234567890,
    card_holder_name:'saurabh',
    valid_year:2025,
    cvv:1234
},
{
    card_Number:1234567891,
    card_holder_name:'lucky',
    valid_year:2024,
    cvv:1235
},
]

const obj_json = JSON.stringify(obj);
    
localStorage.setItem("myObj",obj_json);

let myObj = localStorage.getItem("myObj");

myObj =JSON.parse(myObj);

function checkCard(){
    var card_number_count=0;
    var card_holder_name_count=0;
    var valid_year_count=0;
    var cvv_count=0;
    var aa=document.getElementById('card_number').value;
    var bb =document.getElementById('b').value;
    var cc=document.getElementById('c').value;
    var dd=document.getElementById('d').value;
        myObj.forEach(function(product){
            console.log(product.card_Number+ "   "+product.card_holder_name+"  "+product.valid_year+" "+product.cvv)
            if(product.card_Number==aa){
                card_number_count++
            }
            if(product.card_holder_name==bb){
                card_holder_name_count++
            }
            if(product.valid_year>=cc){
                valid_year_count++;
            }
            if(product.cvv==dd){
                cvv_count++;
            }
        })
    if(card_number_count>0){
        if(card_holder_name_count>0){
            if(valid_year_count>0){
                if(cvv_count>0){
                    setTimeout(function(){
                        alert('Your order is successfully placed')
                    },2000) 
                }
                }
            }
        }
        
    if(card_number_count==0 && card_holder_name_count==0 && valid_year_count==0 && cvv_count==0){
                    setTimeout(function(){
                            alert('Invalid card no,Invalid name,Invalid year,Invalid CVV')
                    },1000) 
    }else if(card_holder_name_count==0 && card_number_count==0 && valid_year_count==0){
                    setTimeout(function(){
                            alert('Invalid card no,Invalid name,Invalid year')
                    },1000) 
    }else if(cvv_count==0 && card_holder_name_count==0 && card_number_count==0){
                    setTimeout(function(){
                            alert('Invalid card no,Invalid name,Invalid CVV')
                    },1000) 
    }else if(valid_year_count==0 && card_number_count==0 && cvv_count==0){
                    setTimeout(function(){
                            alert('Invalid card no,Invalid year,Invalid CVV')
                    },1000) 
    }else if(card_holder_name_count==0 && valid_year_count==0 && cvv_count==0){
                    setTimeout(function(){
                            alert('Invalid name,Invalid year,Invalid CVV')
                    },1000) 
    }else if(card_number_count==0 && card_holder_name_count==0){
                    setTimeout(function(){
                            alert('Invalid card no,Invalid name')
                    },1000) 
    }else if(card_number_count==0 && valid_year_count==0){
                    setTimeout(function(){
                            alert('Invalid card no,Invalid year')
                    },1000) 
    }else if(card_number_count==0 && cvv_count==0){
                    setTimeout(function(){
                            alert('Invalid card no,Invalid CVV')
                    },1000) 
    }else if(card_holder_name_count==0 && valid_year_count==0){
                    setTimeout(function(){
                            alert('Invalid name,Invalid year')
                    },1000) 
    }else if(card_holder_name_count==0 && cvv_count==0){
                    setTimeout(function(){
                            alert('Invalid name,Invalid CVV')
                    },1000) 
    }else if(valid_year_count==0 && cvv_count==0){
                    setTimeout(function(){
                            alert('Invalid year,Invalid CVV')
                    },1000) 
    }else if(card_number_count==0){
                    setTimeout(function(){
                            alert('Invalid card no')
                    },1000) 
    }else if(card_holder_name_count==0){
                setTimeout(function(){
                        alert('Invalid name')
                },1000) 
    }else if(valid_year_count==0){
                setTimeout(function(){
                        alert('Invalid year')
                },1000) 
    }else if(cvv_count==0){
                setTimeout(function(){
                        alert('Invalid CVV')
                },1000) 
    }             
}   
let wishlist_data = JSON.parse(localStorage.getItem('wishlist'));
    //wishlist_data.clear();

    let data_div = document.getElementById('data');
    wishlist_data.forEach(function(ele){
            let div = document.createElement('div');
            
            let p_brand = document.createElement('p');
            p_brand.innerText = ele.Brand;
            p_brand.style.marginBottom = '0px';

            let p_type = document.createElement('p');
            p_type.innerText = ele.Type;
            p_type.style.fontWeight = '300';
            p_type.style.marginTop = '3px';
            p_type.style.fontSize = "13px";
            p_type.style.color = '#616161';
            p_type.style.marginBottom = '0px';

            let p_price = document.createElement('p');
            p_price.innerText = "Rs. "+ele.Price;
            p_price.style.marginTop = '7px';
            p_price.style.fontSize = '15px';

            let p_img = document.createElement('img');
            p_img.src = ele.image;
            //p_img.id = 'hover-btn';
            //let hover_div = document.createElement('div');
           // hover_div.setAttribute('class','button1');
            //p_img.add(hover_div);


            let a_img =document.createElement('a');
            a_img.href ="myntra_addToBag"
            a_img.append(p_img);

            let cart_btn = document.createElement('button');
            cart_btn.id = 'add-to-cart';
            cart_btn.innerHTML = "MOVE TO BAG";
            cart_btn.style.backgroundColor = 'white';
            cart_btn.style.color = '#EC407A';
            cart_btn.style.border = '1px solid #BDBDBD';
            cart_btn.style.width = '234px';
            cart_btn.style.height = '50px';
            cart_btn.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif';
            cart_btn.style.fontWeight = 'bold';
            cart_btn.style.fontSize = '14px';
            cart_btn.onclick = function(){
                MoveToBag(ele);
            }

            div.append(a_img,p_brand,p_type,p_price,cart_btn);
            data_div.append(div);
        });

        if(localStorage.getItem('cart') === null){
            localStorage.setItem('cart',JSON.stringify([]));
        }


        function MoveToBag(ele){
            let cart_data = JSON.parse(localStorage.getItem("cart"));
            cart_data.push(ele);
            localStorage.setItem('cart',JSON.stringify(cart_data));
        }
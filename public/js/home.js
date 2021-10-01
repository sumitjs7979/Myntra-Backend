// function navbar() {
//   return `
//       <a href="homepage">
//         <div class="logo">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmcaLWUtIoeiCAjZIl4sP523Ma23rbm5_TvWLbxGmkDnePtvIy8wsg8ktiMGAUvt1q6c&usqp=CAU"
//             width="42px"
//             height="48px"
//           />
//         </div>
//       </a>
//       <div class="nav-bar-niche-header">
//         <div class="left-tab">
//           <div class="category">
//             <span>Men</span>
//             <div class="category-sign"></div>
//             <div class="category-hover-div">
//               <div class="category-hover-div-right">
//                 <a href="#" class="sub-heading">Topwear</a>
//                 <a href="product">T-shirt</a>
//                 <a href="#">Casual Shirts</a>
//                 <a href="#">Formal Shirts</a>
//                 <a href="#">Sweatshirts</a>
//                 <a href="#">Sweaters</a>
//                 <a href="#">Jacket</a>
//                 <a href="#">Blazers & Coats</a>
//                 <a href="#">Suits</a>
//                 <a href="#">Rain Jackets</a>

//                 <div class="drop_line"></div>

//                 <a href="#" class="sub-heading">Indian& Festive Wear</a>
//                 <a href="#">Kurts& Kurts Sets</a>
//                 <a href="#">Sherwanis</a>
//                 <a href="#">Nehru Jackets</a>
//                 <a href="#">dhotis</a>

//                 <a href="#" class="sub-heading">Bottomwear</a>
//                 <a href="#">Jeans</a>
//                 <a href="#">Casual Trousers</a>
//                 <a href="#">Formal Trousers</a>
//                 <a href="#">Shorts</a>
//                 <a href="#">Track Pants & Joggers</a>
//                 <div class="drop_line"></div>
//                 <a href="#" class="sub-heading">Innerwear & Sleepwear</a>
//                 <a href="#">Briefs & Trunks</a>
//                 <a href="#">Boxers</a>
//                 <a href="#">Vests</a>
//                 <a href="#">Thermals</a>
//                 <div class="drop_line"></div>
//                 <a href="#" class="sub-heading">Plus Size</a>
//                 <a href="#">T-shirt</a>
//                 <a href="#">Casual Shirts</a>
//                 <a href="#">Formal Shirts</a>
//                 <a href="#">Sweatshirts</a>
//                 <div class="drop_line"></div>
//                 <a href="#" class="sub-heading">Footwear</a>
//                 <a href="#">Sweaters</a>
//                 <a href="#">Jacket</a>
//                 <a href="#">Blazers & Coats</a>
//                 <a href="#">Suits</a>
//                 <a href="#">Rain Jackets</a>
//                 <div class="drop_line"></div>

//                 <a href="#" class="sub-heading">PerSonal Care & Grooming</a>
//                 <a href="#" class="sub-heading">Sunglasses & Frames</a>
//                 <a href="#" class="sub-heading">Watches</a>
//                 <a href="#">T-shirt</a>
//                 <a href="#">Casual Shirts</a>
//                 <a href="#">Formal Shirts</a>
//                 <a href="#">Sweatshirts</a>
//                 <a href="#">Sweaters</a>
//                 <a href="#">Jacket</a>
//                 <a href="#">Blazers & Coats</a>
//                 <a href="#">Suits</a>
//                 <a href="#">Rain Jackets</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="navlink">
//         <a href="">WOMEN</a>
//         <a href="">KIDS</a>
//         <a href="">HOME & LIVING</a>
//         <a href="">BEAUTY</a>
//       </div>
//       <div class="inputbox">
//         <input type="text" placeholder="Search for products, brand and more" />
//       </div>

//       <div class="navprofile" style="margin-left: 30px; margin-top: 20px">
//         <ul>
//           <div id="main_menu" class="main_list">
//             Profile
//             <ul>
//               <li>
//                 <p id="welcome">WELCOME</p>
//                 <p>To acess account and manage orders</p>
//               </li>
//               <li></li>
//               <li>
//                 <div>
//                   <button id="login_button">
//                     <a href="login">LOGIN/SIGNUP</a>
//                   </button>
//                 </div>
//               </li>
//               <hr class="line1" />
//               <ol>
//                 <li>Orders</li>
//                 <li>Wishlist</li>
//                 <li>Gift Cards</li>
//                 <li>Contact Us</li>
//                 <li>Myntra Insider</li>
//                 <li>Myntra Credit</li>
//               </ol>
//             </ul>
//           </div>
//         </ul>

//         <div><a style="margin-left: -27px" href="">Wishlist</a></div>
//         <div><a href="myntra_addToBag">Bag</a></div>
      
//     </div>`;
// }

// export default navbar;
var slideIndex = 1;
showSlides(slideIndex);

//  function plusSlides(n) {
//    showSlides((slideIndex += n));
//  }

 function currentSlide(n) {
        showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000);
}

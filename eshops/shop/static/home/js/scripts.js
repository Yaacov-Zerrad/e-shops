/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// panier preparation









if(localStorage.getItem('cart') == null){
    var cart = {};
    console.log('1');
}else{
    cart = JSON.parse(localStorage.getItem('cart'));
    console.log('2');
}
console.log(cart);
// recup click
(function(){
    if(localStorage.getItem('cart') != null){
      document.getElementById('cart').innerHTML = Object.keys(cart).length;  
    }
})();

$(document).on('click', '.ted', function(){
    // recup id
    var item_id = this.id.toString();
    console.log(item_id);
    // += nuber clik in 1one id
    if(cart[item_id] != undefined){
        cart[item_id] = cart[item_id] +1;
    }else{
        cart[item_id] = 1;
    }
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('cart').innerHTML = Object.keys(cart).length;
    console.log(Object.keys(cart).length);
})

// console.log('testr');


// var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'), document.getElementById('panier-popo').setAttribute('data-bs-content', 'list'))
// var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl)
// })

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl), 
  document.getElementById('cart-popo').setAttribute('data-bs-content', 'list')
})


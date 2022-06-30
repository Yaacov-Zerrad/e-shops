/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// cart preparation
if(localStorage.getItem('cart') == null){
    var cart = {};
}else{
    cart = JSON.parse(localStorage.getItem('cart'));
}
// recup click
(function(){
    document.getElementById('cart').innerHTML = Object.keys(cart).length;
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
console.log('test');
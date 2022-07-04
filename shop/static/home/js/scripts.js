/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// panier preparation




// $(function () {
//     $('[data-toggle="tooltip"]').tooltip({html:true})
//   })


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
        amount = cart[item_id][0] +1;
        cart[item_id][0] = amount;
        cart[item_id][2] += parseFloat(document.getElementById("price-"+item_id).innerHTML);
    }else{
        amount = 1;
        title = document.getElementById("title-"+item_id).innerHTML;
        price = parseFloat(document.getElementById("price-"+item_id).innerHTML);
        cart[item_id] = [amount, title, price ];
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


function cart_list(cart){
    let cart_string = " ";
    let index = 1;
    cart_string = '<h5>Cart list</h5>';
    for(let i in cart){
        cart_string += index ;
        cart_string += ": " + cart[i][1] + " x "+ cart[i][0] + "<br>";
        index +=1
    }
    cart_string += "<a class='btn btn-outline-dark' href='/checkout'>Checkout</a>";

    
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl, {html:true}), 
    document.getElementById('cart-popo').setAttribute('data-bs-content', cart_string)
})
}

cart_list(cart)



$(document).on('click', '.ted',function(){
    let cart_string = " ";
    let index = 1;
    cart_string = '<h5>Cart list</h5>';
    for(let i in cart){
        cart_string += index ;
        cart_string += ": " + cart[i][1] + " x "+ cart[i][0] + "<br>";
        index +=1
    }
    cart_string += "<a class='btn btn-outline-dark' href='/shop/checkout'>Checkout</a>";

    document.getElementById('cart-popo').setAttribute('data-bs-content', cart_string)
})


// CHECKOUT
let total = 0;
let nbr = 0;

for (let item in  cart) {
    let name = cart[item][1];
    let amount = cart[item][0];
    let price = cart[item][2];
    nbr += amount;
    total += price;
    let item_string =  `<tr>
                        <td scope="row"> ${name}</td>
                        <td> ${amount}</td>
                        <td> $ ${price}</td>
                        </tr>`
    $('#items-list').append(item_string);
}
let item_nbr = `<br>
                <tr >
                <td scope="row">Price and amount total</td>
                <td > ${nbr}</td>
                <td> $ ${total}</td>
                </tr>`
$('#items-list').append(item_nbr);




// price

$('#items').val(JSON.stringify(cart));
$('#total').val(total);











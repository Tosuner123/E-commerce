 // shoppping-cart
document.addEventListener("DOMContentLoaded", function() {
  var cartBtn = document.getElementById("cart-btn");
  var cartSidebar = document.getElementById("shopping-cart");
  var cartClose = document.getElementById("cart-close");
  var cartItems = document.getElementById("cart-items");
  var cartCheckout = document.getElementById("cart-checkout");
  var cartReset = document.getElementById("cart-reset"); // reset button
  
  // Load items from cart on page load
  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  for (var i = 0; i < cart.length; i++) {
  var item = document.createElement("li");
  item.textContent = cart[i];
  cartItems.appendChild(item);
  }
  
  cartBtn.addEventListener("click", function() {
  cartSidebar.style.display = cartSidebar.style.display === "none" ? "block" : "none";
  });
  // cartsidebar görünür görünmez olmasını kontrol eder
  
  cartClose.addEventListener("click", function() {
  cartSidebar.style.display = "none";
  });
  
  var addToCartButtons = document.getElementsByClassName("add-to-cart");
  for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function() {
  var product = this.dataset.product;
  var item = document.createElement("li");
  item.textContent = product;
  cartItems.appendChild(item);
  // Save item to cart
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  });
  }
  
  
  
  cartReset.addEventListener("click", function() {
  cartItems.innerHTML = ""; // reset items in cart
  cart = []; // reset cart
  localStorage.removeItem("cart"); // remove cart from local storage
  });
  resetBtn.addEventListener("click", function() {
    count = 0;
    cartItemCount.textContent = count;
    cart = [];
    localStorage.removeItem("cart");
    });
    let cartItemCount = document.getElementById("cart-item-count");
let resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", function() {
  cartItemCount.textContent = "0";
});

  });
  // sepette ürün olup olmadığına göre alert çalıştırır
  let checkoutButton = document.getElementById("cart-checkout");
let cartItems = document.getElementById("cart-items");
let listItems = cartItems.getElementsByTagName("li");

checkoutButton.addEventListener("click", function() {
  if (listItems.length > 0) {
    alert("Ödeme işleminiz yapılıyor.....");
  } else {
    alert("Sepetinizde ürün bulunmamaktadır");
  }
});

  
  

  
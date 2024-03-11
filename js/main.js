/*  cart */
// Lấy các phần tử DOM cần sử dụng
const cartSection = document.getElementById('cart');
const cartTable = document.querySelector('#cart table');
const checkoutBtn = document.querySelector('.checkout-btn');
let total = 0;

// Hàm tính tổng cộng
function calculateTotal() {
  const cartProducts = document.querySelectorAll('.cart-product');
  total = 0;
  cartProducts.forEach((product) => {
    const price = parseFloat(product.querySelector('td:nth-child(2)').textContent);
    const quantity = parseFloat(product.querySelector('td:nth-child(3)').textContent);
    const subTotal = price * quantity;
    product.querySelector('td:last-child').textContent = subTotal;
    total += subTotal;
  });
  document.querySelector('.total:last-child').textContent = total;
}

// Sự kiện click để thêm sản phẩm vào giỏ hàng
cartTable.addEventListener('click', function(e) {
  if (e.target.classList.contains('add-to-cart')) {
    const productRow = e.target.closest('.cart-product');
    const price = parseFloat(productRow.querySelector('td:nth-child(2)').textContent);
    const quantity = parseFloat(productRow.querySelector('td:nth-child(3)').textContent);
    const subTotal = price * quantity;
    productRow.querySelector('td:last-child').textContent = subTotal;
    total += subTotal;
    document.querySelector('.total:last-child').textContent = total;
  }
});

// Sự kiện click để xóa sản phẩm khỏi giỏ hàng
cartTable.addEventListener('click', function(e) {
  if (e.target.classList.contains('remove-from-cart')) {
    const productRow = e.target.closest('.cart-product');
    const subTotal = parseFloat(productRow.querySelector('td:last-child').textContent);
    total -= subTotal;
    document.querySelector('.total:last-child').textContent = total;
    productRow.remove();
  }
});

// Sự kiện click để thanh toán
checkoutBtn.addEventListener('click', function() {
  // Thực hiện các thao tác liên quan đến thanh toán
  // ...
});

/* kết thúc cart */

/* slideshow */
var index = 1;
changeImage = function(){
    var imgs =["./images/item1.png", "./images/item5.png","./images/item6.png"];
    document.getElementById('item').src =imgs[index];
    index++;
    if(index==3){
        index = 0;
    }
}
setInterval(changeImage,2000);
/*  */
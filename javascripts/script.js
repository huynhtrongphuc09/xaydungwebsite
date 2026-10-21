let cartCount = Number(sessionStorage.getItem("mooncakeCartCount") || 0);
function updateCartCount() {
  document.querySelectorAll(".cart-count").forEach((el) => {
    el.textContent = cartCount;
  });
}
function addCart(productName = "Sản phẩm") {
  cartCount += 1;
  sessionStorage.setItem("mooncakeCartCount", String(cartCount));
  updateCartCount();
  alert("Đã thêm " + productName + " vào giỏ hàng!");
}
function sendContact(event) {
  event.preventDefault();
  const message = document.getElementById("form-message");
  if (message) {
    message.textContent = "Cảm ơn bạn! Đã đặt hàng, tin nhắn chưa được gửi đến máy chủ.";
  }
  event.target.reset();
}

document.addEventListener("DOMContentLoaded", updateCartCount);

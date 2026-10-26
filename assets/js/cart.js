(function () {
  "use strict";
  const key = "imaraCart";
  const get = () => JSON.parse(localStorage.getItem(key) || "[]");
  const save = cart => { localStorage.setItem(key, JSON.stringify(cart)); updateCount(); };
  const money = n => "KES " + Number(n).toLocaleString("en-KE");
  function updateCount() {
    const count = get().reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll("[data-cart-count]").forEach(el => { el.textContent = count; el.hidden = count === 0; });
  }
  function add(id, quantity) {
    const product = (window.ImaraProducts || []).find(item => item.id === id);
    if (!product) return;
    const cart = get(), existing = cart.find(item => item.id === id);
    if (existing) existing.quantity += quantity || 1;
    else cart.push({ id, name: product.name, price: product.price, image: product.image, quantity: quantity || 1 });
    save(cart);
  }
  window.ImaraCart = { get, save, add, money };
  document.addEventListener("click", e => {
    const addButton = e.target.closest("[data-add-to-cart]");
    if (addButton) { e.preventDefault(); add(addButton.dataset.addToCart, 1); addButton.textContent = "Added to cart"; setTimeout(() => addButton.textContent = "Add to Cart", 1200); }
  });
  document.addEventListener("DOMContentLoaded", updateCount);
})();

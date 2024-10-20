// Cart Functionality: Update Cart Count and Popup
let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert('Item added to cart!');
  });
});

// Optional: Ensure cart count persists across pages using sessionStorage
window.addEventListener('load', () => {
  const savedCount = sessionStorage.getItem('cartCount');
  if (savedCount) {
    cartCount = parseInt(savedCount, 10);
    document.getElementById('cart-count').textContent = cartCount;
  }
});

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    sessionStorage.setItem('cartCount', cartCount);
  });
});

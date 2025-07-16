// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navbar = document.querySelector('.navbar');

mobileToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    mobileToggle.innerHTML = navbar.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && e.target !== mobileToggle) {
        navbar.classList.remove('active');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.btn-add');
const cartCount = document.querySelector('.cart-count');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        let count = parseInt(cartCount.textContent) || 0;
        cartCount.textContent = count + 1;
        cartCount.style.display = 'flex';
        
        button.textContent = 'Added!';
        setTimeout(() => {
            button.textContent = 'Add to Cart';
        }, 2000);
    });
});

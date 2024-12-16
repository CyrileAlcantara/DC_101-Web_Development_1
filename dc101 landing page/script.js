const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });











  const orderNowButton = document.getElementById('order-now-button');
const orderModal = document.getElementById('order-modal');
const closeModalButton = document.getElementById('close-modal');
const orderForm = document.getElementById('order-form');
const itemNameInput = document.getElementById('item-name');
const quantityInput = document.getElementById('quantity');
const specialRequestInput = document.getElementById('special-request');

// Open the order modal
orderNowButton.addEventListener('click', () => {
    orderModal.style.display = 'flex';
    itemNameInput.value = 'Your Selected Item';  // You can dynamically update this
});

// Close the order modal
closeModalButton.addEventListener('click', () => {
    orderModal.style.display = 'none';
});

// Handle order form submission
orderForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const orderData = {
        itemName: itemNameInput.value,
        quantity: quantityInput.value,
        specialRequest: specialRequestInput.value,
    };

    // Send the order data to your server or API (you can replace this with an actual API request)
    console.log('Order submitted:', orderData);
    
    // Optionally, close the modal after submission
    orderModal.style.display = 'none';

    // Display a confirmation message (optional)
    alert('Your order has been placed successfully!');
});

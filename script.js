// Smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a.scroll-link');
    
    scrollLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(link.getAttribute('href'));
        
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  
  // Image hover effect
  const segmentImages = document.querySelectorAll('.segment-item img');
  
  segmentImages.forEach(function(image) {
    image.addEventListener('mouseover', function() {
      this.classList.add('image-hover');
    });
  
    image.addEventListener('mouseout', function() {
      this.classList.remove('image-hover');
    });
  });
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav ul');
  
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('show');
  });
  
  // Carousel functionality
  const carouselItems = document.querySelectorAll('.carousel-item');
  const carouselPrevBtn = document.querySelector('.carousel-prev');
  const carouselNextBtn = document.querySelector('.carousel-next');
  let carouselIndex = 0;
  
  carouselPrevBtn.addEventListener('click', function() {
    carouselIndex = (carouselIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
  });
  
  carouselNextBtn.addEventListener('click', function() {
    carouselIndex = (carouselIndex + 1) % carouselItems.length;
    updateCarousel();
  });
  
  function updateCarousel() {
    carouselItems.forEach(function(item, index) {
      if (index === carouselIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
  
  // Newsletter subscription form
  const newsletterForm = document.getElementById('newsletter-form');
  
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Send newsletter subscription data to the server
    const email = newsletterForm.querySelector('input[name="email"]').value;
    
    // Example: Send data using fetch API
    fetch('https://example.com/newsletter-subscribe', {
      method: 'POST',
      body: JSON.stringify({ email: email }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function(response) {
        if (response.ok) {
          alert('Subscription successful!');
          newsletterForm.reset();
        } else {
          throw new Error('Subscription failed.');
        }
      })
      .catch(function(error) {
        console.log(error);
        alert('An error occurred. Please try again later.');
      });
  });
  
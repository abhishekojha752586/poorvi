function toggleHiddenContent() {
    var hiddenContent = document.querySelector('.hidden-content');
    var readMoreButton = document.querySelector('.read-more-button');
    
    if (hiddenContent.style.display === 'none') {
      hiddenContent.style.display = 'block';
      readMoreButton.innerHTML = 'Read Less';
    } else {
      hiddenContent.style.display = 'none';
      readMoreButton.innerHTML = 'Read More';
    }
  }
  var myCarousel = document.getElementById('myCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 5000, // Transition interval in milliseconds (5 seconds)
      wrap: true // Enables carousel to wrap around and start from the beginning
    });
  
    // Resize images based on display size
    window.addEventListener('resize', resizeImages);
  
    function resizeImages() {
      var carouselImages = myCarousel.querySelectorAll('.carousel-item img');
      carouselImages.forEach(function(image) {
        image.style.height = 'auto'; // Reset the image height
        image.style.width = '100%'; // Set the image width to 100% of the container
      });
    }
  
  
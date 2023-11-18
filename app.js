document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
  
    // Replace these URLs with your own train images
    const trainImages = [
      'images/trains/train-1.jpg',
      'images/trains/train-2.jpg',
      'images/trains/train-3.jpg',
      'images/trains/train-4.jpg',
      'images/trains/train-5.jpg',
      'images/trains/train-6.jpg',
      // Add more image URLs as needed
    ];
  
    // Create image elements and append them to the gallery
    trainImages.forEach((imageUrl) => {
      const img = document.createElement('img');
      img.src = imageUrl;
      gallery.appendChild(img);
    });
  });
  
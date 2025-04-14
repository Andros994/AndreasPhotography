document.addEventListener('DOMContentLoaded', () => {
    const gridImages = document.querySelectorAll('.grid-img');
    const modalImage = document.getElementById('modalImage');
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
  
    gridImages.forEach(img => {
      img.addEventListener('click', () => {
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        imageModal.show();
      });
    });
  });
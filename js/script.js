let previewContainer = document.querySelector(".products-preview");
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
  product.addEventListener('click', () => {
    previewContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview => preview.classList.remove('active')); 
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      }
    });
  });
});

previewBox.forEach(close => {
  close.querySelector('.bi-x-lg').addEventListener('click', () => {
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  });
});
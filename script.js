
const modal = document.getElementById('modal-zoom');
const modalImg = document.getElementById('modal-img');
const closeModal = document.getElementById('close-modal');
const certImages = document.querySelectorAll('.cert-img');


certImages.forEach(image => {
    image.addEventListener('click', () => {
       
        const imageSrc = image.getAttribute('src');
        
        const imageAlt = image.getAttribute('alt');
        
        
        modalImg.setAttribute('src', imageSrc);
        modalImg.setAttribute('alt', imageAlt);
        
        
        modal.showModal();
    });
});


closeModal.addEventListener('click', () => {
    modal.close();
});


modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
    }
});
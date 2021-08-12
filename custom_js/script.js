/* #Video Modal
  ======================================================= */
const body = document.querySelector('body');
const videoModalToggler = document.querySelector('.new-page-video .video');

// Message Modal Handler
if (videoModalToggler) {
  videoModalToggler.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.querySelector(videoModalToggler.dataset.modal);

    if (modal) {
      modal.classList.toggle('show');
      body.classList.toggle('no-scroll');
    }
  });
}

// Modal Close
const videoModal = document.querySelector('.video-modal');

if (videoModal) {
  videoModal.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.closest('.modal-close')) {
      videoModal.classList.toggle('show');
      body.classList.toggle('no-scroll');
    }
  });
}
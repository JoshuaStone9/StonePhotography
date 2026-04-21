// Simple smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const navBarButton = document.querySelector('.navbar-toggler');



// Simple lightbox for gallery images
// const galleryImages = document.querySelectorAll('#gallery img');
// galleryImages.forEach(img => {
//     img.addEventListener('click', function() {
//         // Create overlay
//         const overlay = document.createElement('div');
//         overlay.style.position = 'fixed';
//         overlay.style.top = '0';
//         overlay.style.left = '0';
//         overlay.style.width = '100%';
//         overlay.style.height = '100%';
//         overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
//         overlay.style.display = 'flex';
//         overlay.style.alignItems = 'center';
//         overlay.style.justifyContent = 'center';
//         overlay.style.zIndex = '1000';

//         // Create enlarged image
//         const enlargedImg = document.createElement('img');
//         enlargedImg.src = this.src;
//         enlargedImg.style.maxWidth = '90%';
//         enlargedImg.style.maxHeight = '90%';

//         overlay.appendChild(enlargedImg);
//         document.body.appendChild(overlay);

//         // Close on click
//         overlay.addEventListener('click', function() {
//             document.body.removeChild(overlay);
//         });
//     });
// });
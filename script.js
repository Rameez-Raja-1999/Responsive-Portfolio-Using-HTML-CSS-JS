// Get all section IDs and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

// Function to determine the active section
function updateActiveLink() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Use a slight offset to ensure the section is well into view
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the link corresponding to the current section
    const activeLink = document.querySelector(`.nav-link[href="#${current}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Event listener for scroll
window.addEventListener('scroll', updateActiveLink);

// Initial call to set the active link when the page loads
updateActiveLink();
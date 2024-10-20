// Get all nav links
const links = document.querySelectorAll('.nav-link');

// Function to set the active link based on current page
function setActiveLink() {
    const currentUrl = window.location.pathname; // Get current page URL
    links.forEach(link => {
        const linkUrl = link.getAttribute('href'); // Get link URL
        if (currentUrl.includes(linkUrl)) { // Check if current URL matches link URL
            link.classList.add('active'); // Add active class to the matched link
        } else {
            link.classList.remove('active'); // Remove active class from other links
        }
    });
}

// Call the function to set the active link
setActiveLink();

document.addEventListener('DOMContentLoaded', function() {
    // Hide scrollbar during intro
    document.body.style.overflow = 'hidden';
    
    // Enable scrolling after intro
    setTimeout(() => {
        document.body.style.overflow = 'auto';
    }, 4500); // 4.5 seconds
});

document.getElementById('peripherals-button').addEventListener('click', function() {
    // Show Peripherals content and hide Others content
    document.getElementById('peripherals-content').style.display = 'block';
    document.getElementById('others-content').style.display = 'none';

    // Set active button style
    this.classList.add('active');
    document.getElementById('others-button').classList.remove('active');
});

document.getElementById('others-button').addEventListener('click', function() {
    // Show Others content and hide Peripherals content
    document.getElementById('others-content').style.display = 'block';
    document.getElementById('peripherals-content').style.display = 'none';

    // Set active button style
    this.classList.add('active');
    document.getElementById('peripherals-button').classList.remove('active');
});

// Add this new function
function showWorkspaceDetails(section) {
    // This function will handle clicking on workspace items
    // You can expand this to show more details or navigate to specific pages
    console.log(`Showing details for ${section}`);
    
    // You can add more functionality here, such as:
    // - Opening a modal with more details
    // - Navigating to a dedicated page
    // - Showing additional images
}

// Add this new function to handle section viewing
function showSection(section) {
    // Hide all sections first
    document.querySelectorAll('.detail-section').forEach(el => {
        el.style.display = 'none';
    });
    
    // Hide the main grid
    document.querySelector('.workspace-grid').style.display = 'none';
    
    // Show the selected section
    const sectionElement = document.getElementById(`${section}-section`);
    if (sectionElement) {
        sectionElement.style.display = 'block';
        
        // Create and add back button if it doesn't exist
        if (!sectionElement.querySelector('.back-button')) {
            const backButton = document.createElement('button');
            backButton.className = 'back-button';
            backButton.textContent = '← Back';
            backButton.onclick = () => {
                sectionElement.style.display = 'none';
                document.querySelector('.workspace-grid').style.display = 'grid';
            };
            sectionElement.insertBefore(backButton, sectionElement.firstChild);
        }
    }
}

// Update modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close-modal')[0];
    
    // Get all images from PC Setup, PC Specs, and Wallpapers sections
    const modalImages = document.querySelectorAll(
        '#pc-setup-section img, ' +
        '#pc-specs-section .spec-item img, ' +
        '#wallpapers-section .spec-item img'
    );
    
    // Add click event to all images
    modalImages.forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            modal.classList.add('show');
            modalImg.src = this.src;
        });
    });
    
    // Close modal when clicking X
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('show');
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    });

    // Handle image loading
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
        if (img.complete) {
            img.classList.remove('loading');
        } else {
            img.addEventListener('load', function() {
                img.classList.remove('loading');
            });
        }
    });
});

// Enhanced dropdown menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Select all dropdown nav items
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    
    dropdownItems.forEach(item => {
        const navLink = item.querySelector('.header__nav-link');
        const dropdownMenu = item.querySelector('.dropdown-menu');
        let timeoutId;
        
        // Add event listeners to each dropdown item
        item.addEventListener('mouseenter', function() {
            clearTimeout(timeoutId);
            
            // Hide all other dropdowns first
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                    menu.style.pointerEvents = 'none';
                }
            });
            
            // Show current dropdown
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.pointerEvents = 'auto';
            dropdownMenu.style.transform = 'translateX(-50%) translateY(0)';
        });
        
        item.addEventListener('mouseleave', function() {
            timeoutId = setTimeout(function() {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.pointerEvents = 'none';
                dropdownMenu.style.transform = 'translateX(-50%) translateY(10px)';
            }, 300); // Reduced delay to 300ms for better responsiveness
        });
        
        // Handle click for mobile/accessibility
        navLink.addEventListener('click', function(e) {
            // Only prevent default if on mobile or if dropdown isn't visible
            if (window.innerWidth < 992 || dropdownMenu.style.visibility !== 'visible') {
                e.preventDefault();
                
                // Toggle this dropdown
                if (dropdownMenu.style.visibility === 'visible') {
                    dropdownMenu.style.opacity = '0';
                    dropdownMenu.style.visibility = 'hidden';
                    dropdownMenu.style.pointerEvents = 'none';
                } else {
                    // Hide all other dropdowns
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        menu.style.opacity = '0';
                        menu.style.visibility = 'hidden';
                        menu.style.pointerEvents = 'none';
                    });
                    
                    dropdownMenu.style.opacity = '1';
                    dropdownMenu.style.visibility = 'visible';
                    dropdownMenu.style.pointerEvents = 'auto';
                    dropdownMenu.style.transform = 'translateX(-50%) translateY(0)';
                }
            }
        });
    });
    
    // Close dropdowns when clicking elsewhere on the page
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.has-dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.pointerEvents = 'none';
            });
        }
    });
    
    // Handle scroll events - hide dropdowns when scrolling
    window.addEventListener('scroll', function() {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
            menu.style.pointerEvents = 'none';
        });
    });
});
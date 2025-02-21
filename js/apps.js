document.addEventListener('DOMContentLoaded', function() {
    // Initial Loading Animation
    const body = document.body;
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    
    const loadingLogo = document.createElement('img');
    loadingLogo.src = '/api/placeholder/200/200';
    loadingLogo.alt = 'JapanAnimeMaps';
    loadingLogo.className = 'loading-logo';
    
    loadingOverlay.appendChild(loadingLogo);
    body.appendChild(loadingOverlay);

    // Prevent scroll during loading
    body.style.overflow = 'hidden';

    // Hide loading overlay after animation
    setTimeout(() => {
        loadingOverlay.classList.add('hide');
        body.style.overflow = '';
        setTimeout(() => {
            loadingOverlay.remove();
        }, 500);
    }, 2000);

    // Enhanced Slideshow with initial animation delay
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.opacity = '0';
            slide.style.transform = 'scale(1.1) translateX(5%)';
        });
        slides[index].style.opacity = '1';
        slides[index].style.transform = 'scale(1) translateX(0)';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startSlideshow() {
        showSlide(0);
        slideInterval = setInterval(nextSlide, 4000);
    }

    // Initialize first slide with delay and start autoplay
    setTimeout(() => {
        slides.forEach(slide => {
            slide.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
        startSlideshow();
    }, 3000);

    // Enhanced Intersection Observer for fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Add sequential delay based on position
                const delay = Array.from(fadeElements).indexOf(entry.target) * 200;
                entry.target.style.transitionDelay = `${delay}ms`;
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Enhanced Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero__inner');
    const parallaxElements = document.querySelectorAll('.strength-item, .work-card');
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                
                if (window.innerWidth > 768) {
                    // Parallax for hero content
                    const heroRate = scrolled * 0.4;
                    heroContent.style.transform = `translateY(${heroRate}px)`;
                    
                    // Parallax for other elements
                    parallaxElements.forEach(element => {
                        const rect = element.getBoundingClientRect();
                        const elementCenter = rect.top + rect.height / 2;
                        const screenCenter = window.innerHeight / 2;
                        const distance = elementCenter - screenCenter;
                        const rate = distance * 0.1;
                        
                        element.style.transform = `translateY(${rate}px)`;
                    });
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // Screenshot preview functionality
    const screenshots = document.querySelectorAll('.screenshot-img');
    
    screenshots.forEach(screenshot => {
        screenshot.addEventListener('click', function() {
            const overlay = document.createElement('div');
            overlay.className = 'screenshot-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.9)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = '9999';
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 0.3s ease';
            
            const img = document.createElement('img');
            img.src = this.src.replace('120/120', '800/800');
            img.alt = this.alt;
            img.style.maxWidth = '90%';
            img.style.maxHeight = '90vh';
            img.style.transform = 'scale(0.9)';
            img.style.transition = 'transform 0.3s ease';
            
            overlay.appendChild(img);
            document.body.appendChild(overlay);
            
            // Force reflow
            overlay.offsetHeight;
            
            // Animate in
            overlay.style.opacity = '1';
            img.style.transform = 'scale(1)';
            
            overlay.addEventListener('click', function() {
                this.style.opacity = '0';
                img.style.transform = 'scale(0.9)';
                setTimeout(() => this.remove(), 300);
            });
        });
    });

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.header__nav');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (this.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    // Smooth scroll functionality with enhanced animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Close mobile menu if open
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                body.style.overflow = '';

                // Enhanced smooth scroll
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1000;
                let start = null;

                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const progress = Math.min(timeElapsed / duration, 1);
                    
                    // Easing function
                    const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                    
                    window.scrollTo(0, startPosition + distance * ease(progress));
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }

                requestAnimationFrame(animation);
            }
        });
    });

    // Enhanced header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove background class based on scroll position
        if (currentScroll > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }

        // Hide/show header based on scroll direction
        if (currentScroll > lastScroll && !header.classList.contains('header--hidden')) {
            header.classList.add('header--hidden');
        } else if (currentScroll < lastScroll && header.classList.contains('header--hidden')) {
            header.classList.remove('header--hidden');
        }

        lastScroll = currentScroll;
    });

    // Initialize custom cursor (for desktop only)
    if (window.innerWidth > 1024) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);
        
        let cursorTimeout;
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.opacity = '1';
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            clearTimeout(cursorTimeout);
            cursorTimeout = setTimeout(() => {
                cursor.style.opacity = '0';
            }, 2000);
        });

        // Add cursor effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .work-card, .strength-item');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor--hover');
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor--hover');
            });
        });
    }

    // Window resize handler with debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.innerWidth > 768) {
                // Reset mobile menu
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                body.style.overflow = '';
                
                // Reset hero content transform
                heroContent.style.transform = '';
                
                // Reset parallax elements
                parallaxElements.forEach(element => {
                    element.style.transform = '';
                });
            }
        }, 250);
    });
});
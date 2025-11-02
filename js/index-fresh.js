/**
 * Fresh JavaScript - Complete GSAP Animation System
 * All animations from scratch
 */

/**
 * Bounce Effect - Applied to ABOUT section and HERO section
 * Triggers every time the section comes into view
 */
function initBounceEffect() {
    // ABOUT Section Bounce Effect
    const aboutSection = document.querySelector('.about-fresh');
    const aboutVisual = document.querySelector('.about-fresh__visual');
    const aboutImage = document.querySelector('.about-fresh__visual img');
    const redCircle = document.querySelector('.about-fresh__circle--red');
    const yellowCircle = document.querySelector('.about-fresh__circle--yellow');
    
    if (aboutSection && aboutVisual && aboutImage && redCircle && yellowCircle) {
        // Create a timeline for the about section bounce animation
        const aboutBounceTimeline = gsap.timeline({ paused: true });
        
        // Add bounce animations to timeline - bounce the image and circles together
        aboutBounceTimeline
            .to([aboutVisual, aboutImage, redCircle, yellowCircle], {
                y: -20,
                duration: 0.3,
                ease: 'power2.out'
            })
            .to([aboutVisual, aboutImage, redCircle, yellowCircle], {
                y: 15,
                duration: 0.25,
                ease: 'power2.in'
            })
            .to([aboutVisual, aboutImage, redCircle, yellowCircle], {
                y: -10,
                duration: 0.2,
                ease: 'power2.out'
            })
            .to([aboutVisual, aboutImage, redCircle, yellowCircle], {
                y: 0,
                duration: 0.15,
                ease: 'power2.inOut'
            });
        
        // ScrollTrigger to detect when about section comes into view - triggers every time
        ScrollTrigger.create({
            trigger: aboutSection,
            start: 'top 80%',
            onEnter: () => {
                aboutBounceTimeline.restart();
            },
            onEnterBack: () => {
                aboutBounceTimeline.restart();
            }
        });
    }
    
    // HERO Section Bounce Effect
    const heroSection = document.querySelector('.hero-fresh');
    const redBall = document.querySelector('.hero-fresh__ball--red');
    const yellowBall = document.querySelector('.hero-fresh__ball--yellow');
    const appPhones = document.querySelector('.hero-fresh__app-phones');
    
    if (heroSection && redBall && yellowBall && appPhones) {
        // Create a timeline for the hero section bounce animation
        const heroBounceTimeline = gsap.timeline({ paused: true });
        
        // Add bounce animations to timeline
        heroBounceTimeline
            .to([redBall, yellowBall, appPhones], {
                y: -20,
                duration: 0.3,
                ease: 'power2.out'
            })
            .to([redBall, yellowBall, appPhones], {
                y: 15,
                duration: 0.25,
                ease: 'power2.in'
            })
            .to([redBall, yellowBall, appPhones], {
                y: -10,
                duration: 0.2,
                ease: 'power2.out'
            })
            .to([redBall, yellowBall, appPhones], {
                y: 0,
                duration: 0.15,
                ease: 'power2.inOut'
            });
        
        // ScrollTrigger to detect when hero section comes into view - triggers every time
        ScrollTrigger.create({
            trigger: heroSection,
            start: 'top 80%',
            onEnter: () => {
                heroBounceTimeline.restart();
            },
            onEnterBack: () => {
                heroBounceTimeline.restart();
            }
        });
    }
    
    // STRENGTHS Section Bounce Effect
    const strengthsSection = document.querySelector('.strengths-fresh');
    const strengthItems = document.querySelectorAll('.strength-fresh-item');
    
    if (strengthsSection && strengthItems.length > 0) {
        // Create bounce animation for each strength card
        strengthItems.forEach((item, index) => {
            const redCircle = item.querySelector('.strength-fresh-item__circle--red');
            const yellowCircle = item.querySelector('.strength-fresh-item__circle--yellow');
            
            // Collect only existing circles
            const circles = [];
            if (redCircle) circles.push(redCircle);
            if (yellowCircle) circles.push(yellowCircle);
            
            const strengthBounceTimeline = gsap.timeline({ paused: true });
            const elementsToAnimate = [item, ...circles];
            
            // Add bounce animations to timeline - bounce the card and circles together
            strengthBounceTimeline
                .to(elementsToAnimate, {
                    y: -20,
                    duration: 0.3,
                    ease: 'power2.out'
                })
                .to(elementsToAnimate, {
                    y: 15,
                    duration: 0.25,
                    ease: 'power2.in'
                })
                .to(elementsToAnimate, {
                    y: -10,
                    duration: 0.2,
                    ease: 'power2.out'
                })
                .to(elementsToAnimate, {
                    y: 0,
                    duration: 0.15,
                    ease: 'power2.inOut'
                });
            
            // ScrollTrigger to detect when each card comes into view - triggers every time
            ScrollTrigger.create({
                trigger: item,
                start: 'top 85%',
                onEnter: () => {
                    strengthBounceTimeline.restart();
                },
                onEnterBack: () => {
                    strengthBounceTimeline.restart();
                }
            });
        });
    }
    
    // WORKS Section Bounce Effect
    const worksSection = document.querySelector('.works-fresh');
    const workCards = document.querySelectorAll('.work-fresh-card');
    
    if (worksSection && workCards.length > 0) {
        // Create bounce animation for each work card
        workCards.forEach((card, index) => {
            const redCircle = card.querySelector('.work-fresh-card__circle--red');
            const yellowCircle = card.querySelector('.work-fresh-card__circle--yellow');
            const cardImage = card.querySelector('.work-fresh-card__image img');
            
            // Collect only existing elements
            const elements = [card];
            if (redCircle) elements.push(redCircle);
            if (yellowCircle) elements.push(yellowCircle);
            if (cardImage) elements.push(cardImage);
            
            const workBounceTimeline = gsap.timeline({ paused: true });
            
            // Add bounce animations to timeline - bounce the card, circles, and image together
            workBounceTimeline
                .to(elements, {
                    y: -20,
                    duration: 0.3,
                    ease: 'power2.out'
                })
                .to(elements, {
                    y: 15,
                    duration: 0.25,
                    ease: 'power2.in'
                })
                .to(elements, {
                    y: -10,
                    duration: 0.2,
                    ease: 'power2.out'
                })
                .to(elements, {
                    y: 0,
                    duration: 0.15,
                    ease: 'power2.inOut'
                });
            
            // ScrollTrigger to detect when each card comes into view - triggers every time
            ScrollTrigger.create({
                trigger: card,
                start: 'top 85%',
                onEnter: () => {
                    workBounceTimeline.restart();
                },
                onEnterBack: () => {
                    workBounceTimeline.restart();
                }
            });
        });
    }
    
    // VOICES Section Bounce Effect
    const voicesSection = document.querySelector('.voices-fresh');
    const voicesCard = document.querySelector('.voices-fresh__card');
    const voicesRedCircle = document.querySelector('.voices-fresh__circle--red');
    const voicesYellowCircle = document.querySelector('.voices-fresh__circle--yellow');
    const voicesImage = document.querySelector('.voices-fresh__card-images img');
    
    if (voicesSection && voicesCard && voicesRedCircle && voicesYellowCircle && voicesImage) {
        // Create a timeline for the voices section bounce animation
        const voicesBounceTimeline = gsap.timeline({ paused: true });
        
        // Add bounce animations to timeline - bounce the card, circles, and image together
        voicesBounceTimeline
            .to([voicesCard, voicesRedCircle, voicesYellowCircle, voicesImage], {
                y: -20,
                duration: 0.3,
                ease: 'power2.out'
            })
            .to([voicesCard, voicesRedCircle, voicesYellowCircle, voicesImage], {
                y: 15,
                duration: 0.25,
                ease: 'power2.in'
            })
            .to([voicesCard, voicesRedCircle, voicesYellowCircle, voicesImage], {
                y: -10,
                duration: 0.2,
                ease: 'power2.out'
            })
            .to([voicesCard, voicesRedCircle, voicesYellowCircle, voicesImage], {
                y: 0,
                duration: 0.15,
                ease: 'power2.inOut'
            });
        
        // ScrollTrigger to detect when voices section comes into view - triggers every time
        ScrollTrigger.create({
            trigger: voicesSection,
            start: 'top 80%',
            onEnter: () => {
                voicesBounceTimeline.restart();
            },
            onEnterBack: () => {
                voicesBounceTimeline.restart();
            }
        });
    }
    
    // COMMUNITY BANNER Section Bounce Effect (Above Footer)
    const communityBannerSection = document.querySelector('.community-banner-fresh');
    const communityBannerImage = document.querySelector('.community-banner-fresh__image');
    
    if (communityBannerSection && communityBannerImage) {
        // Create a timeline for the community banner bounce animation
        const communityBannerBounceTimeline = gsap.timeline({ paused: true });
        
        // Add bounce animations to timeline - bounce the image only
        communityBannerBounceTimeline
            .to(communityBannerImage, {
                y: -20,
                duration: 0.3,
                ease: 'power2.out'
            })
            .to(communityBannerImage, {
                y: 15,
                duration: 0.25,
                ease: 'power2.in'
            })
            .to(communityBannerImage, {
                y: -10,
                duration: 0.2,
                ease: 'power2.out'
            })
            .to(communityBannerImage, {
                y: 0,
                duration: 0.15,
                ease: 'power2.inOut'
            });
        
        // ScrollTrigger to detect when community banner section comes into view - triggers every time
        ScrollTrigger.create({
            trigger: communityBannerSection,
            start: 'top 80%',
            onEnter: () => {
                communityBannerBounceTimeline.restart();
            },
            onEnterBack: () => {
                communityBannerBounceTimeline.restart();
            }
        });
    }
}

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initNavbarDropdowns();
    initHeroAnimations();
    initSpecialSection();
    initScrollAnimations();
    initCarousels();
    initParallaxEffects();
    initBounceEffect();
    initPageTop();
    
    // Refresh ScrollTrigger after all resources load
    window.addEventListener('load', function() {
        // Small delay to ensure layout is stable
        setTimeout(function() {
            ScrollTrigger.refresh();
            // Fallback: Force show elements if still hidden after refresh
            forceShowHiddenElements();
        }, 150);
    });
    
    // Also refresh on resize to handle viewport changes
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            ScrollTrigger.refresh();
        }, 250);
    });
    
    // Safety fallback: If elements are still hidden after 2 seconds, show them
    setTimeout(function() {
        forceShowHiddenElements();
    }, 2000);
});

/**
 * Fallback function to force show hidden elements if animations fail
 */
function forceShowHiddenElements() {
    // Check and show elements that should be visible
    const hiddenElements = document.querySelectorAll('.work-fresh-card, .strength-fresh-item, .voices-fresh__card, .about-fresh__visual, .special-fresh__carousel');
    hiddenElements.forEach(function(element) {
        if (element) {
            const style = window.getComputedStyle(element);
            const opacity = parseFloat(style.opacity);
            // If element is still hidden after all animations should have run
            if (opacity === 0 || opacity < 0.01) {
                // Force it visible with GSAP
                gsap.set(element, {
                    opacity: 1,
                    y: 0,
                    clearProps: 'all'
                });
            }
        }
    });
}

/**
 * Navbar Dropdown Functionality
 */
function initNavbarDropdowns() {
    const dropdownItems = document.querySelectorAll('.header-fresh__nav-item.has-dropdown');
    
    dropdownItems.forEach(item => {
        const dropdownMenu = item.querySelector('.dropdown-menu');
        let timeoutId;
        
        // Desktop hover functionality
        if (window.innerWidth > 991) {
            // Open dropdown on hover
            item.addEventListener('mouseenter', function() {
                clearTimeout(timeoutId);
                
                // Close other dropdowns
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    if (menu !== dropdownMenu) {
                        menu.style.opacity = '0';
                        menu.style.visibility = 'hidden';
                        menu.style.pointerEvents = 'none';
                        menu.style.transform = 'translateX(-50%) translateY(10px)';
                    }
                });
                
                // Show current dropdown
                if (dropdownMenu) {
                    dropdownMenu.style.opacity = '1';
                    dropdownMenu.style.visibility = 'visible';
                    dropdownMenu.style.pointerEvents = 'auto';
                    dropdownMenu.style.transform = 'translateX(-50%) translateY(0)';
                }
            });
            
            // Keep dropdown open when hovering over menu
            if (dropdownMenu) {
                dropdownMenu.addEventListener('mouseenter', function() {
                    clearTimeout(timeoutId);
                });
            }
            
            // Close dropdown on mouse leave
            item.addEventListener('mouseleave', function() {
                if (dropdownMenu) {
                    timeoutId = setTimeout(function() {
                        dropdownMenu.style.opacity = '0';
                        dropdownMenu.style.visibility = 'hidden';
                        dropdownMenu.style.pointerEvents = 'none';
                        dropdownMenu.style.transform = 'translateX(-50%) translateY(10px)';
                    }, 300);
                }
            });
            
            // Also close when leaving dropdown menu
            if (dropdownMenu) {
                dropdownMenu.addEventListener('mouseleave', function() {
                    timeoutId = setTimeout(function() {
                        dropdownMenu.style.opacity = '0';
                        dropdownMenu.style.visibility = 'hidden';
                        dropdownMenu.style.pointerEvents = 'none';
                        dropdownMenu.style.transform = 'translateX(-50%) translateY(10px)';
                    }, 300);
                });
            }
        }
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header-fresh');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Reinitialize dropdowns if needed
        if (window.innerWidth <= 991) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.pointerEvents = 'none';
            });
        }
    });
}

/**
 * Hero Section Animations
 */
function initHeroAnimations() {
    // Animate title
    const title = document.querySelector('.hero-fresh__title');
    if (title) {
        gsap.to(title, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out'
        });
    }
    
    // Animate text elements
    const texts = document.querySelectorAll('.hero-fresh__text');
    texts.forEach((text, index) => {
        gsap.to(text, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.5 + index * 0.2,
            ease: 'power3.out'
        });
    });
    
    // Animate stats
    const stats = document.querySelector('.hero-fresh__stats');
    if (stats) {
        gsap.to(stats, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 1,
            ease: 'power3.out'
        });
        
        // Animate counter
        const counter = stats.querySelector('strong');
        if (counter) {
            const targetValue = parseFloat(counter.textContent);
            gsap.to({ value: 0 }, {
                value: targetValue,
                duration: 2,
                delay: 1.2,
                ease: 'power2.out',
                onUpdate: function() {
                    counter.textContent = this.targets()[0].value.toFixed(1);
                }
            });
        }
    }
    
    // Animate app promo
    const appPromo = document.querySelector('.hero-fresh__app-promo');
    if (appPromo) {
        gsap.to(appPromo, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.6,
            ease: 'power3.out'
        });
        
        // Animate phones
        const phones = appPromo.querySelectorAll('.hero-fresh__phone');
        phones.forEach((phone, index) => {
            gsap.to(phone, {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                delay: 1 + index * 0.15,
                ease: 'back.out(1.7)'
            });
        });
    }
}

/**
 * Special Section Animations
 */
function initSpecialSection() {
    const headingEn = document.querySelectorAll('.special-fresh__heading-en span');
    const headingJa = document.querySelector('.special-fresh__heading-ja');
    
    // Animate English heading immediately when section is visible
    if (headingEn.length > 0) {
        gsap.to(headingEn, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.special-fresh',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power3.out'
        });
    }
    
    // Animate Japanese heading
    if (headingJa) {
        const headingJaElements = headingJa.querySelectorAll('h2, p');
        if (headingJaElements.length > 0) {
            gsap.to(headingJaElements, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.special-fresh',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                    once: false
                },
                ease: 'power3.out'
            });
        }
    }
    
    // Carousel scroll animation
    const carousel = document.querySelector('.special-fresh__carousel');
    if (carousel) {
        gsap.to(carousel, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            scrollTrigger: {
                trigger: '.special-fresh',
                start: 'top 70%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power3.out'
        });
    }
}

/**
 * Scroll-Triggered Animations
 */
function initScrollAnimations() {
    // About section
    gsap.to('.about-fresh__visual', {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.about-fresh',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        ease: 'power3.out'
    });
    
    gsap.to('.about-fresh__heading-icon', {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        scrollTrigger: {
            trigger: '.about-fresh',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        ease: 'back.out(1.7)'
    });
    
    const aboutElements = document.querySelectorAll('.about-fresh__heading h2, .about-fresh__text, .about-fresh__list li, .about-fresh__button');
    gsap.to(aboutElements, {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.about-fresh',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        ease: 'power3.out'
    });
    
    // Strengths section
    gsap.to('.strengths-fresh__heading-icon', {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        scrollTrigger: {
            trigger: '.strengths-fresh',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        ease: 'back.out(1.7)'
    });
    
    gsap.to('.strengths-fresh__heading h2', {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.strengths-fresh',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        ease: 'power3.out'
    });
    
    const strengthItems = document.querySelectorAll('.strength-fresh-item');
    strengthItems.forEach((item, index) => {
        gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            ease: 'power3.out',
            onComplete: () => {
                // Animate number
                const number = item.querySelector('.strength-fresh-item__number');
                if (number) {
                    gsap.to(number, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: 'back.out(1.7)'
                    });
                }
            }
        });
    });
    
    gsap.to('.button-fresh', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: '.strengths-fresh__action',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        ease: 'power3.out'
    });
    
    // Works section
    gsap.to('.works-fresh__heading-icon', {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        scrollTrigger: {
            trigger: '.works-fresh',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        ease: 'back.out(1.7)'
    });
    
    gsap.to('.works-fresh__heading h2', {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.works-fresh',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        ease: 'power3.out'
    });
    
    const workCards = document.querySelectorAll('.work-fresh-card');
    workCards.forEach((card, index) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            ease: 'power3.out'
        });
    });
    
    // Voices section
    gsap.to('.voices-fresh__heading-icon', {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        scrollTrigger: {
            trigger: '.voices-fresh',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        ease: 'back.out(1.7)'
    });
    
    gsap.to('.voices-fresh__heading h2', {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.voices-fresh',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        ease: 'power3.out'
    });
    
    gsap.to('.voices-fresh__card', {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.voices-fresh__card',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        ease: 'power3.out'
    });
    
    // Stats section
    gsap.to('.stats-fresh__content', {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.stats-fresh',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        ease: 'power3.out'
    });
    
    // Animate counter
    const counter = document.querySelector('.stats-fresh__item strong');
    if (counter) {
        const targetValue = parseFloat(counter.textContent);
        ScrollTrigger.create({
            trigger: '.stats-fresh',
            start: 'top 80%',
            onEnter: () => {
                gsap.to({ value: 0 }, {
                    value: targetValue,
                    duration: 2,
                    ease: 'power2.out',
                    onUpdate: function() {
                        counter.textContent = this.targets()[0].value.toFixed(1);
                    }
                });
            }
        });
    }
}

/**
 * Initialize Carousels
 */
function initCarousels() {
    // Multi-layer parallax carousel - no Splide needed
    const carouselWrapper = document.querySelector('.special-fresh__carousel-wrapper');
    if (carouselWrapper) {
        // Initialize scroll-triggered parallax for multi-layer effect
        initMultiLayerParallax();
    }
}

/**
 * Two-Row Parallax Effect with Scroll Trigger
 */
function initMultiLayerParallax() {
    const specialSection = document.querySelector('.special-fresh');
    if (!specialSection) return;
    
    // Get the two rows
    const row1 = document.querySelector('.special-fresh__carousel-row--1 .special-fresh__carousel-inner');
    const row2 = document.querySelector('.special-fresh__carousel-row--2 .special-fresh__carousel-inner');
    
    if (!row1 || !row2) return;
    
    // Row 1: Moving Left
    gsap.to(row1, {
        x: '-50%',
        ease: 'none',
        scrollTrigger: {
            trigger: specialSection,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true
        }
    });
    
    // Row 2: Moving Right
    gsap.to(row2, {
        x: '50%',
        ease: 'none',
        scrollTrigger: {
            trigger: specialSection,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true
        }
    });
}

/**
 * Parallax Effects
 */
function initParallaxEffects() {
    // Hero zoom out and fade effect when scrolling to black section
    const heroSection = document.querySelector('.hero-fresh');
    const heroWrapper = document.querySelector('.hero-fresh__wrapper');
    const heroOverlay = document.querySelector('.hero-fresh__overlay');
    const specialSection = document.querySelector('.special-fresh');
    
    if (heroSection && heroWrapper && heroOverlay && specialSection) {
        // Pin the hero section so it stays fixed while scrolling
        ScrollTrigger.create({
            trigger: heroSection,
            start: 'top top',
            end: '+=100vh',
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            markers: false
        });
        
        // Create scroll trigger for zoom out effect (slight zoom - 8% reduction)
        gsap.to(heroWrapper, {
            scale: 0.92,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: heroSection,
                start: 'top top',
                end: '+=100vh',
                scrub: 1.5,
                invalidateOnRefresh: true
            }
        });
        
        // Create overlay fade effect (white overlay increasing opacity)
        gsap.to(heroOverlay, {
            opacity: 0.65,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: heroSection,
                start: 'top top',
                end: '+=100vh',
                scrub: 1.5,
                invalidateOnRefresh: true
            }
        });
        
        // Also fade the hero content slightly for depth
        gsap.to('.hero-fresh__inner', {
            opacity: 0.7,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: heroSection,
                start: 'top top',
                end: '+=100vh',
                scrub: 1.5,
                invalidateOnRefresh: true
            }
        });
        
        // Make the black section slide up over the white section
        // Position it initially below the viewport
        gsap.set(specialSection, { y: window.innerHeight });
        
        // Animate it sliding up as user scrolls
        const slideUpAnimation = gsap.to(specialSection, {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: heroSection,
                start: 'top top',
                end: '+=100vh',
                scrub: true,
                pin: false,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    // Show text when section is visible (when it's more than 50% visible)
                    if (self.progress > 0.5) {
                        gsap.to('.special-fresh__heading-en span', {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            stagger: 0.1,
                            ease: 'power2.out'
                        });
                        gsap.to('.special-fresh__heading-ja h2, .special-fresh__heading-ja p', {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            stagger: 0.15,
                            ease: 'power2.out'
                        });
                        gsap.to('.special-fresh__carousel-wrapper', {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: 'power2.out'
                        });
                    }
                }
            }
        });
    }
    
    // Work cards parallax removed - all cards stay aligned
    // Removed parallax effect to prevent middle card from moving down
}

/**
 * Page Top Button
 */
function initPageTop() {
    const pageTop = document.querySelector('.footer-fresh__pagetop');
    
    if (pageTop) {
        ScrollTrigger.create({
            trigger: '.strengths-fresh',
            start: 'top 50%',
            onEnter: () => {
                gsap.to(pageTop, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3
                });
                pageTop.classList.add('visible');
            },
            onLeaveBack: () => {
                gsap.to(pageTop, {
                    opacity: 0,
                    y: 20,
                    duration: 0.3
                });
                pageTop.classList.remove('visible');
            }
        });
        
        pageTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.header-fresh').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Work card hover effects - Enhanced with circles and lift
document.querySelectorAll('.work-fresh-card').forEach(card => {
    const overlay = card.querySelector('.work-fresh-card__overlay');
    const img = card.querySelector('.work-fresh-card__image img');
    const redCircle = card.querySelector('.work-fresh-card__circle--red');
    const yellowCircle = card.querySelector('.work-fresh-card__circle--yellow');
    
    card.addEventListener('mouseenter', () => {
        // Lift card
        gsap.to(card, {
            y: -12,
            scale: 1.03,
            duration: 0.4,
            ease: 'power2.out'
        });
        
        // Overlay
        if (overlay) {
            gsap.to(overlay, {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        
        // Image zoom
        if (img) {
            gsap.to(img, {
                scale: 1.15,
                duration: 0.5,
                ease: 'power2.out'
            });
        }
        
        // Circles spin and scale
        if (redCircle) {
            gsap.to(redCircle, {
                scale: 1.25,
                rotation: 20,
                duration: 0.4,
                ease: 'power2.out'
            });
        }
        
        if (yellowCircle) {
            gsap.to(yellowCircle, {
                scale: 1.2,
                rotation: -20,
                duration: 0.4,
                ease: 'power2.out'
            });
        }
    });
    
    card.addEventListener('mouseleave', () => {
        // Reset card
        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out'
        });
        
        // Reset overlay
        if (overlay) {
            gsap.to(overlay, {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        
        // Reset image
        if (img) {
            gsap.to(img, {
                scale: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
        }
        
        // Reset circles
        if (redCircle) {
            gsap.to(redCircle, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
        }
        
        if (yellowCircle) {
            gsap.to(yellowCircle, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
        }
    });
});

// Strength card hover effects
document.querySelectorAll('.strength-fresh-item').forEach(card => {
    const redCircle = card.querySelector('.strength-fresh-item__circle--red');
    const yellowCircle = card.querySelector('.strength-fresh-item__circle--yellow');
    
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
        if (redCircle) {
            gsap.to(redCircle, {
                scale: 1.2,
                rotation: 15,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        if (yellowCircle) {
            gsap.to(yellowCircle, {
                scale: 1.15,
                rotation: -15,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
        if (redCircle) {
            gsap.to(redCircle, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        if (yellowCircle) {
            gsap.to(yellowCircle, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });
});

// Voices card hover effects
document.querySelectorAll('.voices-fresh__card').forEach(card => {
    const redCircle = card.querySelector('.voices-fresh__circle--red');
    const yellowCircle = card.querySelector('.voices-fresh__circle--yellow');
    
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -8,
            scale: 1.01,
            duration: 0.3,
            ease: 'power2.out'
        });
        if (redCircle) {
            gsap.to(redCircle, {
                scale: 1.15,
                rotation: 15,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        if (yellowCircle) {
            gsap.to(yellowCircle, {
                scale: 1.1,
                rotation: -15,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
        if (redCircle) {
            gsap.to(redCircle, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        if (yellowCircle) {
            gsap.to(yellowCircle, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });
});

// Button hover effects
document.querySelectorAll('.button-fresh, .about-fresh__button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});


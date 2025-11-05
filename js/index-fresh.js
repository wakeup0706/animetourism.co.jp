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

/**
 * Universal Animations for All Pages
 * Apply animations to common elements across all pages
 */
function initUniversalAnimations() {
    // Skip universal animations on pages with body ID 'regional-revitalization' or specific pages
    const body = document.body;
    if (body.id === 'regional-revitalization') {
        return; // Skip all universal animations for this page
    }
    
    // Animate all main headings
    const mainHeadings = document.querySelectorAll('main h1, main h2, .main-fresh h1, .main-fresh h2');
    mainHeadings.forEach((heading, index) => {
        gsap.set(heading, { opacity: 0, y: 30 });
        gsap.to(heading, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: heading,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power3.out'
        });
    });

    // Animate all paragraphs
    const paragraphs = document.querySelectorAll('main p, .main-fresh p');
    paragraphs.forEach((p, index) => {
        gsap.set(p, { opacity: 0, y: 20 });
        gsap.to(p, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.05,
            scrollTrigger: {
                trigger: p,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power2.out'
        });
    });

    // Animate all images
    const images = document.querySelectorAll('main img, .main-fresh img');
    images.forEach((img, index) => {
        gsap.set(img, { opacity: 0, scale: 0.95 });
        gsap.to(img, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.08,
            scrollTrigger: {
                trigger: img,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power2.out'
        });
    });

    // Animate all buttons and links
    const buttons = document.querySelectorAll('main a.button, .main-fresh a.button, main .button-fresh, .main-fresh .button-fresh, main a[class*="button"], .main-fresh a[class*="button"]');
    buttons.forEach((button, index) => {
        gsap.set(button, { opacity: 0, scale: 0.9 });
        gsap.to(button, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: button,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'back.out(1.7)'
        });
    });

    // Animate all lists
    const listItems = document.querySelectorAll('main li, .main-fresh li');
    listItems.forEach((li, index) => {
        gsap.set(li, { opacity: 0, x: -20 });
        gsap.to(li, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.08,
            scrollTrigger: {
                trigger: li,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power2.out'
        });
    });

    // Animate all cards
    const cards = document.querySelectorAll('main [class*="card"], .main-fresh [class*="card"], main [class*="item"], .main-fresh [class*="item"]');
    cards.forEach((card, index) => {
        gsap.set(card, { opacity: 0, y: 50, scale: 0.95 });
        gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power3.out'
        });

        // Add hover bounce effect
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -8,
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Animate all sections
    const sections = document.querySelectorAll('main section, .main-fresh section, main [class*="section"], .main-fresh [class*="section"]');
    sections.forEach((section, index) => {
        gsap.set(section, { opacity: 0 });
        gsap.to(section, {
            opacity: 1,
            duration: 1,
            delay: index * 0.15,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power2.out'
        });
    });

    // Animate all decorative circles
    const circles = document.querySelectorAll('[class*="circle"], [class*="ball"], [class*="decoration"]');
    circles.forEach((circle, index) => {
        // Initial idle float animation
        const floatTl = gsap.timeline({ repeat: -1, yoyo: true });
        floatTl.to(circle, {
            y: -10,
            rotation: 5,
            duration: 2 + index * 0.5,
            ease: 'sine.inOut'
        }).to(circle, {
            y: 0,
            rotation: 0,
            duration: 2 + index * 0.5,
            ease: 'sine.inOut'
        });

        // Scroll-triggered bounce
        ScrollTrigger.create({
            trigger: circle,
            start: 'top 85%',
            onEnter: () => {
                gsap.to(circle, {
                    scale: 1.2,
                    rotation: 15,
                    duration: 0.4,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.out'
                });
            },
            onEnterBack: () => {
                gsap.to(circle, {
                    scale: 1.2,
                    rotation: 15,
                    duration: 0.4,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.out'
                });
            }
        });
    });

    // Animate FAQ items
    const faqItems = document.querySelectorAll('.faq-item, [class*="faq"]');
    faqItems.forEach((item, index) => {
        gsap.set(item, { opacity: 0, x: -30 });
        gsap.to(item, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power2.out'
        });
    });

    // Animate tables
    const tables = document.querySelectorAll('main table, .main-fresh table');
    tables.forEach((table, index) => {
        gsap.set(table, { opacity: 0, scale: 0.95 });
        gsap.to(table, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: table,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power2.out'
        });
    });

    // Animate forms
    const formElements = document.querySelectorAll('main input, main textarea, main select, .main-fresh input, .main-fresh textarea, .main-fresh select');
    formElements.forEach((input, index) => {
        gsap.set(input, { opacity: 0, y: 20 });
        gsap.to(input, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.05,
            scrollTrigger: {
                trigger: input,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power2.out'
        });
    });

    // Add parallax effect to all images on scroll
    const parallaxImages = document.querySelectorAll('main img, .main-fresh img');
    parallaxImages.forEach(img => {
        ScrollTrigger.create({
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            onUpdate: (self) => {
                const speed = 50;
                const yPos = -(self.progress * speed);
                gsap.set(img, { y: yPos });
            }
        });
    });
}

/**
 * Enhanced Header Animations
 */
function initHeaderAnimations() {
    const header = document.querySelector('.header-fresh');
    if (header) {
        // Ensure header is always visible first
        gsap.set(header, { opacity: 1, y: 0, clearProps: 'transform' });
        
        // Only animate on homepage (not on other pages)
        if (document.body.classList.contains('home') || window.location.pathname === '/' || window.location.pathname === '/index.html') {
            // Animate header on load
            gsap.from(header, {
                y: -100,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        }

        // Header scroll effect with animation
        ScrollTrigger.create({
            trigger: 'body',
            start: 'top -50',
            onEnter: () => {
                gsap.to(header, {
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    paddingTop: '15px',
                    paddingBottom: '15px',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            },
            onLeaveBack: () => {
                gsap.to(header, {
                    boxShadow: 'none',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    }
}

/**
 * Enhanced Footer Animations
 */
function initFooterAnimations() {
    const footer = document.querySelector('.footer-fresh');
    if (footer) {
        gsap.set(footer, { opacity: 0, y: 50 });
        gsap.to(footer, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: footer,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power3.out'
        });

        // Animate footer links
        const footerLinks = footer.querySelectorAll('a');
        footerLinks.forEach((link, index) => {
            gsap.set(link, { opacity: 0, x: -20 });
            gsap.to(link, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                delay: index * 0.05,
                scrollTrigger: {
                    trigger: footer,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                    once: false
                },
                ease: 'power2.out'
            });
        });
    }
}

/**
 * Message Section Animations
 */
function initMessageSectionAnimations() {
    const messageSection = document.querySelector('.message-section');
    if (!messageSection) return;

    const messageVisual = document.querySelector('.message-visual');
    const messageCircles = document.querySelectorAll('.message-circle');
    const messageIcon = document.querySelector('.message-icon');
    const messageTextLines = document.querySelectorAll('.message-text-line');
    const messageSubText = document.querySelector('.message-sub-text');
    const messageDescriptionCard = document.querySelector('.message-description-card');

    // Animate visual elements
    if (messageVisual) {
        gsap.set(messageVisual, { opacity: 0, scale: 0.8 });
        gsap.to(messageVisual, {
            opacity: 1,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: messageSection,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power3.out'
        });
    }

    // Animate circles
    messageCircles.forEach((circle, index) => {
        gsap.set(circle, { opacity: 0, scale: 0, rotation: -180 });
        gsap.to(circle, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: messageSection,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'back.out(1.7)'
        });
    });

    // Animate icon
    if (messageIcon) {
        gsap.set(messageIcon, { opacity: 0, scale: 0, rotation: -180 });
        gsap.to(messageIcon, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            delay: 0.4,
            scrollTrigger: {
                trigger: messageSection,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'back.out(1.7)'
        });
    }

    // Animate text lines
    messageTextLines.forEach((line, index) => {
        gsap.set(line, { opacity: 0, y: 30 });
        gsap.to(line, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: messageSection,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power3.out',
            onComplete: () => {
                line.classList.add('animated');
            }
        });
    });

    // Animate sub text
    if (messageSubText) {
        gsap.set(messageSubText, { opacity: 0, x: -30 });
        gsap.to(messageSubText, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.5,
            scrollTrigger: {
                trigger: messageSection,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power2.out'
        });
    }

    // Animate description card
    if (messageDescriptionCard) {
        gsap.set(messageDescriptionCard, { opacity: 0, y: 50 });
        gsap.to(messageDescriptionCard, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.6,
            scrollTrigger: {
                trigger: messageSection,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power3.out'
        });
    }
}

/**
 * Job Cards Animations
 */
function initJobCardsAnimations() {
    const jobsSection = document.querySelector('.jobs-section');
    if (!jobsSection) return;

    const jobCards = document.querySelectorAll('.job-card');
    const jobCardCircles = document.querySelectorAll('.job-card__circle');

    jobCards.forEach((card, index) => {
        const cardCircles = card.querySelectorAll('.job-card__circle');
        const icon = card.querySelector('.job-card__icon-wrapper');
        const title = card.querySelector('.job-card__title');
        const type = card.querySelector('.job-card__type');
        const description = card.querySelector('.job-card__description');
        const metaItems = card.querySelectorAll('.job-meta-item');
        const button = card.querySelector('.job-card__button');

        // Set initial states
        gsap.set(card, { opacity: 0, y: 50, scale: 0.95 });
        gsap.set(cardCircles, { opacity: 0, scale: 0 });
        gsap.set([icon, title, type], { opacity: 0, y: 20 });
        gsap.set(description, { opacity: 0 });
        gsap.set(metaItems, { opacity: 0, x: -20 });
        gsap.set(button, { opacity: 0, scale: 0.8 });

        // Create timeline
        const cardTl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: false
            }
        });

        // Animate card
        cardTl.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out'
        });

        // Animate circles
        cardTl.to(cardCircles, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(1.7)',
            stagger: 0.1
        }, '-=0.3');

        // Animate header elements
        cardTl.to([icon, title, type], {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.1
        }, '-=0.4');

        // Animate description
        cardTl.to(description, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.3');

        // Animate meta items
        cardTl.to(metaItems, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.1
        }, '-=0.4');

        // Animate button
        cardTl.to(button, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(1.7)'
        }, '-=0.3');
    });
}

/**
 * Selection Process Timeline Animations
 */
function initSelectionProcessAnimations() {
    const timeline = document.querySelector('.flow-timeline');
    if (!timeline) return;

    const steps = document.querySelectorAll('.flow-step');
    const connectors = document.querySelectorAll('.flow-step__connector');
    const cards = document.querySelectorAll('.flow-step__card');
    const timelineLine = document.querySelector('.flow-timeline__line');

    // Animate timeline line
    if (timelineLine) {
        gsap.set(timelineLine, { scaleY: 0, transformOrigin: 'top' });
        gsap.to(timelineLine, {
            scaleY: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: timeline,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                once: false
            }
        });
    }

    // Animate each step with stagger
    steps.forEach((step, index) => {
        const connector = step.querySelector('.flow-step__connector');
        const card = step.querySelector('.flow-step__card');
        const number = step.querySelector('.flow-step__number');
        const icon = step.querySelector('.flow-step__icon');
        const title = step.querySelector('.flow-step__title');
        const description = step.querySelector('.flow-step__description');

        // Set initial states
        gsap.set([connector, card], { opacity: 0, scale: 0.8 });
        gsap.set(number, { opacity: 0, scale: 0, rotation: -180 });
        gsap.set(icon, { opacity: 0, rotation: -180, scale: 0 });
        gsap.set([title, description], { opacity: 0, y: 20 });

        // Create timeline for each step
        const stepTl = gsap.timeline({
            scrollTrigger: {
                trigger: step,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: false
            }
        });

        // Animate connector
        stepTl.to(connector, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)'
        });

        // Animate card
        stepTl.to(card, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.3');

        // Animate number
        stepTl.to(number, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.4');

        // Animate icon
        stepTl.to(icon, {
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)'
        }, '-=0.6');

        // Animate text content
        stepTl.to([title, description], {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.1
        }, '-=0.4');

        // Add hover bounce effect
        card.addEventListener('mouseenter', () => {
            gsap.to([connector, card], {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(number, {
                rotation: 10,
                scale: 1.1,
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(icon, {
                rotation: 360,
                duration: 0.5,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to([connector, card], {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(number, {
                rotation: 0,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(icon, {
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        // Continuous float animation for connectors
        const floatTl = gsap.timeline({ repeat: -1, yoyo: true });
        floatTl.to(connector, {
            y: -5,
            duration: 2 + index * 0.3,
            ease: 'sine.inOut'
        }).to(connector, {
            y: 0,
            duration: 2 + index * 0.3,
            ease: 'sine.inOut'
        });

        // Pulse animation for connectors
        ScrollTrigger.create({
            trigger: step,
            start: 'top 85%',
            onEnter: () => {
                gsap.to(connector, {
                    scale: 1.3,
                    duration: 0.4,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.out'
                });
            },
            onEnterBack: () => {
                gsap.to(connector, {
                    scale: 1.3,
                    duration: 0.4,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.out'
                });
            }
        });
    });
}

/**
 * Business Page Animations
 */
function initBusinessPageAnimations() {
    const pageHeader = document.querySelector('.page-header');
    if (!pageHeader) return;

    // Page Header Animations
    const headerVisual = document.querySelector('.page-header__visual');
    const headerCircles = document.querySelectorAll('.page-header__circle');
    const headerIcon = document.querySelector('.page-header__icon');
    const headerTitle = document.querySelector('.page-header__title');
    const headerSubtitle = document.querySelector('.page-header__subtitle');
    const headerDescription = document.querySelector('.page-header__description');

    if (headerVisual) {
        gsap.set(headerVisual, { opacity: 0, scale: 0.8 });
        gsap.to(headerVisual, {
            opacity: 1,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: pageHeader,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power3.out'
        });
    }

    headerCircles.forEach((circle, index) => {
        gsap.set(circle, { opacity: 0, scale: 0, rotation: -180 });
        gsap.to(circle, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: pageHeader,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'back.out(1.7)'
        });
    });

    if (headerIcon) {
        gsap.set(headerIcon, { opacity: 0, scale: 0, rotation: -180 });
        gsap.to(headerIcon, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            delay: 0.4,
            scrollTrigger: {
                trigger: pageHeader,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'back.out(1.7)'
        });
    }

    if (headerTitle) {
        gsap.set(headerTitle, { opacity: 0, y: 30 });
        gsap.to(headerTitle, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            scrollTrigger: {
                trigger: pageHeader,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power3.out'
        });
    }

    if (headerSubtitle) {
        gsap.set(headerSubtitle, { opacity: 0, y: 20 });
        gsap.to(headerSubtitle, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
            scrollTrigger: {
                trigger: pageHeader,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power2.out'
        });
    }

    if (headerDescription) {
        gsap.set(headerDescription, { opacity: 0, x: -30 });
        gsap.to(headerDescription, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.4,
            scrollTrigger: {
                trigger: pageHeader,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                once: false
            },
            ease: 'power2.out'
        });
    }

    // Service Cards Animations
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        const cardNumber = card.querySelector('.service-card__number');
        const cardContent = card.querySelector('.service-card__content');
        const cardHeader = card.querySelector('.service-card__header');
        const cardTag = card.querySelector('.service-card__tag');
        const cardTitle = card.querySelector('.service-card__title');
        const cardBody = card.querySelector('.service-card__body');
        const cardImage = card.querySelector('.service-card__image');
        const cardText = card.querySelector('.service-card__text');
        const cardButton = card.querySelector('.service-card__button');
        const businessCircles = card.closest('.business-section').querySelectorAll('.business-circle');

        // Set initial states
        gsap.set(cardNumber, { opacity: 0, scale: 0.5 });
        gsap.set(cardContent, { opacity: 0, y: 50, scale: 0.95 });
        gsap.set([cardTag, cardTitle], { opacity: 0, y: 20 });
        gsap.set(cardImage, { opacity: 0, scale: 0.9 });
        gsap.set(cardText, { opacity: 0, x: card.classList.contains('service-card--left') ? -30 : 30 });
        gsap.set(cardButton, { opacity: 0, scale: 0.8 });
        gsap.set(businessCircles, { opacity: 0, scale: 0 });

        // Create timeline
        const cardTl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: false
            }
        });

        // Animate business circles
        cardTl.to(businessCircles, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            stagger: 0.1
        });

        // Animate card number
        cardTl.to(cardNumber, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.4');

        // Animate card content
        cardTl.to(cardContent, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.5');

        // Animate header elements
        cardTl.to([cardTag, cardTitle], {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.1
        }, '-=0.4');

        // Animate image
        cardTl.to(cardImage, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.3');

        // Animate text
        cardTl.to(cardText, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.4');

        // Animate button
        cardTl.to(cardButton, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(1.7)'
        }, '-=0.3');
    });
}

/**
 * News Page Animations
 */
function initNewsPageAnimations() {
    // Only run if we're on the news page
    if (document.body.id !== 'news') return;
    
    const hero = document.querySelector('.hero--enhanced');
    if (!hero) return;

    const heroContent = hero.querySelector('.hero__content');
    const heroNumber = hero.querySelector('.hero__number');
    const heroTitle = hero.querySelector('.hero__title');
    const heroSubtitle = hero.querySelector('.hero__subtitle');
    const heroText = hero.querySelector('.hero__text');
    const heroVisual = hero.querySelector('.hero__visual');
    const heroImage = hero.querySelector('.hero__image');
    const heroCircles = hero.querySelectorAll('.hero__circle');
    const heroCircleSmalls = hero.querySelectorAll('.hero__circle-small');

    // Set initial states
    if (heroContent) gsap.set(heroContent, { opacity: 0, x: -50 });
    if (heroNumber) gsap.set(heroNumber, { opacity: 0, scale: 0.5 });
    if (heroTitle) gsap.set(heroTitle, { opacity: 0, y: 30 });
    if (heroSubtitle) gsap.set(heroSubtitle, { opacity: 0, y: 20 });
    if (heroText) gsap.set(heroText, { opacity: 0, x: -30 });
    if (heroVisual) gsap.set(heroVisual, { opacity: 0, x: 50 });
    if (heroImage) gsap.set(heroImage, { opacity: 0, scale: 0.9 });
    if (heroCircles.length) gsap.set(heroCircles, { opacity: 0, scale: 0 });
    if (heroCircleSmalls.length) gsap.set(heroCircleSmalls, { opacity: 0, scale: 0 });

    // Create timeline
    const heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: hero,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            once: false
        }
    });

    // Animate decorative circles
    if (heroCircles.length) {
        heroTl.to(heroCircles, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            stagger: 0.2
        });
    }

    // Animate content
    if (heroContent) {
        heroTl.to(heroContent, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5');
    }

    // Animate number
    if (heroNumber) {
        heroTl.to(heroNumber, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.6');
    }

    // Animate title and subtitle
    if (heroTitle && heroSubtitle) {
        heroTl.to([heroTitle, heroSubtitle], {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1
        }, '-=0.5');
    }

    // Animate text
    if (heroText) {
        heroTl.to(heroText, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.4');
    }

    // Animate visual
    if (heroVisual) {
        heroTl.to(heroVisual, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6');
    }

    // Animate image
    if (heroImage) {
        heroTl.to(heroImage, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.5');
    }

    // Animate small circles
    if (heroCircleSmalls.length) {
        heroTl.to(heroCircleSmalls, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            stagger: 0.1
        }, '-=0.4');
    }

    // News Section Animations
    const newsSection = document.querySelector('.news-section');
    if (newsSection) {
        const newsTitle = newsSection.querySelector('.news-section__title');
        const newsCards = newsSection.querySelectorAll('.news-card');
        const newsCircles = newsSection.querySelectorAll('.news-circle');

        // Set initial states
        if (newsTitle) gsap.set(newsTitle, { opacity: 0, y: 30 });
        if (newsCards.length) gsap.set(newsCards, { opacity: 0, y: 50, scale: 0.95 });
        if (newsCircles.length) gsap.set(newsCircles, { opacity: 0, scale: 0 });

        // Create timeline for news section
        const newsTl = gsap.timeline({
            scrollTrigger: {
                trigger: newsSection,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: false
            }
        });

        // Animate decorative circles
        if (newsCircles.length) {
            newsTl.to(newsCircles, {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: 'back.out(1.7)',
                stagger: 0.1
            });
        }

        // Animate title
        if (newsTitle) {
            newsTl.to(newsTitle, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.4');
        }

        // Animate cards with stagger
        if (newsCards.length) {
            newsTl.to(newsCards, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.15
            }, '-=0.4');

            // Add hover effects to news cards
            newsCards.forEach((card) => {
                const cardNumber = card.querySelector('.news-card__number');
                const cardImage = card.querySelector('.news-card__image img');
                const cardCircles = card.querySelectorAll('.news-card__circle-small');
                const cardIcon = card.querySelector('.news-card__image-icon');

                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -12,
                        scale: 1.02,
                        duration: 0.4,
                        ease: 'power2.out'
                    });
                    if (cardNumber) {
                        gsap.to(cardNumber, {
                            scale: 1.1,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                    if (cardImage) {
                        gsap.to(cardImage, {
                            scale: 1.1,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                    if (cardCircles.length) {
                        gsap.to(cardCircles, {
                            scale: 1.2,
                            rotation: 15,
                            duration: 0.4,
                            ease: 'power2.out',
                            stagger: 0.1
                        });
                    }
                    if (cardIcon) {
                        gsap.to(cardIcon, {
                            scale: 1,
                            rotation: 360,
                            duration: 0.5,
                            ease: 'power2.out'
                        });
                    }
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        scale: 1,
                        duration: 0.4,
                        ease: 'power2.out'
                    });
                    if (cardNumber) {
                        gsap.to(cardNumber, {
                            scale: 1,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                    if (cardImage) {
                        gsap.to(cardImage, {
                            scale: 1,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                    if (cardCircles.length) {
                        gsap.to(cardCircles, {
                            scale: 1,
                            rotation: 0,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                    if (cardIcon) {
                        gsap.to(cardIcon, {
                            scale: 0.8,
                            rotation: 0,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                });
            });
        }
    }
}

/**
 * Corporate Philosophy Page Animations
 */
function initCorporatePhilosophyPageAnimations() {
    // Only run if we're on the philosophy page
    if (document.body.id !== 'philosophy') return;
    
    const hero = document.querySelector('.hero--enhanced');
    if (!hero) return;

    const heroContent = hero.querySelector('.hero__content');
    const heroNumber = hero.querySelector('.hero__number');
    const heroTitle = hero.querySelector('.hero__title');
    const heroSubtitle = hero.querySelector('.hero__subtitle');
    const heroText = hero.querySelector('.hero__text');
    const heroVisual = hero.querySelector('.hero__visual');
    const heroImage = hero.querySelector('.hero__image');
    const heroCircles = hero.querySelectorAll('.hero__circle');
    const heroCircleSmalls = hero.querySelectorAll('.hero__circle-small');

    // Set initial states
    if (heroContent) gsap.set(heroContent, { opacity: 0, x: -50 });
    if (heroNumber) gsap.set(heroNumber, { opacity: 0, scale: 0.5 });
    if (heroTitle) gsap.set(heroTitle, { opacity: 0, y: 30 });
    if (heroSubtitle) gsap.set(heroSubtitle, { opacity: 0, y: 20 });
    if (heroText) gsap.set(heroText, { opacity: 0, x: -30 });
    if (heroVisual) gsap.set(heroVisual, { opacity: 0, x: 50 });
    if (heroImage) gsap.set(heroImage, { opacity: 0, scale: 0.9 });
    if (heroCircles.length) gsap.set(heroCircles, { opacity: 0, scale: 0 });
    if (heroCircleSmalls.length) gsap.set(heroCircleSmalls, { opacity: 0, scale: 0 });

    // Create timeline
    const heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: hero,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            once: false
        }
    });

    // Animate decorative circles
    if (heroCircles.length) {
        heroTl.to(heroCircles, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            stagger: 0.2
        });
    }

    // Animate content
    if (heroContent) {
        heroTl.to(heroContent, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5');
    }

    // Animate number
    if (heroNumber) {
        heroTl.to(heroNumber, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.6');
    }

    // Animate title and subtitle
    if (heroTitle && heroSubtitle) {
        heroTl.to([heroTitle, heroSubtitle], {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1
        }, '-=0.5');
    }

    // Animate text
    if (heroText) {
        heroTl.to(heroText, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.4');
    }

    // Animate visual
    if (heroVisual) {
        heroTl.to(heroVisual, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6');
    }

    // Animate image (logo)
    if (heroImage) {
        heroTl.to(heroImage, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.5');
    }

    // Animate small circles
    if (heroCircleSmalls.length) {
        heroTl.to(heroCircleSmalls, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            stagger: 0.1
        }, '-=0.4');
    }

    // Core Values Section Animations
    const coreValuesSection = document.querySelector('.core-values');
    if (coreValuesSection) {
        const sectionTitle = coreValuesSection.querySelector('.section-title');
        const valueCards = coreValuesSection.querySelectorAll('.value-card');
        const philosophyCircles = coreValuesSection.querySelectorAll('.philosophy-circle');

        // Set initial states
        if (sectionTitle) gsap.set(sectionTitle, { opacity: 0, y: 30 });
        if (valueCards.length) gsap.set(valueCards, { opacity: 0, y: 50, scale: 0.95 });
        if (philosophyCircles.length) gsap.set(philosophyCircles, { opacity: 0, scale: 0 });

        // Create timeline for core values section
        const valuesTl = gsap.timeline({
            scrollTrigger: {
                trigger: coreValuesSection,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: false
            }
        });

        // Animate decorative circles
        if (philosophyCircles.length) {
            valuesTl.to(philosophyCircles, {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: 'back.out(1.7)',
                stagger: 0.1
            });
        }

        // Animate title
        if (sectionTitle) {
            valuesTl.to(sectionTitle, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.4');
        }

        // Animate cards with stagger
        if (valueCards.length) {
            valuesTl.to(valueCards, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.1
            }, '-=0.4');

            // Add hover effects to value cards
            valueCards.forEach((card) => {
                const cardNumber = card.querySelector('.value-card__number');
                const cardInner = card.querySelector('.value-card__inner');
                const cardIcon = card.querySelector('.value-card__icon');

                card.addEventListener('mouseenter', () => {
                    if (cardNumber) {
                        gsap.to(cardNumber, {
                            scale: 1.1,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                    if (cardIcon) {
                        gsap.to(cardIcon, {
                            scale: 1.1,
                            rotation: 5,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                });

                card.addEventListener('mouseleave', () => {
                    if (cardNumber) {
                        gsap.to(cardNumber, {
                            scale: 1,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                    if (cardIcon) {
                        gsap.to(cardIcon, {
                            scale: 1,
                            rotation: 0,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                });
            });
        }
    }
}

/**
 * Member Page Animations
 */
function initMemberPageAnimations() {
    // Only run if we're on the member page
    if (document.body.id !== 'member') return;
    
    const hero = document.querySelector('.hero--enhanced');
    if (!hero) return;

    const heroContent = hero.querySelector('.hero__content');
    const heroNumber = hero.querySelector('.hero__number');
    const heroTitle = hero.querySelector('.hero__title');
    const heroSubtitle = hero.querySelector('.hero__subtitle');
    const heroText = hero.querySelector('.hero__text');
    const heroVisual = hero.querySelector('.hero__visual');
    const heroImage = hero.querySelector('.hero__image');
    const heroCircles = hero.querySelectorAll('.hero__circle');
    const heroCircleSmalls = hero.querySelectorAll('.hero__circle-small');

    // Set initial states - keep hero image visible
    if (heroContent) gsap.set(heroContent, { opacity: 0, x: -50 });
    if (heroNumber) gsap.set(heroNumber, { opacity: 0, scale: 0.5 });
    if (heroTitle) gsap.set(heroTitle, { opacity: 0, y: 30 });
    if (heroSubtitle) gsap.set(heroSubtitle, { opacity: 0, y: 20 });
    if (heroText) gsap.set(heroText, { opacity: 0, x: -30 });
    if (heroVisual) gsap.set(heroVisual, { opacity: 0, x: 50 });
    // Keep hero image visible - don't hide it initially
    if (heroImage) gsap.set(heroImage, { opacity: 1, scale: 1, clearProps: 'all' });
    if (heroCircles.length) gsap.set(heroCircles, { opacity: 0, scale: 0 });
    if (heroCircleSmalls.length) gsap.set(heroCircleSmalls, { opacity: 0, scale: 0 });

    // Create timeline
    const heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: hero,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            once: false
        }
    });

    // Animate decorative circles
    if (heroCircles.length) {
        heroTl.to(heroCircles, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            stagger: 0.2
        });
    }

    // Animate content
    if (heroContent) {
        heroTl.to(heroContent, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5');
    }

    // Animate number
    if (heroNumber) {
        heroTl.to(heroNumber, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.6');
    }

    // Animate title and subtitle
    if (heroTitle && heroSubtitle) {
        heroTl.to([heroTitle, heroSubtitle], {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1
        }, '-=0.5');
    }

    // Animate text
    if (heroText) {
        heroTl.to(heroText, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.4');
    }

    // Animate visual
    if (heroVisual) {
        heroTl.to(heroVisual, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6');
    }

    // Hero image is already visible, just add a subtle fade-in effect
    if (heroImage) {
        heroTl.from(heroImage, {
            opacity: 0.7,
            scale: 0.98,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.5');
    }

    // Animate small circles
    if (heroCircleSmalls.length) {
        heroTl.to(heroCircleSmalls, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            stagger: 0.1
        }, '-=0.4');
    }

    // Executive Team Section Animations
    const executiveSection = document.querySelector('.executive-team');
    if (executiveSection) {
        const sectionTitle = executiveSection.querySelector('.section-title');
        const executiveCards = executiveSection.querySelectorAll('.executive-card');
        const memberCircles = executiveSection.querySelectorAll('.member-circle');

        // Set initial states
        if (sectionTitle) gsap.set(sectionTitle, { opacity: 0, y: 30 });
        if (executiveCards.length) gsap.set(executiveCards, { opacity: 0, y: 50, scale: 0.95 });
        if (memberCircles.length) gsap.set(memberCircles, { opacity: 0, scale: 0 });

        // Create timeline for executive section
        const executiveTl = gsap.timeline({
            scrollTrigger: {
                trigger: executiveSection,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: false
            }
        });

        // Animate decorative circles
        if (memberCircles.length) {
            executiveTl.to(memberCircles, {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: 'back.out(1.7)',
                stagger: 0.1
            });
        }

        // Animate title
        if (sectionTitle) {
            executiveTl.to(sectionTitle, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.4');
        }

        // Animate cards with stagger
        if (executiveCards.length) {
            executiveTl.to(executiveCards, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.15
            }, '-=0.4');

            // Add hover effects to executive cards
            executiveCards.forEach((card) => {
                const cardNumber = card.querySelector('.executive-card__number');
                const cardPhoto = card.querySelector('.photo-frame');
                const cardIcon = card.querySelector('.executive-card__icon');

                card.addEventListener('mouseenter', () => {
                    if (cardNumber) {
                        gsap.to(cardNumber, {
                            scale: 1.1,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                    if (cardPhoto) {
                        gsap.to(cardPhoto, {
                            scale: 1.05,
                            rotation: 2,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                });

                card.addEventListener('mouseleave', () => {
                    if (cardNumber) {
                        gsap.to(cardNumber, {
                            scale: 1,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                    if (cardPhoto) {
                        gsap.to(cardPhoto, {
                            scale: 1,
                            rotation: 0,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                });
            });
        }
    }

    // Team Members Section Animations
    const teamMembersSection = document.querySelector('.team-members');
    if (teamMembersSection) {
        const sectionTitle = teamMembersSection.querySelector('.section-title');
        const memberCards = teamMembersSection.querySelectorAll('.member-card');
        const filterButtons = teamMembersSection.querySelectorAll('.filter-btn');

        // Set initial states
        if (sectionTitle) gsap.set(sectionTitle, { opacity: 0, y: 30 });
        if (memberCards.length) gsap.set(memberCards, { opacity: 0, y: 50, scale: 0.95 });
        if (filterButtons.length) gsap.set(filterButtons, { opacity: 0, scale: 0.9 });

        // Create timeline for team members section
        const teamTl = gsap.timeline({
            scrollTrigger: {
                trigger: teamMembersSection,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: false
            }
        });

        // Animate title
        if (sectionTitle) {
            teamTl.to(sectionTitle, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        }

        // Animate filter buttons
        if (filterButtons.length) {
            teamTl.to(filterButtons, {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: 'back.out(1.7)',
                stagger: 0.1
            }, '-=0.4');
        }

        // Animate cards with stagger
        if (memberCards.length) {
            teamTl.to(memberCards, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.1
            }, '-=0.4');

            // Add hover effects to member cards
            memberCards.forEach((card) => {
                const cardNumber = card.querySelector('.member-card__number');
                const cardInner = card.querySelector('.member-card__inner');

                card.addEventListener('mouseenter', () => {
                    if (cardNumber) {
                        gsap.to(cardNumber, {
                            scale: 1.1,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                });

                card.addEventListener('mouseleave', () => {
                    if (cardNumber) {
                        gsap.to(cardNumber, {
                            scale: 1,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                });

                // Card flip functionality
                card.addEventListener('click', () => {
                    if (cardInner) {
                        cardInner.classList.toggle('is-flipped');
                    }
                });
            });
        }
    }

    // Team Culture Section Animations
    const teamCultureSection = document.querySelector('.team-culture');
    if (teamCultureSection) {
        const sectionTitle = teamCultureSection.querySelector('.section-title');
        const cultureItems = teamCultureSection.querySelectorAll('.culture-item');
        const memberCircles = teamCultureSection.querySelectorAll('.member-circle');

        // Set initial states
        if (sectionTitle) gsap.set(sectionTitle, { opacity: 0, y: 30 });
        if (cultureItems.length) gsap.set(cultureItems, { opacity: 0, y: 50, scale: 0.95 });
        if (memberCircles.length) gsap.set(memberCircles, { opacity: 0, scale: 0 });

        // Create timeline for culture section
        const cultureTl = gsap.timeline({
            scrollTrigger: {
                trigger: teamCultureSection,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: false
            }
        });

        // Animate decorative circles
        if (memberCircles.length) {
            cultureTl.to(memberCircles, {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: 'back.out(1.7)',
                stagger: 0.1
            });
        }

        // Animate title
        if (sectionTitle) {
            cultureTl.to(sectionTitle, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.4');
        }

        // Animate items with stagger
        if (cultureItems.length) {
            cultureTl.to(cultureItems, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.1
            }, '-=0.4');

            // Add hover effects to culture items
            cultureItems.forEach((item) => {
                const itemNumber = item.querySelector('.culture-item__number');
                const itemIcon = item.querySelector('.culture-item__icon');

                item.addEventListener('mouseenter', () => {
                    if (itemNumber) {
                        gsap.to(itemNumber, {
                            scale: 1.1,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                    if (itemIcon) {
                        gsap.to(itemIcon, {
                            scale: 1.1,
                            rotation: 5,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                });

                item.addEventListener('mouseleave', () => {
                    if (itemNumber) {
                        gsap.to(itemNumber, {
                            scale: 1,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                    if (itemIcon) {
                        gsap.to(itemIcon, {
                            scale: 1,
                            rotation: 0,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                });
            });
        }
    }
}

/**
 * Apps Page Hero Animations
 */
function initAppsPageAnimations() {
    const hero = document.querySelector('.hero--enhanced');
    if (!hero) return;

    const heroContent = hero.querySelector('.hero__content');
    const heroNumber = hero.querySelector('.hero__number');
    const heroTitle = hero.querySelector('.hero__title');
    const heroSubtitle = hero.querySelector('.hero__subtitle');
    const heroText = hero.querySelector('.hero__text');
    const heroStats = hero.querySelectorAll('.stats__item');
    const heroVisual = hero.querySelector('.hero__visual');
    const heroImage = hero.querySelector('.hero__image');
    const heroCircles = hero.querySelectorAll('.hero__circle');
    const heroCircleSmalls = hero.querySelectorAll('.hero__circle-small');

    // Set initial states
    gsap.set(heroContent, { opacity: 0, x: -50 });
    gsap.set(heroNumber, { opacity: 0, scale: 0.5 });
    gsap.set([heroTitle, heroSubtitle], { opacity: 0, y: 30 });
    gsap.set(heroText, { opacity: 0, x: -30 });
    gsap.set(heroStats, { opacity: 0, y: 20 });
    gsap.set(heroVisual, { opacity: 0, x: 50 });
    gsap.set(heroImage, { opacity: 0, scale: 0.9 });
    gsap.set(heroCircles, { opacity: 0, scale: 0 });
    gsap.set(heroCircleSmalls, { opacity: 0, scale: 0 });

    // Create timeline
    const heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: hero,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            once: false
        }
    });

    // Animate decorative circles
    heroTl.to(heroCircles, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.2
    });

    // Animate content
    heroTl.to(heroContent, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.5');

    // Animate number
    heroTl.to(heroNumber, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)'
    }, '-=0.6');

    // Animate title and subtitle
    heroTl.to([heroTitle, heroSubtitle], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1
    }, '-=0.5');

    // Animate text
    heroTl.to(heroText, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.4');

    // Animate stats
    heroTl.to(heroStats, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1
    }, '-=0.4');

    // Animate visual
    heroTl.to(heroVisual, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6');

    // Animate image
    heroTl.to(heroImage, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.5');

    // Animate small circles
    heroTl.to(heroCircleSmalls, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        stagger: 0.1
    }, '-=0.4');
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initNavbarDropdowns();
    initHeaderAnimations();
    initHeroAnimations();
    initWorksAnimations();
    initSpecialSection();
    initScrollAnimations();
    initCarousels();
    initParallaxEffects();
    initBounceEffect();
    initPageTop();
    initUniversalAnimations();
    initFooterAnimations();
    initMessageSectionAnimations();
    initJobCardsAnimations();
    initSelectionProcessAnimations();
    initBusinessPageAnimations();
    initAppsPageAnimations();
    initLocalActivitiesPageAnimations();
    initNewsPageAnimations();
    initCorporatePhilosophyPageAnimations();
    initMemberPageAnimations();
    
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
 * Local Activities Page Hero Animations
 */
function initLocalActivitiesPageAnimations() {
    const hero = document.querySelector('.hero--enhanced');
    if (!hero) return;
    
    // Only run if we're on the local activities page
    if (document.body.id !== 'regional-revitalization') return;

    const heroContent = hero.querySelector('.hero__content');
    const heroNumber = hero.querySelector('.hero__number');
    const heroTitle = hero.querySelector('.hero__title');
    const heroSubtitle = hero.querySelector('.hero__subtitle');
    const heroTexts = hero.querySelectorAll('.hero__text');
    const heroStats = hero.querySelectorAll('.stats__item');
    const heroVisual = hero.querySelector('.hero__visual');
    const heroImage = hero.querySelector('.hero__image');
    const heroCircles = hero.querySelectorAll('.hero__circle');
    const heroCircleSmalls = hero.querySelectorAll('.hero__circle-small');

    // Make everything visible immediately - no animations on local activities page
    if (heroContent) gsap.set(heroContent, { opacity: 1, x: 0, clearProps: 'all' });
    if (heroNumber) gsap.set(heroNumber, { opacity: 1, scale: 1, clearProps: 'all' });
    if (heroTitle) gsap.set(heroTitle, { opacity: 1, y: 0, clearProps: 'all' });
    if (heroSubtitle) gsap.set(heroSubtitle, { opacity: 1, y: 0, clearProps: 'all' });
    if (heroTexts.length) gsap.set(heroTexts, { opacity: 1, x: 0, clearProps: 'all' });
    if (heroStats.length) gsap.set(heroStats, { opacity: 1, y: 0, clearProps: 'all' });
    if (heroVisual) gsap.set(heroVisual, { opacity: 1, x: 0, clearProps: 'all' });
    if (heroImage) gsap.set(heroImage, { opacity: 1, scale: 1, clearProps: 'all' });
    if (heroCircles.length) gsap.set(heroCircles, { opacity: 1, scale: 1, clearProps: 'all' });
    if (heroCircleSmalls.length) gsap.set(heroCircleSmalls, { opacity: 1, scale: 1, clearProps: 'all' });
    
    // Also make sure all main content is visible
    const allMainContent = document.querySelectorAll('#regional-revitalization main *');
    if (allMainContent.length) {
        gsap.set(allMainContent, { clearProps: 'opacity,transform' });
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initNavbarDropdowns();
    initHeaderAnimations();
    initHeroAnimations();
    initWorksAnimations();
    initSpecialSection();
    initScrollAnimations();
    initCarousels();
    initParallaxEffects();
    initBounceEffect();
    initPageTop();
    initUniversalAnimations();
    initFooterAnimations();
    initMessageSectionAnimations();
    initJobCardsAnimations();
    initSelectionProcessAnimations();
    initBusinessPageAnimations();
    initAppsPageAnimations();
    initLocalActivitiesPageAnimations();
    initNewsPageAnimations();
    initCorporatePhilosophyPageAnimations();
    initMemberPageAnimations();
    
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
 * Works Section – stylish animations matching Hero/About
 */
function initWorksAnimations() {
    const cards = document.querySelectorAll('.work-fresh-card');
    if (!cards.length) return;

    // Responsive, more stylish layout: alternating offsets/angles with depth
    function applyDeckLayout() {
        const isDesktop = window.innerWidth >= 992;
        if (isDesktop) {
            cards.forEach((card, i) => {
                const angle = (i % 2 === 0) ? -2.25 : 2.25;
                const yOffset = (i % 2 === 0) ? 22 : -18;
                gsap.set(card, {
                    transformPerspective: 900,
                    rotateZ: angle,
                    y: yOffset,
                    zIndex: 1,
                    willChange: 'transform',
                    boxShadow: '0 10px 24px rgba(0,0,0,0.12)'
                });
            });
        } else {
            // Reset for mobile/tablet
            gsap.set(cards, { rotateZ: 0, y: 0, zIndex: 1, boxShadow: '0 6px 14px rgba(0,0,0,0.10)' });
        }
    }

    applyDeckLayout();
    window.addEventListener('resize', applyDeckLayout);

    // Entrance animation (staggered)
    gsap.set(cards, { opacity: 0, scale: 0.985, rotateX: 3 });
    gsap.to(cards, {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.works-fresh',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    // Per-card idle float + interactive hover/parallax
    cards.forEach((card) => {
        const image = card.querySelector('.work-fresh-card__image img');
        const redCircle = card.querySelector('.work-fresh-card__circle--red');
        const yellowCircle = card.querySelector('.work-fresh-card__circle--yellow');
        const overlay = card.querySelector('.work-fresh-card__overlay');

        // Idle subtle float (runs only when card is in view)
        const floatTl = gsap.timeline({ repeat: -1, yoyo: true, paused: true });
        floatTl.to(card, { y: -6, duration: 2.2, ease: 'sine.inOut' })
               .to(card, { y: 0, duration: 2.2, ease: 'sine.inOut' });
        ScrollTrigger.create({
            trigger: card,
            start: 'top 85%',
            onEnter: () => floatTl.play(),
            onLeave: () => floatTl.pause(),
            onEnterBack: () => floatTl.play(),
            onLeaveBack: () => floatTl.pause()
        });

        // Hover elevate + overlay reveal + focus mode
        const hoverTl = gsap.timeline({ paused: true, defaults: { ease: 'power2.out' } });
        hoverTl.to(card, { y: -10, rotateZ: 0, scale: 1.03, zIndex: 5, boxShadow: '0 16px 36px rgba(0,0,0,0.22)', duration: 0.35 }, 0)
               .to(image, { scale: 1.05, duration: 0.4 }, 0)
               .to(redCircle, { x: -6, y: -6, duration: 0.4 }, 0)
               .to(yellowCircle, { x: 8, y: 8, duration: 0.4 }, 0);
        if (overlay) {
            gsap.set(overlay, { opacity: 0 });
            hoverTl.to(overlay, { opacity: 1, duration: 0.35 }, 0.05);
        }

        // Dim siblings on hover for a focused showcase
        function dimSiblings(dim) {
            const siblings = Array.from(cards).filter(c => c !== card);
            gsap.to(siblings, { opacity: dim ? 0.6 : 1, duration: 0.25, ease: 'power2.out' });
        }

        // Mouse parallax / tilt
        const quickRotateX = gsap.quickTo(card, 'rotateX', { duration: 0.25, ease: 'power2.out' });
        const quickRotateY = gsap.quickTo(card, 'rotateY', { duration: 0.25, ease: 'power2.out' });
        const quickImgX = image ? gsap.quickTo(image, 'x', { duration: 0.25 }) : null;
        const quickImgY = image ? gsap.quickTo(image, 'y', { duration: 0.25 }) : null;
        const quickRedX = redCircle ? gsap.quickTo(redCircle, 'x', { duration: 0.25 }) : null;
        const quickRedY = redCircle ? gsap.quickTo(redCircle, 'y', { duration: 0.25 }) : null;
        const quickYelX = yellowCircle ? gsap.quickTo(yellowCircle, 'x', { duration: 0.25 }) : null;
        const quickYelY = yellowCircle ? gsap.quickTo(yellowCircle, 'y', { duration: 0.25 }) : null;

        function onMove(e) {
            const rect = card.getBoundingClientRect();
            const relX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
            const relY = (e.clientY - rect.top) / rect.height - 0.5;
            quickRotateY(relX * 6); // tilt horizontally
            quickRotateX(-relY * 6); // tilt vertically
            if (quickImgX && quickImgY) {
                quickImgX(relX * 10);
                quickImgY(relY * 10);
            }
            if (quickRedX && quickRedY) {
                quickRedX(-relX * 12);
                quickRedY(-relY * 12);
            }
            if (quickYelX && quickYelY) {
                quickYelX(relX * 14);
                quickYelY(relY * 14);
            }
        }

        function onEnter() { hoverTl.play(); dimSiblings(true); }
        function onLeave() {
            hoverTl.reverse();
            dimSiblings(false);
            quickRotateX(0); quickRotateY(0);
            if (quickImgX && quickImgY) { quickImgX(0); quickImgY(0); }
            if (quickRedX && quickRedY) { quickRedX(0); quickRedY(0); }
            if (quickYelX && quickYelY) { quickYelX(0); quickYelY(0); }
        }

        card.addEventListener('mousemove', onMove);
        card.addEventListener('mouseenter', onEnter);
        card.addEventListener('mouseleave', onLeave);
    });
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


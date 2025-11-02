/**
 * GSAP Animation Effects for Homepage
 * Based on reference website animations
 */

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initHeroAnimations();
    initScrollAnimations();
    initCarousel();
    initParallaxEffects();
    initTextAnimations();
});

/**
 * Hero Section Animations
 */
function initHeroAnimations() {
    const heroTitle = document.querySelector('.hero__title');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    const heroText = document.querySelectorAll('.hero__text');
    const heroStats = document.querySelector('.hero__stats');
    
    // Animate title letters individually
    if (heroTitle) {
        const titleText = heroTitle.textContent;
        heroTitle.innerHTML = '';
        
        titleText.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.classList.add('letter-animate');
            heroTitle.appendChild(span);
        });
        
        gsap.from('.hero__title .letter-animate', {
            opacity: 0,
            y: 50,
            rotationX: -90,
            stagger: 0.05,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.3
        });
    }
    
    // Animate subtitle with cover effect
    if (heroSubtitle) {
        gsap.set(heroSubtitle, { overflow: 'hidden' });
        
        const cover = document.createElement('span');
        cover.classList.add('text-cover');
        cover.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #0d0d0d; transform: translateX(100%);';
        heroSubtitle.style.position = 'relative';
        heroSubtitle.appendChild(cover);
        
        gsap.to(cover, {
            x: '100%',
            duration: 1,
            ease: 'power3.inOut',
            delay: 0.8
        });
        
        gsap.from(heroSubtitle, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.9
        });
    }
    
    // Animate text elements with stagger
    if (heroText.length > 0) {
        gsap.from(heroText, {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out',
            delay: 1.2
        });
    }
    
    // Animate stats
    if (heroStats) {
        gsap.from(heroStats, {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: 'power3.out',
            delay: 1.5
        });
        
        // Animate number counter
        const strongTag = heroStats.querySelector('strong');
        if (strongTag) {
            const targetValue = parseFloat(strongTag.textContent);
            gsap.fromTo({ value: 0 }, {
                value: targetValue,
                duration: 2,
                ease: 'power2.out',
                delay: 1.7,
                onUpdate: function() {
                    strongTag.textContent = this.targets()[0].value.toFixed(1);
                }
            });
        }
    }
}

/**
 * Scroll-Triggered Animations
 */
function initScrollAnimations() {
    // Animate sections on scroll
    gsap.utils.toArray('.strength-item, .work-card, .voice-card').forEach((element, index) => {
        gsap.from(element, {
            opacity: 0,
            y: 80,
            scale: 0.9,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            ease: 'power3.out',
            delay: index * 0.1
        });
    });
    
    // Section titles animation
    gsap.utils.toArray('.section__title').forEach((title) => {
        gsap.from(title, {
            opacity: 0,
            x: -50,
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            ease: 'power3.out'
        });
    });
    
    // Animate strengths section
    const strengthsSection = document.querySelector('.strengths');
    if (strengthsSection) {
        gsap.from('.strengths__title', {
            opacity: 0,
            y: 50,
            scrollTrigger: {
                trigger: strengthsSection,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            ease: 'power3.out'
        });
    }
    
    // Works section animation
    const worksSection = document.querySelector('.works');
    if (worksSection) {
        gsap.from('.works__title', {
            opacity: 0,
            y: 50,
            scrollTrigger: {
                trigger: worksSection,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            ease: 'power3.out'
        });
    }
    
    // Voices section animation with scale effect
    const voicesSection = document.querySelector('.voices');
    if (voicesSection) {
        gsap.from('.voices__title', {
            opacity: 0,
            scale: 0.8,
            scrollTrigger: {
                trigger: voicesSection,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            ease: 'back.out(1.7)'
        });
    }
}

/**
 * Carousel with GSAP animations
 */
function initCarousel() {
    const slideshow = document.getElementById('heroSlideshow');
    if (!slideshow) return;
    
    // Wait a bit for Splide to be available
    setTimeout(() => {
        if (typeof Splide !== 'undefined') {
            // Initialize Splide carousel
            const splide = new Splide('#heroSlideshow', {
                type: 'loop',
                perPage: 1,
                autoplay: true,
                interval: 4000,
                speed: 1000,
                easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
                pagination: false,
                arrows: false,
                pauseOnHover: false,
                lazyLoad: 'sequential',
                cover: true,
                height: '100vh'
            });
            
            splide.on('moved', function(newIndex, prevIndex) {
                // Animate slide transition
                const slides = splide.Components.Slides.slides;
                if (slides && slides[newIndex]) {
                    const currentSlide = slides[newIndex].slide;
                    if (currentSlide) {
                        const img = currentSlide.querySelector('img');
                        if (img) {
                            gsap.from(img, {
                                scale: 1.1,
                                opacity: 0,
                                duration: 1,
                                ease: 'power3.inOut'
                            });
                        }
                    }
                }
            });
            
            splide.mount();
            
            // Parallax effect on slideshow
            gsap.to('#heroSlideshow', {
                y: -100,
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }
    }, 100);
}

/**
 * Parallax Effects
 */
function initParallaxEffects() {
    // Hero text parallax
    const heroInner = document.querySelector('.hero__inner');
    if (heroInner) {
        gsap.to(heroInner, {
            y: -60,
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });
    }
    
    // Work cards parallax
    gsap.utils.toArray('.work-card').forEach((card, index) => {
        gsap.to(card, {
            y: -30 * (index % 2 === 0 ? 1 : -1),
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 15%',
                scrub: true
            }
        });
    });
}

/**
 * Text Animations
 */
function initTextAnimations() {
    // Animate number tags with bounce
    gsap.utils.toArray('.strength-item__number').forEach((number, index) => {
        ScrollTrigger.create({
            trigger: number,
            start: 'top 80%',
            onEnter: () => {
                gsap.fromTo(number, 
                    { scale: 0, rotation: -180 },
                    { 
                        scale: 1, 
                        rotation: 0,
                        duration: 0.8,
                        ease: 'back.out(1.7)',
                        delay: index * 0.1
                    }
                );
            }
        });
    });
    
    // Hover animations for buttons
    gsap.utils.toArray('.button').forEach((button) => {
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
    
    // Work card hover effects
    gsap.utils.toArray('.work-card').forEach((card) => {
        const overlay = card.querySelector('.work-card__overlay');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(overlay, {
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(card.querySelector('img'), {
                scale: 1.1,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(overlay, {
                opacity: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(card.querySelector('img'), {
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });
}

// Floating animations for decorative elements
function initFloatingElements() {
    // Create floating circle elements (like reference site)
    const hero = document.querySelector('.hero');
    if (hero) {
        // Add floating decorative elements
        for (let i = 0; i < 3; i++) {
            const circle = document.createElement('div');
            circle.classList.add('floating-circle');
            circle.style.cssText = `
                position: absolute;
                width: ${60 + i * 40}px;
                height: ${60 + i * 40}px;
                border: 2px solid #0d0d0d;
                border-radius: 50%;
                pointer-events: none;
                opacity: 0.1;
                top: ${20 + i * 30}%;
                right: ${10 + i * 15}%;
            `;
            hero.appendChild(circle);
            
            // Animate floating
            gsap.to(circle, {
                y: 30 + i * 20,
                duration: 3 + i,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
                delay: i * 0.5
            });
        }
    }
}

// Initialize floating elements
initFloatingElements();


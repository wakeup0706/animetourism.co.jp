// About Us page specific interactions and animations
// Requires GSAP + ScrollTrigger (loaded via CDN in aboutus.html)

// Register plugin if available
if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
}

function initAboutNavbarDropdowns() {
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    dropdownItems.forEach(item => {
        const menu = item.querySelector('.dropdown-menu');
        if (!menu) return;

        let isHovering = false;
        const showMenu = () => {
            if (window.innerWidth <= 991) return;
            isHovering = true;
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
            menu.style.pointerEvents = 'auto';
        };
        const hideMenu = () => {
            isHovering = false;
            setTimeout(() => {
                if (!isHovering) {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                    menu.style.pointerEvents = 'none';
                }
            }, 120);
        };

        item.addEventListener('mouseenter', showMenu);
        item.addEventListener('mouseleave', hideMenu);
        item.addEventListener('focusin', showMenu);
        item.addEventListener('focusout', hideMenu);
    });

    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 991) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.pointerEvents = 'none';
            });
        }
    });
}

function initAboutAnimations() {
    if (!window.gsap || !window.ScrollTrigger) return;

    // Enhanced header reveal with split text effect
    const title = document.querySelector('.page-header__title');
    const subtitle = document.querySelector('.page-header__subtitle');
    
    if (title) {
        // Split title into words for letter animation
        const titleText = title.textContent;
        title.innerHTML = '';
        titleText.split(' ').forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.style.display = 'inline-block';
            wordSpan.style.marginRight = '0.3em';
            word.split('').forEach((char, charIndex) => {
                const charSpan = document.createElement('span');
                charSpan.textContent = char === ' ' ? '\u00A0' : char;
                charSpan.style.display = 'inline-block';
                charSpan.style.opacity = '0';
                charSpan.style.transform = 'translateY(20px) rotateX(-90deg)';
                wordSpan.appendChild(charSpan);
            });
            title.appendChild(wordSpan);
        });
        
        const titleChars = title.querySelectorAll('span span');
        gsap.to(titleChars, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.6,
            stagger: 0.03,
            delay: 0.2,
            ease: 'back.out(1.7)'
        });
    }
    
    if (subtitle) {
        gsap.set(subtitle, { opacity: 0, y: 20, scale: 0.95 });
        gsap.to(subtitle, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: 0.6,
            ease: 'power3.out'
        });
    }

    // Enhanced table animations - slide from sides with individual cell reveals
    const rows = document.querySelectorAll('.about-table tr');
    if (rows.length) {
        rows.forEach((row, index) => {
            const th = row.querySelector('th');
            const td = row.querySelector('td');
            
            // Set initial states - left slides from left, right from right
            if (th) {
                gsap.set(th, { opacity: 0, x: -30, scale: 0.95 });
            }
            if (td) {
                gsap.set(td, { opacity: 0, x: 30, scale: 0.95 });
            }
            
            // Animate with stagger
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: row,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
            
            if (th) {
                tl.to(th, {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: 'power3.out'
                }, index * 0.05);
            }
            if (td) {
                tl.to(td, {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: 'power3.out'
                }, index * 0.05 + 0.1);
            }
        });
    }

    // Accent circles animations (positioned relative to table)
    const red = document.querySelector('.aboutus-decor__circle--red');
    const yellow = document.querySelector('.aboutus-decor__circle--yellow');
    if (red && yellow) {
        // Set initial transforms (red is vertically centered, yellow is at top)
        gsap.set(red, { yPercent: -50 });
        gsap.set(yellow, { y: 0 });
        
        // Create bounce animation
        const bounceTl = gsap.timeline({ paused: true });
        bounceTl.to(red, { 
            y: -14, 
            duration: 0.3, 
            ease: 'power2.out'
        })
        .to(yellow, { 
            y: -14, 
            duration: 0.3, 
            ease: 'power2.out'
        }, 0)
        .to(red, { 
            y: 10, 
            duration: 0.25, 
            ease: 'power2.in'
        })
        .to(yellow, { 
            y: 10, 
            duration: 0.25, 
            ease: 'power2.in'
        }, '-=0.25')
        .to(red, { 
            y: -6, 
            duration: 0.2, 
            ease: 'power2.out'
        })
        .to(yellow, { 
            y: -6, 
            duration: 0.2, 
            ease: 'power2.out'
        }, '-=0.2')
        .to(red, { 
            y: 0, 
            duration: 0.15, 
            ease: 'power2.inOut'
        })
        .to(yellow, { 
            y: 0, 
            duration: 0.15, 
            ease: 'power2.inOut'
        }, '-=0.15');
        ScrollTrigger.create({
            trigger: '.about-content',
            start: 'top 85%',
            onEnter: () => bounceTl.restart(),
            onEnterBack: () => bounceTl.restart()
        });
    }

    // Enhanced row hover effects with scale and shadow
    document.querySelectorAll('.about-table tr').forEach(row => {
        const th = row.querySelector('th');
        const td = row.querySelector('td');
        
        row.addEventListener('mouseenter', () => {
            gsap.to(row, { 
                scale: 1.01, 
                y: -3, 
                backgroundColor: 'rgba(0,0,0,0.03)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                duration: 0.3, 
                ease: 'power2.out' 
            });
            if (th) gsap.to(th, { scale: 1.02, duration: 0.3, ease: 'power2.out' });
            if (td) gsap.to(td, { scale: 1.02, duration: 0.3, ease: 'power2.out' });
        });
        row.addEventListener('mouseleave', () => {
            gsap.to(row, { 
                scale: 1, 
                y: 0, 
                backgroundColor: 'transparent',
                boxShadow: '0 0 0 rgba(0,0,0,0)',
                duration: 0.3, 
                ease: 'power2.out' 
            });
            if (th) gsap.to(th, { scale: 1, duration: 0.3, ease: 'power2.out' });
            if (td) gsap.to(td, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    });
    
    // Animate number counter for capital amount
    const capitalCell = Array.from(document.querySelectorAll('.about-table td')).find(td => 
        td.textContent.includes('円') || td.textContent.includes('1,000,000')
    );
    if (capitalCell) {
        const originalText = capitalCell.textContent;
        const match = originalText.match(/([\d,]+)/);
        if (match) {
            const targetValue = parseInt(match[1].replace(/,/g, ''));
            const prefix = originalText.substring(0, originalText.indexOf(match[1]));
            const suffix = originalText.substring(originalText.indexOf(match[1]) + match[1].length);
            
            ScrollTrigger.create({
                trigger: capitalCell.closest('tr'),
                start: 'top 85%',
                onEnter: () => {
                    gsap.to({ value: 0 }, {
                        value: targetValue,
                        duration: 1.5,
                        ease: 'power2.out',
                        onUpdate: function() {
                            const current = Math.floor(this.targets()[0].value);
                            const formatted = current.toLocaleString('ja-JP');
                            capitalCell.textContent = prefix + formatted + suffix;
                        }
                    });
                }
            });
        }
    }
    
    // Enhanced link hover effects with magnetic effect
    document.querySelectorAll('.about-table a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, { 
                scale: 1.05, 
                x: 2,
                color: '#004999',
                duration: 0.2, 
                ease: 'power2.out' 
            });
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(link, { 
                scale: 1, 
                x: 0,
                color: '#0066cc',
                duration: 0.2, 
                ease: 'power2.out' 
            });
        });
    });
    
    // Smooth page fade-in
    gsap.from('main', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.1
    });
    
    // Subtle parallax effect for header on scroll
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) {
        gsap.to(pageHeader, {
            y: -30,
            opacity: 0.8,
            scrollTrigger: {
                trigger: pageHeader,
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });
    }
    
    // Floating animation for circles (continuous subtle movement)
    const floatingRed = document.querySelector('.aboutus-decor__circle--red');
    const floatingYellow = document.querySelector('.aboutus-decor__circle--yellow');
    if (floatingRed && floatingYellow) {
        gsap.to([floatingRed, floatingYellow], {
            y: '+=10',
            duration: 3,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            stagger: 0.5
        });
    }

    // Smooth show after load in case fonts/layout shift
    window.addEventListener('load', () => {
        setTimeout(() => ScrollTrigger.refresh(), 150);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initAboutNavbarDropdowns();
    initAboutAnimations();
});



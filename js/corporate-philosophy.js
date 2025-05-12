// corporate-philosophy.js

document.addEventListener('DOMContentLoaded', function() {
    // パララックス効果の実装
    function handleParallax() {
        const layers = document.querySelectorAll('.parallax-layer');
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset;
            
            layers.forEach(layer => {
                const speed = layer.getAttribute('data-speed');
                const yPos = -(scrollTop * speed);
                layer.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    // スクロールアニメーション
    function setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.value-card, .mission-box, .vision-box, .highlight-box');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    // バリューカードの場合は少し遅延を加える
                    if (entry.target.classList.contains('value-card')) {
                        const delay = Array.from(document.querySelectorAll('.value-card')).indexOf(entry.target) * 0.1;
                        entry.target.style.animationDelay = `${delay}s`;
                    }
                }
            });
        }, {
            threshold: 0.2
        });
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    // タイプライターエフェクト
    function setupTypewriterEffect() {
        const textElement = document.querySelector('.philosophy-hero__title');
        if (!textElement) return;
        
        const text = textElement.textContent;
        textElement.textContent = '';
        textElement.classList.add('typewriter');
        
        let charIndex = 0;
        const typeInterval = setInterval(() => {
            if (charIndex < text.length) {
                textElement.textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typeInterval);
                // タイピングが終わったらアンダーラインアニメーションを開始
                textElement.classList.add('typing-done');
            }
        }, 50);
    }
    
    // ハイライトアニメーション（ユーザーファーストとサプライズの強調）
    function setupHighlightAnimation() {
        const userFirstCard = document.getElementById('user-first');
        const surpriseCard = document.getElementById('surprise');
        const japanAnimeMapsSection = document.querySelector('.highlight-box');
        
        // 特別なアニメーションを追加
        if (userFirstCard) {
            userFirstCard.classList.add('highlight-card');
            setInterval(() => {
                userFirstCard.classList.toggle('pulse');
            }, 2000);
        }
        
        if (surpriseCard) {
            surpriseCard.classList.add('highlight-card');
            setInterval(() => {
                surpriseCard.classList.toggle('pulse');
            }, 2500);
        }
        
        if (japanAnimeMapsSection) {
            // よりエレガントなアニメーション効果
            japanAnimeMapsSection.addEventListener('mouseover', () => {
                japanAnimeMapsSection.classList.add('highlight-active');
            });
            
            japanAnimeMapsSection.addEventListener('mouseout', () => {
                japanAnimeMapsSection.classList.remove('highlight-active');
            });
        }
    }
    
    // 3Dカードホバーエフェクト
    function setup3DCardEffect() {
        const cards = document.querySelectorAll('.value-card__inner');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const angleX = (y - centerY) / 20;
                const angleY = (centerX - x) / 20;
                
                card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateX(0) rotateY(0)';
            });
        });
    }
    
    // 動的なバックグラウンドエフェクト
    function setupDynamicBackground() {
        const philosophyHero = document.querySelector('.philosophy-hero');
        if (!philosophyHero) return;
        
        // 波紋エフェクトを追加
        philosophyHero.addEventListener('mousemove', e => {
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            ripple.style.left = `${e.pageX}px`;
            ripple.style.top = `${e.pageY}px`;
            philosophyHero.appendChild(ripple);
            
            setTimeout(() => {
                philosophyHero.removeChild(ripple);
            }, 1500);
        });
    }
    
    // 特にハイライトしたい要素の浮き上がりアニメーション
    function setupFloatingEffect() {
        const userFirstCard = document.getElementById('user-first');
        const surpriseCard = document.getElementById('surprise');
        const japanAnimeMapsSection = document.querySelector('.highlight-box');
        
        // 浮き上がりアニメーションのCSS変数を設定
        if (userFirstCard) {
            userFirstCard.style.setProperty('--float-y', '-10px');
            userFirstCard.style.setProperty('--float-duration', '3s');
        }
        
        if (surpriseCard) {
            surpriseCard.style.setProperty('--float-y', '-8px');
            surpriseCard.style.setProperty('--float-duration', '4s');
        }
        
        if (japanAnimeMapsSection) {
            japanAnimeMapsSection.style.setProperty('--float-y', '-5px');
            japanAnimeMapsSection.style.setProperty('--float-duration', '4.5s');
        }
    }
    
    // フェードインアニメーション
    function setupFadeInAnimations() {
        const sections = document.querySelectorAll('section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, {
            threshold: 0.1
        });
        
        sections.forEach(section => {
            section.classList.add('fade-section');
            observer.observe(section);
        });
    }
    
    // スクロール位置に応じたコンテンツの表示
    function setupScrollBasedReveal() {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            const windowHeight = window.innerHeight;
            
            const revealElements = document.querySelectorAll('.reveal-on-scroll');
            
            revealElements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top + scrollPosition;
                const revealPosition = elementPosition - windowHeight + 100;
                
                if (scrollPosition >= revealPosition) {
                    element.classList.add('revealed');
                }
            });
        });
        
        // 初期クラスを設定
        document.querySelectorAll('.section-title, .philosophy-hero__title, .value-card, .mission-box, .vision-box, .flagship-product__title, .flagship-product__description').forEach(el => {
            el.classList.add('reveal-on-scroll');
        });
    }
    
    // 全ての機能を初期化
    function initializeAll() {
        handleParallax();
        setupScrollAnimations();
        setupTypewriterEffect();
        setupHighlightAnimation();
        setup3DCardEffect();
        setupDynamicBackground();
        setupFloatingEffect();
        setupFadeInAnimations();
        setupScrollBasedReveal();
        
        // 追加のCSS変数をページへ適用
        document.body.style.setProperty('--primary-color-light', '#ff7e5f');
        document.body.style.setProperty('--primary-color-dark', '#E4405F');
        
        // ページ全体に追加のアニメーションクラスを適用
        document.body.classList.add('animated-page');
    }
    
    // 全ての機能を初期化
    initializeAll();
    
    // 追加のCSSを動的に挿入
    const style = document.createElement('style');
    style.textContent = `
        .animated-page {
            scroll-behavior: smooth;
        }
        
        .fade-section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-section.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .highlight-card {
            position: relative;
            z-index: 3;
            box-shadow: 0 10px 30px rgba(228, 64, 95, 0.2);
        }
        
        .highlight-card.pulse {
            animation: card-pulse 2s infinite;
        }
        
        @keyframes card-pulse {
            0% { box-shadow: 0 10px 30px rgba(228, 64, 95, 0.2); }
            50% { box-shadow: 0 10px 40px rgba(228, 64, 95, 0.4); }
            100% { box-shadow: 0 10px 30px rgba(228, 64, 95, 0.2); }
        }
        
        .typewriter {
            overflow: hidden;
            white-space: nowrap;
            border-right: 3px solid var(--primary-color);
            animation: cursor-blink 1s step-end infinite;
        }
        
        @keyframes cursor-blink {
            from, to { border-color: transparent; }
            50% { border-color: var(--primary-color); }
        }
        
        .typing-done {
            border-right: none;
        }
        
        .ripple {
            position: absolute;
            width: 10px;
            height: 10px;
            background: rgba(228, 64, 95, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: ripple 1.5s linear forwards;
            pointer-events: none;
        }
        
        @keyframes ripple {
            0% { width: 10px; height: 10px; opacity: 0.8; }
            100% { width: 300px; height: 300px; opacity: 0; }
        }
        
        .highlight-box.highlight-active {
            background: linear-gradient(135deg, rgba(255, 126, 95, 0.2), rgba(254, 180, 123, 0.2));
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(228, 64, 95, 0.25);
        }
        
        .value-card, .mission-box, .vision-box, .highlight-box {
            animation: float var(--float-duration, 4s) ease-in-out infinite alternate;
        }
        
        @keyframes float {
            0% { transform: translateY(0); }
            100% { transform: translateY(var(--float-y, -5px)); }
        }
        
        .reveal-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .reveal-on-scroll.revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    
    document.head.appendChild(style);
});
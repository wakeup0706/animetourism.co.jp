// 受託開発ページ用JavaScriptファイル
document.addEventListener('DOMContentLoaded', function() {
    // スクロールアニメーション
    initScrollAnimations();
    
    // よくある質問のアコーディオン機能
    initFaqAccordion();
    
    // 実績スライダー
    initWorksSlider();
    
    // スクロールによるヘッダー変更
    initScrollHeader();
});

/**
 * スクロールアニメーションの初期化
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.cd-card, .cd-strength-item, .cd-flow-step, .cd-testimonial');
    
    // 監視設定
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    // 交差監視
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // 各要素を監視対象に
    animatedElements.forEach(element => {
        element.classList.add('will-animate');
        observer.observe(element);
    });
}

/**
 * FAQアコーディオン機能の初期化
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.cd-faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.cd-faq-item__question');
        
        question.addEventListener('click', () => {
            // 現在のアクティブ状態を取得
            const isActive = item.classList.contains('active');
            
            // すべてのアイテムからactiveクラスを削除
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // クリックしたアイテムがアクティブでなければactiveクラスを追加
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

/**
 * 実績スライダーの初期化
 */
function initWorksSlider() {
    const track = document.getElementById('worksTrack');
    const prevButton = document.getElementById('worksPrev');
    const nextButton = document.getElementById('worksNext');
    const dotsContainer = document.getElementById('worksDots');
    
    // スライド数がなければ終了
    if (!track) return;
    
    const slides = track.querySelectorAll('.cd-work-item');
    const slideCount = slides.length;
    let currentIndex = 0;
    
    // スライダードットを生成
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('cd-works__dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    // 前のスライドへ
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    });
    
    // 次のスライドへ
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    });
    
    // 特定のスライドへ移動
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    // スライダー更新
    function updateSlider() {
        // トラックの位置を更新
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // ドットのアクティブ状態を更新
        const dots = dotsContainer.querySelectorAll('.cd-works__dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }
    
    // 自動スライド
    let autoSlideInterval;
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlider();
        }, 5000);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // マウスオーバーで自動スライドを停止
    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);
    
    // 初期化時に自動スライドを開始
    startAutoSlide();
}

/**
 * スクロールによるヘッダー変更の初期化
 */
function initScrollHeader() {
    const header = document.querySelector('.header');
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 初期状態のチェック
    if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
    }
}

/**
 * スムーススクロールの初期化
 * ページ内リンクをクリックした際にスムーズにスクロールする
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// 初期化時にスムーススクロールも設定
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScroll();
});
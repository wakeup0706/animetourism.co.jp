document.addEventListener('DOMContentLoaded', function() {
    // ハンバーガーメニューの制御
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    document.querySelector('.header__inner').appendChild(hamburger);

    const nav = document.querySelector('.header__nav');
    const navItems = document.querySelectorAll('.header__nav-list > li');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // モバイルメニューの制御
    if (window.innerWidth <= 768) {
        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                if (e.target.parentElement === this) {
                    e.preventDefault();
                    const wasActive = this.classList.contains('active');
                    
                    // 他のすべての項目を非アクティブにする
                    navItems.forEach(navItem => {
                        navItem.classList.remove('active');
                    });

                    // クリックされた項目のアクティブ状態を切り替える
                    if (!wasActive) {
                        this.classList.add('active');
                    }
                }
            });
        });
    }

    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.parentElement.classList.contains('dropdown-menu')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // モバイルメニューが開いている場合は閉じる
                    hamburger.classList.remove('active');
                    nav.classList.remove('active');
                    navItems.forEach(item => item.classList.remove('active'));
                }
            }
        });
    });

    // スクロール時のヘッダー制御
    let lastScrollPosition = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const currentScrollPosition = window.pageYOffset;
        
        if (currentScrollPosition > lastScrollPosition) {
            // 下スクロール時
            header.style.transform = 'translateY(-100%)';
        } else {
            // 上スクロール時
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollPosition = currentScrollPosition;
    });

    // フォームのバリデーション
    const form = document.querySelector('.contact__form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = form.querySelector('#name').value;
            const email = form.querySelector('#email').value;
            const message = form.querySelector('#message').value;
            
            if (name && email && message) {
                // ここに実際の送信処理を追加
                alert('お問い合わせありがとうございます。\n内容を確認次第、担当者よりご連絡させていただきます。');
                form.reset();
            } else {
                alert('全ての項目を入力してください。');
            }
        });
    }
});

// スライドショーの設定と実装
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    
    // スライド用の画像配列
    const slides = [
        'apps_icon.png',
        'test_pic1.jpeg',
        'test_pic2.jpg'
    ];
    
    // スライドのHTML構造を作成
    slides.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('hero__slide');
        if (index === 0) slideDiv.classList.add('active');
        slideDiv.style.background = `url(${slide}) center/cover`;
        hero.insertBefore(slideDiv, hero.firstChild);
    });
    
    // ナビゲーションドットの作成
    const nav = document.createElement('div');
    nav.classList.add('hero__nav');
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('hero__nav-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        nav.appendChild(dot);
    });
    hero.appendChild(nav);
    
    let currentSlide = 0;
    const slideElements = document.querySelectorAll('.hero__slide');
    const dots = document.querySelectorAll('.hero__nav-dot');
    
    function goToSlide(n) {
        slideElements[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = n;
        slideElements[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }
    
    // 5秒ごとに自動でスライド切り替え
    setInterval(nextSlide, 3000);
});
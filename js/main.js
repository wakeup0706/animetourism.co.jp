/**
 * AnimeTourism ヒーロースライドショー
 * 3秒ごとに自動で切り替わるスライドショー機能
 */

// ヒーロースライドショーの設定と実装
function setupHeroSlideshow() {
    const heroSlideshow = document.getElementById('heroSlideshow');
    
    // スライドの内容を設定
    const slides = [
        {
            image: 'img/test_pic1.jpeg',
            caption: 'アニメの聖地巡礼を楽しもう'
        },
        {
            image: 'img/test_pic1.jpeg',
            caption: '日本全国のアニメスポットを探索'
        },
        {
            image: 'img/test_pic1.jpeg',
            caption: '地域と文化をつなぐ新しい体験'
        },
        {
            image: 'img/test_pic1.jpeg',
            caption: 'JapanAnimeMapsアプリで簡単に検索'
        },
        {
            image: 'img/test_pic1.jpeg',
            caption: 'お気に入りの作品の舞台を訪れよう'
        }
    ];
    
    // スライドショーの構造を作成
    const slideshowWrapper = document.createElement('div');
    slideshowWrapper.className = 'slideshow-wrapper';
    
    // 各スライドを作成
    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = `slide ${index === 0 ? 'active' : index === 1 ? 'next' : 'hidden'}`;
        
        const img = document.createElement('img');
        img.src = slide.image;
        img.alt = slide.caption;
        
        const caption = document.createElement('div');
        caption.className = 'slide-caption';
        caption.textContent = slide.caption;
        
        slideElement.appendChild(img);
        slideElement.appendChild(caption);
        slideshowWrapper.appendChild(slideElement);
    });
    
    // コントロールドットを作成
    const controls = document.createElement('div');
    controls.className = 'slideshow-controls';
    
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `control-dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.index = index;
        controls.appendChild(dot);
        
        dot.addEventListener('click', function() {
            goToSlide(parseInt(this.dataset.index));
        });
    });
    
    // 前後のナビゲーションボタンを追加
    const prevButton = document.createElement('div');
    prevButton.className = 'slide-nav-button slide-nav-prev';
    prevButton.innerHTML = '<span class="nav-arrow nav-arrow-prev"></span>';
    
    const nextButton = document.createElement('div');
    nextButton.className = 'slide-nav-button slide-nav-next';
    nextButton.innerHTML = '<span class="nav-arrow nav-arrow-next"></span>';
    
    prevButton.addEventListener('click', function() {
        const activeSlide = document.querySelector('.slide.active');
        const currentIndex = Array.from(activeSlide.parentNode.children).indexOf(activeSlide);
        const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        goToSlide(newIndex);
    });
    
    nextButton.addEventListener('click', function() {
        const activeSlide = document.querySelector('.slide.active');
        const currentIndex = Array.from(activeSlide.parentNode.children).indexOf(activeSlide);
        const newIndex = (currentIndex + 1) % slides.length;
        goToSlide(newIndex);
    });
    
    // スライドショーに要素を追加
    heroSlideshow.appendChild(slideshowWrapper);
    heroSlideshow.appendChild(controls);
    heroSlideshow.appendChild(prevButton);
    heroSlideshow.appendChild(nextButton);
    
    // 自動スライド切り替えのためのタイマー
    let slideInterval = setInterval(function() {
        const activeSlide = document.querySelector('.slide.active');
        const currentIndex = Array.from(activeSlide.parentNode.children).indexOf(activeSlide);
        const newIndex = (currentIndex + 1) % slides.length;
        goToSlide(newIndex);
    }, 3000); // 3秒ごとに切り替え
    
    // スライドショーにマウスオーバー時に自動スライドを停止
    heroSlideshow.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });
    
    // スライドショーからマウスが離れたときに自動スライドを再開
    heroSlideshow.addEventListener('mouseleave', function() {
        slideInterval = setInterval(function() {
            const activeSlide = document.querySelector('.slide.active');
            const currentIndex = Array.from(activeSlide.parentNode.children).indexOf(activeSlide);
            const newIndex = (currentIndex + 1) % slides.length;
            goToSlide(newIndex);
        }, 3000);
    });
    
    // 特定のスライドに移動する関数
    function goToSlide(index) {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.control-dot');
        
        // すべてのスライドとドットからアクティブクラスを削除
        slides.forEach(slide => slide.className = 'slide hidden');
        dots.forEach(dot => dot.classList.remove('active'));
        
        // 新しいアクティブスライドを設定
        slides[index].className = 'slide active';
        
        // 前後のスライドを設定
        const prevIndex = index === 0 ? slides.length - 1 : index - 1;
        const nextIndex = (index + 1) % slides.length;
        
        slides[prevIndex].className = 'slide prev';
        slides[nextIndex].className = 'slide next';
        
        // アクティブドットを更新
        dots[index].classList.add('active');
    }
}

// スライドショー初期化とイベントリスナー設定
document.addEventListener('DOMContentLoaded', function() {
    // ヘッダーのスクロール効果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ドロップダウンメニューの処理（既存の実装をそのまま使用）
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    
    dropdownItems.forEach(item => {
        const navLink = item.querySelector('.header__nav-link');
        const dropdownMenu = item.querySelector('.dropdown-menu');
        let timeoutId;
        
        item.addEventListener('mouseenter', function() {
            clearTimeout(timeoutId);
            
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                    menu.style.pointerEvents = 'none';
                }
            });
            
            if (dropdownMenu) {
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.visibility = 'visible';
                dropdownMenu.style.pointerEvents = 'auto';
                dropdownMenu.style.transform = 'translateX(-50%) translateY(0)';
            }
        });
        
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
        
        if (navLink && dropdownMenu) {
            navLink.addEventListener('click', function(e) {
                if (window.innerWidth < 992 || dropdownMenu.style.visibility !== 'visible') {
                    e.preventDefault();
                    
                    if (dropdownMenu.style.visibility === 'visible') {
                        dropdownMenu.style.opacity = '0';
                        dropdownMenu.style.visibility = 'hidden';
                        dropdownMenu.style.pointerEvents = 'none';
                    } else {
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
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.has-dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.pointerEvents = 'none';
            });
        }
    });
    
    window.addEventListener('scroll', function() {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
            menu.style.pointerEvents = 'none';
        });
    });

    // ヒーロースライドショーの初期化
    const heroSlideshow = document.getElementById('heroSlideshow');
    if (heroSlideshow) {
        setupHeroSlideshow();
    }

    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // スクロールトップボタン
    const scrollTopButton = document.createElement('button');
    scrollTopButton.classList.add('scroll-to-top');
    scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopButton);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });

    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Workカードのリンク設定
    document.querySelectorAll('.work-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.work-card__title').textContent;
            window.location.href = `work-details.html?title=${encodeURIComponent(title)}`;
        });
    });

    // ページ読み込みアニメーション
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(function() {
            loader.classList.add('hidden');
            setTimeout(function() {
                loader.style.display = 'none';
            }, 500);
        }, 500);
    }
});
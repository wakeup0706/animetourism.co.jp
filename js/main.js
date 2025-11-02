/**
 * AnimeTourism メインJavaScriptファイル
 * ナビゲーション、スライドショー、レスポンシブ対応機能
 */

// ヒーロースライドショーの設定と実装
function setupHeroSlideshow(slideshowId) {
    const heroSlideshow = document.getElementById(slideshowId);
    if (!heroSlideshow) return; // スライドショー要素がなければ終了

    //現在のページを識別する
    const currentPage = document.body.id || 'home';

    //ページごとのスライドデータを定義
    const slidesData = {
        'index': [
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
        ],
        'regional-revitalization': [
            {
                image: 'img/moesami.png',
                caption: '地域活性化イベント'
            },
            {
                image: 'img/test_pic1.jpeg',
                caption: 'アプリを活用して地域活性化'
            },
            {
                image: 'img/coding.jpg',
                caption: '地域と文化をつなぐ新しい体験を創造'
            },
            {
                image: 'img/test_pic1.jpeg',
                caption: 'JapanAnimeMapsアプリで簡単に検索'
            },
            {
                image: 'img/test_pic1.jpeg',
                caption: 'お気に入りの作品の舞台を訪れよう'
            }
        ],
        'apps': [
            {
                image: 'img/test_pic1.jpeg',
                caption: 'アニメの世界へ冒険に出かけよう'
            },
            {
                image: 'img/test_pic1.jpeg',
                caption: '540+聖地スポットを探索'
            },
            {
                image: 'img/test_pic1.jpeg',
                caption: 'AIルート提案で最適な巡礼プラン'
            },
            {
                image: 'img/test_pic1.jpeg',
                caption: 'コミュニティで思い出を共有'
            },
            {
                image: 'img/test_pic1.jpeg',
                caption: 'JapanAnimeMapsで聖地巡礼を始めよう'
            }
        ]
    };
    
    // ページに応じたスライドデータを選択
    let slides;
    if (slidesData[currentPage]) {
        slides = slidesData[currentPage]; // ページごとのデータを使用
    } else {
        slides = slidesData['index']; // デフォルトはindexページのデータ
    }
    
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

// モバイルナビゲーションの設定
function setupMobileNavigation() {
    // モバイルトグルボタン作成（ハンバーガーメニュー）
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-nav-toggle';
    mobileToggle.setAttribute('aria-label', 'メニューを開閉');
    mobileToggle.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;
    
    // オーバーレイ作成
    const navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    
    // DOM要素に追加
    const headerInner = document.querySelector('.header__inner');
    headerInner.appendChild(mobileToggle);
    document.body.appendChild(navOverlay);
    
    const nav = document.querySelector('.header__nav');
    const dropdowns = document.querySelectorAll('.has-dropdown');
    
    // モバイルメニューのトグル（開閉）
    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // オーバーレイクリックでメニューを閉じる
    navOverlay.addEventListener('click', function() {
        closeMobileMenu();
    });
    
    // モバイルビューでのドロップダウン処理
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.header__nav-link');
        
        // モバイル: クリックでドロップダウンをトグル
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                
                // 他のすべてのドロップダウンを閉じる
                const isActive = dropdown.classList.contains('active');
                
                dropdowns.forEach(other => {
                    other.classList.remove('active');
                });
                
                // クリックされたドロップダウンをトグル
                if (!isActive) {
                    dropdown.classList.add('active');
                }
            }
        });
    });
    
    // メニューを閉じる関数
    function closeMobileMenu() {
        mobileToggle.classList.remove('active');
        nav.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // すべてのドロップダウンを閉じる
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
    
    // ウィンドウリサイズ時の処理
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            closeMobileMenu();
        }
    });
    
    // ESCキーでメニューを閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// DOMコンテンツロード後の処理
document.addEventListener('DOMContentLoaded', function() {
    // モバイルナビゲーションセットアップ
    setupMobileNavigation();
    
    // ヘッダーのスクロール効果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // デスクトップ用ドロップダウンメニューの処理
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    
    dropdownItems.forEach(item => {
        const navLink = item.querySelector('.header__nav-link');
        const dropdownMenu = item.querySelector('.dropdown-menu');
        let timeoutId;
        
        // PC表示時のみホバー処理を適用
        if (window.innerWidth > 991) {
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
        }
        
        // PCではクリック動作、モバイルではタップ動作
        if (navLink && dropdownMenu) {
            navLink.addEventListener('click', function(e) {
                // モバイルでの処理は setupMobileNavigation で対応済み
                if (window.innerWidth > 991) {
                    if (dropdownMenu.style.visibility !== 'visible') {
                        e.preventDefault();
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
    
    // ドロップダウン以外をクリックした場合に閉じる（PC表示のみ）
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.has-dropdown') && window.innerWidth > 991) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.pointerEvents = 'none';
            });
        }
    });
    
    // スクロール時にドロップダウンを閉じる（PC表示のみ）
    window.addEventListener('scroll', function() {
        if (window.innerWidth > 991) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.pointerEvents = 'none';
            });
        }
    });

    // ヒーロースライドショーの初期化
    const heroSlideshow = document.getElementById('heroSlideshow');
    const heroSlideshowRegional = document.getElementById('heroSlideshowRegional');
    
    if (heroSlideshow) {
        setupHeroSlideshow('heroSlideshow');
    }
    
    if (heroSlideshowRegional) {
        setupHeroSlideshow('heroSlideshowRegional');
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
                    
                    // モバイルメニューが開いている場合は閉じる
                    const mobileNav = document.querySelector('.header__nav');
                    const mobileToggle = document.querySelector('.mobile-nav-toggle');
                    const navOverlay = document.querySelector('.nav-overlay');
                    
                    if (mobileNav && mobileNav.classList.contains('active')) {
                        mobileNav.classList.remove('active');
                        if (mobileToggle) mobileToggle.classList.remove('active');
                        if (navOverlay) navOverlay.classList.remove('active');
                        document.body.style.overflow = '';
                    }
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

    // スクロールリビール（IntersectionObserver） - EXTREMELY PROMINENT EFFECTS (10X MORE DRAMATIC)
    try {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const revealTargets = [];

        // 既存セクションやカードなどを対象にする（コンテンツは変更しない）
        document.querySelectorAll('.section__title, .strengths__title, .strength-item, .works__title, .work-card, .voices__title, .voice-card').forEach(el => {
            el.classList.add('reveal');
            revealTargets.push(el);
        });
        
        // ヒーロー内の主要要素
        const heroTitle = document.querySelector('.hero__title');
        const heroTexts = document.querySelectorAll('.hero__text');
        const heroStats = document.querySelector('.hero__stats');
        
        if (heroTitle) {
            heroTitle.classList.add('reveal');
            revealTargets.push(heroTitle);
        }
        heroTexts.forEach(el => {
            el.classList.add('reveal');
            revealTargets.push(el);
        });
        if (heroStats) {
            heroStats.classList.add('reveal');
            revealTargets.push(heroStats);
        }

        if (!prefersReduced && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('reveal--active');
                        }, 100);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' }); // Very aggressive trigger

            revealTargets.forEach(target => observer.observe(target));

            // 初回ロード時、ビューポート内のヒーロー要素は即時に有効化（遅延付き - EXTREME DELAYS）
            setTimeout(() => {
                if (heroTitle) {
                    heroTitle.classList.remove('reveal');
                    setTimeout(() => {
                        heroTitle.classList.add('reveal');
                        setTimeout(() => heroTitle.classList.add('reveal--active'), 50);
                    }, 50);
                }
            }, 300);
            setTimeout(() => {
                heroTexts.forEach((el, idx) => {
                    setTimeout(() => {
                        el.classList.remove('reveal');
                        setTimeout(() => {
                            el.classList.add('reveal');
                            setTimeout(() => el.classList.add('reveal--active'), 50);
                        }, 50);
                    }, idx * 300);
                });
            }, 800);
            setTimeout(() => {
                if (heroStats) {
                    heroStats.classList.remove('reveal');
                    setTimeout(() => {
                        heroStats.classList.add('reveal');
                        setTimeout(() => heroStats.classList.add('reveal--active'), 50);
                    }, 50);
                }
            }, 1500);
        } else {
            // 低モーション設定時は即時表示
            revealTargets.forEach(el => el.classList.add('reveal--active'));
        }
    } catch (e) { 
        console.error('Reveal animation error:', e);
    }

    // パララックス効果（ヒーローの背景オーバーレイとスライドショーの ULTRA STRONG 移動）
    try {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReduced) {
            const overlay = document.querySelector('.hero__overlay');
            const slideshow = document.querySelector('#heroSlideshow');
            const heroInner = document.querySelector('.hero__inner');
            
            const onScroll = () => {
                const y = window.scrollY || window.pageYOffset;
                const heroHeight = document.querySelector('.hero')?.offsetHeight || 700;
                const scrollProgress = Math.min(1, y / heroHeight);
                
                // Parallax effect without rotation
                const translateYOverlay = scrollProgress * 100;
                const translateYSlideshow = scrollProgress * 50;
                const translateYText = scrollProgress * 30;
                
                if (overlay) overlay.style.transform = `translateY(${translateYOverlay}px)`;
                if (slideshow) slideshow.style.transform = `translateY(${translateYSlideshow}px)`;
                if (heroInner) heroInner.style.transform = `translateY(${translateYText}px)`;
            };
            
            onScroll();
            window.addEventListener('scroll', onScroll, { passive: true });
            // Also trigger on resize
            window.addEventListener('resize', onScroll, { passive: true });
        }
    } catch (e) { 
        console.error('Parallax error:', e);
    }
});

// フォームのバリデーション
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let isValid = true;
            
            // 必須項目のチェック
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(function(field) {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('input-error');
                } else {
                    field.classList.remove('input-error');
                }
            });
            
            // メールアドレスの形式チェック
            const emailField = contactForm.querySelector('#email');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.classList.add('input-error');
                }
            }
            
            if (!isValid) {
                event.preventDefault();
                alert('入力内容に不備があります。必須項目をすべて入力してください。');
            }
        });
    }
});

/**
 * Scroll-triggered animations inspired by Minna no Ginko
 * - Fade-in background text
 * - Black overlay transitions
 * - Circle reveal animations
 */
document.addEventListener('DOMContentLoaded', function() {
    const strengthsSection = document.querySelector('.strengths');
    const worksSection = document.querySelector('.works');
    const voicesSection = document.querySelector('.voices');
    
    if (!strengthsSection && !worksSection && !voicesSection) return;
    
    // Debounce function for better performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Main scroll handler
    function handleScrollAnimations() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Strengths section - Text fade in
        if (strengthsSection) {
            const strengthsRect = strengthsSection.getBoundingClientRect();
            const strengthsTop = strengthsRect.top + scrollY;
            const strengthsProgress = (scrollY - strengthsTop + windowHeight) / (windowHeight + strengthsRect.height);
            
            if (strengthsProgress > 0.3 && strengthsProgress < 1) {
                strengthsSection.classList.add('text-visible');
            } else {
                strengthsSection.classList.remove('text-visible');
            }
            
            // Dark mode transition
            if (strengthsProgress > 0.6 && strengthsProgress < 1.2) {
                strengthsSection.classList.add('dark-mode');
            } else {
                strengthsSection.classList.remove('dark-mode');
            }
        }
        
        // Works section - Black overlay and text reveal
        if (worksSection) {
            const worksRect = worksSection.getBoundingClientRect();
            const worksTop = worksRect.top + scrollY;
            const worksProgress = (scrollY - worksTop + windowHeight) / (windowHeight + worksRect.height);
            
            // Text reveal
            if (worksProgress > 0.2 && worksProgress < 1) {
                worksSection.classList.add('text-visible');
            } else {
                worksSection.classList.remove('text-visible');
            }
            
            // Black overlay appears
            if (worksProgress > 0.4 && worksProgress < 1.1) {
                worksSection.classList.add('dark-section');
            } else {
                worksSection.classList.remove('dark-section');
            }
        }
        
        // Voices section - Circle reveal
        if (voicesSection) {
            const voicesRect = voicesSection.getBoundingClientRect();
            const voicesTop = voicesRect.top + scrollY;
            const voicesProgress = (scrollY - voicesTop + windowHeight) / (windowHeight + voicesRect.height);
            
            // Circle expands
            if (voicesProgress > 0.3 && voicesProgress < 1) {
                voicesSection.classList.add('circle-reveal');
            } else {
                voicesSection.classList.remove('circle-reveal');
            }
            
            // Switch to dark text only after the circle covers most of the section
            if (voicesProgress > 0.6 && voicesProgress < 1.2) {
                voicesSection.classList.add('voices-dark');
            } else {
                voicesSection.classList.remove('voices-dark');
            }

            // Text fade in
            if (voicesProgress > 0.2 && voicesProgress < 1) {
                voicesSection.classList.add('text-visible');
            } else {
                voicesSection.classList.remove('text-visible');
            }
        }
    }
    
    // Optimized scroll listener with debounce
    const debouncedScroll = debounce(handleScrollAnimations, 10);
    
    window.addEventListener('scroll', debouncedScroll, { passive: true });
    
    // Initial check on page load
    setTimeout(handleScrollAnimations, 100);
    
    // Re-check on resize
    window.addEventListener('resize', debounce(handleScrollAnimations, 150), { passive: true });
});
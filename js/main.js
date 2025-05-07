document.addEventListener('DOMContentLoaded', function() {
    // ヘッダーのスクロール制御
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 80) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // // モバイルメニュー
    // const hamburger = document.createElement('button');
    // hamburger.classList.add('hamburger');
    // hamburger.innerHTML = `
    //     <span></span>
    //     <span></span>
    //     <span></span>
    // `;
    // document.querySelector('.header__inner').appendChild(hamburger);

    // const nav = document.querySelector('.header__nav-list');
    // hamburger.addEventListener('click', function() {
    //     this.classList.toggle('active');
    //     nav.classList.toggle('active');
    // });

    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    });

    // スクロールアニメーション
    const observers = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observers.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('section').forEach(section => {
        observers.observe(section);
    });
});
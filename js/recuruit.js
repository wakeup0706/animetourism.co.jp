document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーションの制御
    const navLinks = document.querySelectorAll('.recruit-nav__link');
    const sections = document.querySelectorAll('.recruit-section');
    
    // スクロール時のナビゲーション制御
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // ナビゲーションクリック時のスムーススクロール
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const targetPosition = targetSection.offsetTop - 100;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // 募集職種の「詳細を見る」ボタンのクリックイベント
    const jobDetailButtons = document.querySelectorAll('.job-card .button');
    jobDetailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const jobUrl = this.getAttribute('href');
            // ここに詳細ページへの遷移やモーダル表示などの処理を追加
        });
    });

    // 画面読み込み時のアニメーション
    function addInViewClass() {
        const elements = document.querySelectorAll('.benefit-item, .job-card, .flow-step');
        
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            
            if (rect.top <= viewHeight * 0.85) {
                element.classList.add('in-view');
            }
        });
    }
    
    // 初期読み込み時とスクロール時にアニメーション実行
    window.addEventListener('scroll', addInViewClass);
    window.addEventListener('load', addInViewClass);

    // フォーム送信処理（必要に応じて実装）
    const applicationForm = document.querySelector('.application-form');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // フォーム送信処理を実装
        });
    }
});
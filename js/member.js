// member.js

document.addEventListener('DOMContentLoaded', function() {
    // スクロールアニメーション
    function setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.executive-card, .member-card, .culture-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    entry.target.classList.add('active');
                    
                    // 経営陣カードの場合は少し遅延を加える
                    if (entry.target.classList.contains('executive-card')) {
                        const delay = Array.from(document.querySelectorAll('.executive-card')).indexOf(entry.target) * 0.2;
                        entry.target.style.transitionDelay = `${delay}s`;
                    }
                    
                    // メンバーカードの場合も遅延を加える
                    if (entry.target.classList.contains('member-card')) {
                        const delay = Array.from(document.querySelectorAll('.member-card')).indexOf(entry.target) * 0.1;
                        entry.target.style.transitionDelay = `${delay}s`;
                    }
                }
            });
        }, {
            threshold: 0.2
        });
        
        animatedElements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }
    
    // メンバーカードのフリップ効果
    function setupMemberCards() {
        const memberCards = document.querySelectorAll('.member-card__inner');
        
        memberCards.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('is-flipped');
            });
        });
    }
    
    // フィルタリング機能
   // フィルタリング機能の部分を変更
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const memberCards = document.querySelectorAll('.member-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // アクティブなボタンのスタイルを変更
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            memberCards.forEach(card => {
                // 変更点: カードのカテゴリー属性を取得してカンマで分割
                const categories = card.getAttribute('data-category').split(',');
                
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}
    
    // 経営陣のカードに特別なホバーエフェクト
    function setupExecutiveCards() {
        const executiveCards = document.querySelectorAll('.executive-card');
        
        executiveCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const angleX = (y - centerY) / 30;
                const angleY = (centerX - x) / 30;
                
                card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                
                // CEOカードには特別なスケール効果を維持
                if (card.id === 'ceo') {
                    card.style.transform = 'scale(1.05)';
                }
            });
        });
    }
    
    // アニメーションタイトル
    function setupAnimatedTitle() {
        const title = document.querySelector('.animated-title');
        if (!title) return;
        
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            title.style.transition = 'opacity 1s ease, transform 1s ease';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // パーティクルアニメーション
    function setupParticleAnimation() {
        const joinSection = document.querySelector('.join-team');
        if (!joinSection) return;
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 10 + 5;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            
            joinSection.appendChild(particle);
        }
    }
    
    // 文化アイテムのアニメーション
    function setupCultureItems() {
        const cultureItems = document.querySelectorAll('.culture-item');
        
        cultureItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
            
            // アイコンのアニメーション
            const icon = item.querySelector('.culture-item__icon i');
            if (icon) {
                setInterval(() => {
                    icon.classList.add('pulse');
                    
                    setTimeout(() => {
                        icon.classList.remove('pulse');
                    }, 1000);
                }, 3000 + index * 500);
            }
        });
    }
    
    // 全ての機能を初期化
    function initializeAll() {
        setupScrollAnimations();
        setupMemberCards();
        setupFilterButtons();
        setupExecutiveCards();
        setupAnimatedTitle();
        setupParticleAnimation();
        setupCultureItems();
        
        // 追加のCSSを動的に挿入
        const style = document.createElement('style');
        style.textContent = `
            .fade-in {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.8s ease, transform 0.8s ease;
            }
            
            .fade-in.active {
                opacity: 1;
                transform: translateY(0);
            }
            
            @keyframes float {
                0% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0); }
            }
            
            .culture-item__icon i {
                transition: transform 0.3s ease;
            }
            
            .culture-item__icon i.pulse {
                animation: pulse 1s ease;
            }
            
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.2); }
                100% { transform: scale(1); }
            }
            
            .particle {
                position: absolute;
                background-color: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                pointer-events: none;
                animation: float-particle linear infinite;
            }
            
            @keyframes float-particle {
                0% { transform: translateY(0) translateX(0); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100px) translateX(30px); opacity: 0; }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    // 全ての機能を初期化
    initializeAll();
});
// タブナビゲーションの制御
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.news-nav__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // アクティブクラスを全て削除
            navLinks.forEach(l => l.classList.remove('active'));
            
            // クリックされたリンクにアクティブクラスを追加
            this.classList.add('active');
            
            // カテゴリーIDの取得
            const categoryId = this.getAttribute('href').substring(1);
            
            // ここにコンテンツの切り替え処理を追加
            // 例: fetchNewsData(categoryId);
        });
    });

    // ニュースデータを取得する関数
    async function fetchNewsData(category) {
        try {
            // ここに実際のAPIリクエスト処理を追加
            const response = await fetch(`/api/news/${category}`);
            const data = await response.json();
            updateNewsGrid(data);
        } catch (error) {
            console.error('ニュースの取得に失敗しました:', error);
        }
    }

    // ニュースグリッドを更新する関数
    function updateNewsGrid(newsItems) {
        const newsGrid = document.querySelector('.news-grid');
        
        // ニュースカードのHTML生成
        const newsHTML = newsItems.map(item => `
            <article class="news-card">
                <a href="${item.url}">
                    <div class="news-card__image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="news-card__content">
                        <h3 class="news-card__title">${item.title}</h3>
                        <div class="news-card__meta">
                            <span class="news-card__author">${item.author}</span>
                            <time class="news-card__date">${item.date}</time>
                        </div>
                    </div>
                </a>
            </article>
        `).join('');

        // グリッドの内容を更新
        newsGrid.innerHTML = newsHTML;
    }
});
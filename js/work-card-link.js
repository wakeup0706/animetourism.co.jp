// 作品カードのリンク機能を追加するJavaScript
document.addEventListener('DOMContentLoaded', function() {
    // すべての作品カードを取得
    const workCards = document.querySelectorAll('.work-card');
    
    // 各カードにクリックイベントを追加
    workCards.forEach(card => {
        // カードごとにリンク先を設定
        let targetUrl = '#';
        
        // カードのタイトルに基づいてリンク先を決定
        const cardTitle = card.querySelector('.work-card__title').textContent.trim();
        
        if (cardTitle === 'JapanAnimeMaps') {
            targetUrl = 'apps.html';
        } else if (cardTitle === '地域活性化プロジェクト') {
            targetUrl = '/about-subscription';
        } else if (cardTitle === '受託開発事例') {
            targetUrl = '/why-choose-us';
        }
        
        // カード全体をクリック可能に
        card.style.cursor = 'pointer';
        
        // カードクリック時のイベント
        card.addEventListener('click', function(e) {
            // デフォルトのリンク動作を防止
            e.preventDefault();
            
            // 対象ページに遷移
            window.location.href = targetUrl;
        });
        
        // 「詳細を見る」ボタンをクリックしたときのイベント
        const viewButton = card.querySelector('.work-card__view');
        if (viewButton) {
            viewButton.addEventListener('click', function(e) {
                // イベントの伝播を停止（カード全体のクリックイベントが発火するのを防ぐ）
                e.stopPropagation();
                // 対象ページに遷移
                window.location.href = targetUrl;
            });
        }
    });
});
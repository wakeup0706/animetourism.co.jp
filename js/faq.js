/**
 * よくあるお問い合わせページの機能を実装するJavaScript
 */
 document.addEventListener('DOMContentLoaded', function() {
    // FAQ項目のトグル機能
    initFaqToggle();
    
    // カテゴリーフィルター機能
    initCategoryFilter();
    
    // 検索機能
    initSearch();
});

/**
 * FAQ項目のトグル機能を初期化
 */
function initFaqToggle() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // 親要素のfaq-itemを取得
            const faqItem = question.parentElement;
            
            // クリックされた項目がすでにアクティブかどうかをチェック
            const isActive = faqItem.classList.contains('active');
            
            // 他のすべての項目を閉じる（オプション - コメントアウトすると複数項目を開けるようになる）
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            
            // クリックされた項目の状態をトグル
            faqItem.classList.toggle('active', !isActive);
            
            // スムーズなスクロール（特に閉じた時に見やすくするため）
            if (!isActive) {
                setTimeout(() => {
                    // 項目がすでに見えている場合はスクロールしない
                    const rect = faqItem.getBoundingClientRect();
                    if (rect.top < 0 || rect.bottom > window.innerHeight) {
                        const headerOffset = 100; // ヘッダーの高さなどに応じて調整
                        const elementPosition = faqItem.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 400); // アニメーションの時間に合わせて調整
            }
        });
    });
}

/**
 * カテゴリーフィルター機能を初期化
 */
function initCategoryFilter() {
    const categoryButtons = document.querySelectorAll('.faq-category');
    const faqItems = document.querySelectorAll('.faq-item');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // すべてのボタンからアクティブクラスを削除
            categoryButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // クリックされたボタンにアクティブクラスを追加
            button.classList.add('active');
            
            // 選択されたカテゴリー
            const selectedCategory = button.getAttribute('data-category');
            
            // FAQ項目をフィルタリング
            faqItems.forEach(item => {
                if (selectedCategory === 'all' || item.getAttribute('data-category') === selectedCategory) {
                    item.style.display = 'block';
                    item.classList.add('fade-in');
                    item.classList.remove('fade-out');
                } else {
                    item.classList.add('fade-out');
                    item.classList.remove('fade-in');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 500); // フェードアウトアニメーション時間に合わせる
                }
            });
            
            // 「検索結果なし」表示を更新
            updateNoResults();
        });
    });
}

/**
 * 検索機能を初期化
 */
function initSearch() {
    const searchInput = document.getElementById('faqSearch');
    const searchButton = document.querySelector('.faq-search__button');
    
    // 検索ボタンクリック時の処理
    searchButton.addEventListener('click', performSearch);
    
    // Enter キー押下時の処理
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    
    // 入力内容が変更された時のリアルタイム検索（オプション）
    searchInput.addEventListener('input', function() {
        // 入力がない場合はすべて表示
        if (searchInput.value.trim() === '') {
            resetSearch();
            return;
        }
        
        // 入力がある場合は検索を実行
        performSearch();
    });
}

/**
 * 検索を実行する
 */
function performSearch() {
    const searchInput = document.getElementById('faqSearch');
    const searchTerm = searchInput.value.trim().toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');
    
    // 検索語がない場合はすべて表示
    if (searchTerm === '') {
        resetSearch();
        return;
    }
    
    // アクティブなカテゴリーボタンを「すべて」に設定
    document.querySelectorAll('.faq-category').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.faq-category[data-category="all"]').classList.add('active');
    
    // 各FAQ項目を検索
    let matchFound = false;
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question h3').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();
        
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = 'block';
            item.classList.add('fade-in');
            item.classList.remove('fade-out');
            
            // 検索語をハイライト（オプション）
            // highlightSearchTerm(item, searchTerm);
            
            matchFound = true;
        } else {
            item.classList.add('fade-out');
            item.classList.remove('fade-in');
            setTimeout(() => {
                item.style.display = 'none';
            }, 500);
        }
    });
    
    // 検索結果がない場合は「検索結果なし」を表示
    const noResults = document.querySelector('.faq-no-results');
    if (!matchFound) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
}

/**
 * 検索をリセットする
 */
function resetSearch() {
    const faqItems = document.querySelectorAll('.faq-item');
    const noResults = document.querySelector('.faq-no-results');
    
    // すべての項目を表示
    faqItems.forEach(item => {
        item.style.display = 'block';
        item.classList.add('fade-in');
        item.classList.remove('fade-out');
    });
    
    // 「検索結果なし」を非表示
    noResults.style.display = 'none';
}

/**
 * 「検索結果なし」の表示状態を更新
 */
function updateNoResults() {
    const faqItems = document.querySelectorAll('.faq-item');
    const noResults = document.querySelector('.faq-no-results');
    
    // 表示されている項目があるかチェック
    let visibleItems = 0;
    faqItems.forEach(item => {
        if (item.style.display !== 'none') {
            visibleItems++;
        }
    });
    
    // 表示されている項目がなければ「検索結果なし」を表示
    if (visibleItems === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
}

/**
 * 検索語をハイライト（オプション機能）
 */
function highlightSearchTerm(item, searchTerm) {
    // 質問と回答のテキストを取得
    const questionElem = item.querySelector('.faq-question h3');
    const answerElem = item.querySelector('.faq-answer p');
    
    // 元のテキストを保存
    if (!questionElem.hasAttribute('data-original')) {
        questionElem.setAttribute('data-original', questionElem.innerHTML);
        answerElem.setAttribute('data-original', answerElem.innerHTML);
    }
    
    // 元のテキストを取得
    const originalQuestion = questionElem.getAttribute('data-original');
    const originalAnswer = answerElem.getAttribute('data-original');
    
    // 検索語を正規表現に変換（大文字小文字を区別しない）
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    
    // ハイライト用の置換関数
    const replaceFunc = function(match) {
        return `<span class="highlight">${match}</span>`;
    };
    
    // テキストを置換してハイライト
    questionElem.innerHTML = originalQuestion.replace(regex, replaceFunc);
    answerElem.innerHTML = originalAnswer.replace(regex, replaceFunc);
}
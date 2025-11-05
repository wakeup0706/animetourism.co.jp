<?php
session_start();

// CSRFトークンを生成
if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// 前回の入力データを保持
$form_data = isset($_SESSION['form_data']) ? $_SESSION['form_data'] : [];
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>お問い合わせ | 株式会社アニメツーリズム</title>
    <meta name="description" content="株式会社アニメツーリズムへのお問い合わせはこちらから。">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
    <link rel="icon" href="img/animetourism_logo_min.png">
     <!-- Font Awesome -->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
     <!-- GSAP Animation Libraries -->
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/EasePack.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollToPlugin.min.js"></script>
     <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css">
     <link rel="stylesheet" href="css/contact.css">
</head>
<body id="contact">
    <header class="header-fresh">
        <div class="header-fresh__inner">
            <h1 class="header-fresh__logo">
                <a href="/" class="header-fresh__logo-link">
                    <img src="img/animetourism_logo2.jpg" alt="AnimeTourism" class="header-fresh__logo-img">
                </a>
            </h1>
            <nav class="header-fresh__nav">
                <ul class="header-fresh__nav-list">
                    <li class="header-fresh__nav-item has-dropdown">
                        <a href="business.html" class="header-fresh__nav-link">
                            <i class="fas fa-briefcase nav-icon"></i>事業内容
                        </a>
                        <div class="dropdown-menu">
                            <ul class="dropdown-menu__list">
                                <li class="dropdown-menu__item">
                                    <a href="apps.html" class="dropdown-menu__link">JapanAnimeMapsの開発・運営</a>
                                </li>
                                <li class="dropdown-menu__item">
                                    <a href="loacl-activities.html" class="dropdown-menu__link">地域活性化事業の企画・運営</a>
                                </li>
                                <li class="dropdown-menu__item">
                                    <a href="contract-development.html" class="dropdown-menu__link">受託開発事業</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="header-fresh__nav-item has-dropdown">
                        <a href="news.html" class="header-fresh__nav-link">
                            <i class="fas fa-newspaper nav-icon"></i>お知らせ
                        </a>
                        <div class="dropdown-menu">
                            <ul class="dropdown-menu__list">
                                <li class="dropdown-menu__item">
                                    <a href="news.html" class="dropdown-menu__link">当社からの最新情報</a>
                                </li>
                                <li class="dropdown-menu__item">
                                    <a href="https://note.com/japananimemaps" class="dropdown-menu__link">公式note</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="header-fresh__nav-item">
                        <a href="recruit.html" class="header-fresh__nav-link">
                            <i class="fas fa-user-plus nav-icon"></i>採用情報
                        </a>
                    </li>
                    <li class="header-fresh__nav-item has-dropdown">
                        <a href="aboutus.html" class="header-fresh__nav-link">
                            <i class="fas fa-building nav-icon"></i>企業情報
                        </a>
                        <div class="dropdown-menu">
                            <ul class="dropdown-menu__list">
                                <li class="dropdown-menu__item">
                                    <a href="aboutus.html" class="dropdown-menu__link">私たちについて</a>
                                </li>
                                <li class="dropdown-menu__item">
                                    <a href="corporate-philosophy.html" class="dropdown-menu__link">企業理念</a>
                                </li>
                                <li class="dropdown-menu__item">
                                    <a href="corporate.html" class="dropdown-menu__link">会社概要</a>
                                </li>
                                <li class="dropdown-menu__item">
                                    <a href="member.html" class="dropdown-menu__link">メンバー紹介</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="header-fresh__nav-item">
                        <a href="contact.php" class="header-fresh__nav-link header-fresh__nav-link--contact">
                            <i class="fas fa-envelope nav-icon"></i>お問い合わせ
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <div class="page-header">
            <div class="page-header__inner">
                <h2 class="page-header__title">Contact Us</h2>
                <p class="page-header__subtitle">お問い合わせ2</p>
            </div>
        </div>

        <div class="contact-content">
            <div class="container3">
                <p class="contact-lead">お問い合せはこちらからお送りください</p>
                <p class="contact-description">
                    弊社のサービス・商品に関するお問合せ、ご相談、お見積もりのご依頼等は、下記フォームにて承ります。<br>
                    お問合せ内容を確認させていただきまして、各担当より3営業日以内にメールにてご連絡させていただきます。
                </p>

                <!-- エラーメッセージ表示エリア -->
                <div class="form-error-message" id="errorMessages" style="display: none;">
                    <ul id="errorList"></ul>
                </div>

                <!-- サーバーサイドエラーメッセージ -->
                <?php
                if (isset($_SESSION['form_errors']) && !empty($_SESSION['form_errors'])) {
                    echo '<div class="form-error-message">';
                    echo '<ul>';
                    foreach ($_SESSION['form_errors'] as $error) {
                        echo '<li>' . htmlspecialchars($error, ENT_QUOTES, 'UTF-8') . '</li>';
                    }
                    echo '</ul>';
                    echo '</div>';
                    unset($_SESSION['form_errors']);
                }
                ?>

                <form id="contactForm" class="contact-form" action="php/contact_handler.php" method="POST" novalidate>
                    <!-- CSRFトークン -->
                    <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">

                    <div class="form-group">
                        <label for="company" class="form-label">会社名</label>
                        <input type="text" id="company" name="company" class="form-input" 
                               value="<?php echo isset($form_data['company']) ? htmlspecialchars($form_data['company'], ENT_QUOTES, 'UTF-8') : ''; ?>">
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="lastname" class="form-label required">姓</label>
                            <input type="text" id="lastname" name="lastname" class="form-input" 
                                   value="<?php echo isset($form_data['lastname']) ? htmlspecialchars($form_data['lastname'], ENT_QUOTES, 'UTF-8') : ''; ?>" 
                                   required>
                        </div>
                        <div class="form-group">
                            <label for="firstname" class="form-label required">名</label>
                            <input type="text" id="firstname" name="firstname" class="form-input" 
                                   value="<?php echo isset($form_data['firstname']) ? htmlspecialchars($form_data['firstname'], ENT_QUOTES, 'UTF-8') : ''; ?>" 
                                   required>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="email" class="form-label required">メールアドレス</label>
                        <input type="email" id="email" name="email" class="form-input" 
                               value="<?php echo isset($form_data['email']) ? htmlspecialchars($form_data['email'], ENT_QUOTES, 'UTF-8') : ''; ?>" 
                               required>
                    </div>

                    <div class="form-group">
                        <label for="phone" class="form-label">電話番号</label>
                        <input type="tel" id="phone" name="phone" class="form-input" 
                               value="<?php echo isset($form_data['phone']) ? htmlspecialchars($form_data['phone'], ENT_QUOTES, 'UTF-8') : ''; ?>">
                    </div>

                    <div class="form-group">
                        <label for="message" class="form-label required">メッセージ</label>
                        <textarea id="message" name="message" class="form-textarea" required><?php echo isset($form_data['message']) ? htmlspecialchars($form_data['message'], ENT_QUOTES, 'UTF-8') : ''; ?></textarea>
                    </div>

                    <div class="form-privacy">
                        <label class="privacy-checkbox-container">
                            <input type="checkbox" id="privacy" name="privacy" class="privacy-checkbox-input" required 
                                   <?php echo isset($form_data['privacy']) ? 'checked' : ''; ?>>
                            <span class="privacy-checkmark"></span>
                            <span class="privacy-text">
                                <a href="privacy.html" target="_blank">プライバシーポリシー</a>に同意する
                            </span>
                        </label>
                    </div>

                    <div class="form-submit">
                        <button type="submit" class="submit-button">
                            <i class="fas fa-paper-plane" style="margin-right: 8px;"></i>
                            送信する
                        </button>
                    </div>
                </form>

                <?php
                // フォームデータをクリア
                if (isset($_SESSION['form_data'])) {
                    unset($_SESSION['form_data']);
                }
                ?>
            </div>
        </div>
    </main>

    <footer class="footer-fresh">
        <div class="footer-fresh__inner">
            <div class="footer-fresh__main">
                <div class="footer-fresh__left">
                    <a href="/" class="footer-fresh__logo">
                        <img src="img/company_logo.png" alt="AnimeTourism" class="footer-fresh__logo-img">
                    </a>
                    <div class="footer-fresh__social">
                        <a href="https://x.com/JapanAnimeMaps" class="footer-fresh__social-link" aria-label="Twitter"><i class="fab fa-x"></i></a>
                        <a href="https://www.tiktok.com/@japan_anime_maps?is_from_webapp=1&sender_device=pc" class="footer-fresh__social-link" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
                        <a href="https://www.instagram.com/japananimemaps_seichi_junrei?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="footer-fresh__social-link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <nav class="footer-fresh__nav">
                    <ul class="footer-fresh__nav-list">
                        <li><a href="business.html">事業内容</a></li>
                        <li><a href="news.html">お知らせ</a></li>
                        <li><a href="recruit.html">採用情報</a></li>
                        <li><a href="aboutus.html">企業情報</a></li>
                        <li><a href="contact.php">お問い合わせ</a></li>
                    </ul>
                </nav>
                <div class="footer-fresh__links">
                    <ul class="footer-fresh__links-list">
                        <li><a href="sitemap.html">サイトマップ</a></li>
                        <li><a href="privacy.html">プライバシーポリシー</a></li>
                        <li><a href="terms.html">利用規約</a></li>
                        <li><a href="faq.html">よくある問い合わせ</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-fresh__bottom">
                <div class="footer-fresh__address">
                    <p>〒150-0043<br>東京都渋谷区道玄坂1-10-8 渋谷道玄坂東急ビル</p>
                </div>
                <p class="footer-fresh__copyright">© 2024-2025 AnimeTourism Inc. All Rights Reserved.</p>
            </div>
        </div>
        <div class="footer-fresh__pagetop">
            <a href="#" aria-label="Back to top"><i class="fas fa-arrow-up"></i></a>
        </div>
    </footer>

    <script>
    // フロントエンド側のバリデーション
    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(event) {
                let isValid = true;
                const errors = [];
                
                // エラーメッセージをクリア
                document.getElementById('errorMessages').style.display = 'none';
                document.getElementById('errorList').innerHTML = '';
                
                // 入力値を取得
                const company = document.getElementById('company').value.trim();
                const lastname = document.getElementById('lastname').value.trim();
                const firstname = document.getElementById('firstname').value.trim();
                const email = document.getElementById('email').value.trim();
                const message = document.getElementById('message').value.trim();
                const privacy = document.getElementById('privacy').checked;
                
                // バリデーション（会社名のバリデーションを削除）
                if (!lastname) {
                    errors.push("姓は必須項目です。");
                    document.getElementById('lastname').classList.add('input-error');
                } else {
                    document.getElementById('lastname').classList.remove('input-error');
                }
                
                if (!firstname) {
                    errors.push("名は必須項目です。");
                    document.getElementById('firstname').classList.add('input-error');
                } else {
                    document.getElementById('firstname').classList.remove('input-error');
                }
                
                if (!email) {
                    errors.push("メールアドレスは必須項目です。");
                    document.getElementById('email').classList.add('input-error');
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    errors.push("有効なメールアドレスを入力してください。");
                    document.getElementById('email').classList.add('input-error');
                } else {
                    document.getElementById('email').classList.remove('input-error');
                }
                
                if (!message) {
                    errors.push("メッセージは必須項目です。");
                    document.getElementById('message').classList.add('input-error');
                } else {
                    document.getElementById('message').classList.remove('input-error');
                }
                
                if (!privacy) {
                    errors.push("プライバシーポリシーへの同意が必要です。");
                }
                
                // エラーがある場合は送信を停止
                if (errors.length > 0) {
                    event.preventDefault();
                    isValid = false;
                    
                    const errorList = document.getElementById('errorList');
                    errors.forEach(error => {
                        const li = document.createElement('li');
                        li.textContent = error;
                        errorList.appendChild(li);
                    });
                    document.getElementById('errorMessages').style.display = 'block';
                    
                    // エラーがある場合はページトップにスクロール
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
                
                // 送信処理中のローディング表示
                if (isValid) {
                    const submitButton = document.querySelector('.submit-button');
                    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i>送信中...';
                    submitButton.disabled = true;
                }
                
                return isValid;
            });
        }
    });
    </script>
    <script src="js/index-fresh.js"></script>
</body>
</html>
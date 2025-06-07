<?php
session_start();
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>お問い合わせ完了 | 株式会社アニメツーリズム</title>
    <meta name="description" content="お問い合わせありがとうございました。3営業日以内にご連絡いたします。">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/contact_thanks.css">
    <link rel="icon" href="img/animetourism_logo_min.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        /* Contact Thanks Page専用のオーバーライドスタイル */
        
        /* Body background override */
        body {
            background: linear-gradient(135deg, var(--yellow-bg) 0%, #FFE0B2 100%);
            padding-top: var(--header-height);
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
        }

        /* Background decorative elements */
        body::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                radial-gradient(circle at 20% 30%, rgba(228, 64, 95, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(91, 76, 255, 0.05) 0%, transparent 50%);
            pointer-events: none;
            z-index: -1;
        }

        /* Main content area */
        main {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: calc(100vh - var(--header-height) - 200px);
            padding: 80px 20px;
            position: relative;
        }

        /* Thank you page container */
        .thanks-container {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(15px);
            border-radius: var(--card-radius);
            box-shadow: var(--box-shadow);
            padding: 60px 40px;
            max-width: 700px;
            width: 100%;
            text-align: center;
            position: relative;
            overflow: hidden;
            animation: slideUpFadeIn 0.8s ease-out;
        }

        @keyframes slideUpFadeIn {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Header accent line */
        .thanks-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
            border-radius: var(--card-radius) var(--card-radius) 0 0;
        }

        /* Success icon styling */
        .success-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(45deg, var(--primary-color), var(--primary-light));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 30px;
            box-shadow: 0 8px 25px rgba(228, 64, 95, 0.2);
            animation: successBounce 0.8s ease-out 0.2s both;
        }

        .success-icon i {
            font-size: 3.2rem;
            color: white;
        }

        @keyframes successBounce {
            0% {
                opacity: 0;
                transform: scale(0.3);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }

        /* Main title styling */
        .thanks-title {
            font-size: 3.2rem;
            font-weight: 700;
            color: var(--text-color);
            margin-bottom: 30px;
            line-height: 1.3;
            background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* Inquiry ID badge */
        .inquiry-id-badge {
            display: inline-block;
            background: linear-gradient(45deg, var(--accent-color), #7C3AED);
            color: white;
            padding: 12px 28px;
            border-radius: 25px;
            font-weight: 600;
            font-size: 1.5rem;
            margin: 20px 0 30px;
            box-shadow: 0 4px 15px rgba(91, 76, 255, 0.3);
            letter-spacing: 0.5px;
        }

        /* Message text */
        .message-text {
            font-size: 1.8rem;
            line-height: 1.7;
            color: var(--text-light);
            margin: 30px 0;
        }

        /* Highlight box */
        .highlight-box {
            background: linear-gradient(135deg, rgba(228, 64, 95, 0.05), rgba(255, 248, 225, 0.8));
            border-left: 4px solid var(--primary-color);
            padding: 25px;
            border-radius: 12px;
            margin: 40px 0;
            position: relative;
        }

        .highlight-box::before {
            content: '💌';
            position: absolute;
            top: -10px;
            right: 20px;
            font-size: 2rem;
            background: white;
            padding: 0 8px;
        }

        /* Process steps */
        .process-steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 20px;
            margin: 50px 0;
        }

        .process-step {
            background: rgba(255, 255, 255, 0.8);
            padding: 25px 20px;
            border-radius: 15px;
            border: 2px solid rgba(228, 64, 95, 0.1);
            transition: var(--transition);
            position: relative;
        }

        .process-step:hover {
            transform: translateY(-5px);
            border-color: rgba(228, 64, 95, 0.3);
            box-shadow: 0 10px 25px rgba(228, 64, 95, 0.1);
        }

        .step-number {
            width: 40px;
            height: 40px;
            background: linear-gradient(45deg, var(--primary-color), var(--primary-light));
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.6rem;
            margin: 0 auto 15px;
            box-shadow: 0 4px 10px rgba(228, 64, 95, 0.2);
        }

        .step-text {
            font-size: 1.5rem;
            color: var(--text-color);
            font-weight: 500;
            line-height: 1.5;
        }

        /* Back to home button */
        .back-home-btn {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: linear-gradient(45deg, var(--primary-color), var(--primary-light));
            color: white;
            text-decoration: none;
            padding: 16px 32px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.6rem;
            margin-top: 50px;
            transition: var(--transition);
            box-shadow: 0 8px 20px rgba(228, 64, 95, 0.2);
            letter-spacing: 0.5px;
        }

        .back-home-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(228, 64, 95, 0.3);
            color: white;
        }

        .back-home-btn i {
            transition: transform 0.3s ease;
        }

        .back-home-btn:hover i {
            transform: translateX(-3px);
        }

        /* Floating animation elements */
        .floating-element {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            animation: floatAnimation 6s infinite ease-in-out;
        }

        .floating-element:nth-child(1) {
            width: 8px;
            height: 8px;
            background: var(--primary-color);
            top: 15%;
            left: 10%;
            animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
            width: 12px;
            height: 12px;
            background: var(--accent-color);
            top: 70%;
            right: 15%;
            animation-delay: 2s;
        }

        .floating-element:nth-child(3) {
            width: 6px;
            height: 6px;
            background: var(--yellow-accent);
            bottom: 20%;
            left: 20%;
            animation-delay: 4s;
        }

        @keyframes floatAnimation {
            0%, 100% { 
                transform: translateY(0px) rotate(0deg);
                opacity: 0.7;
            }
            33% { 
                transform: translateY(-20px) rotate(120deg);
                opacity: 1;
            }
            66% { 
                transform: translateY(10px) rotate(240deg);
                opacity: 0.8;
            }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .thanks-container {
                margin: 20px;
                padding: 40px 30px;
            }

            .thanks-title {
                font-size: 2.4rem;
            }

            .message-text {
                font-size: 1.6rem;
            }

            .process-steps {
                grid-template-columns: 1fr;
                gap: 15px;
            }

            .back-home-btn {
                padding: 14px 28px;
                font-size: 1.5rem;
            }
        }

        @media (max-width: 480px) {
            .thanks-title {
                font-size: 2rem;
            }

            .inquiry-id-badge {
                padding: 10px 20px;
                font-size: 1.3rem;
            }
        }
    </style>

    </style>
</head>
<body>
    <!-- Floating particles -->
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>

    <header class="header">
        <div class="header__inner">
            <h1 class="header__logo">
                <a href="https://animetourism.co.jp" class="header__logo-link" aria-label="AnimeTourism トップページへ">
                    <img src="img/animetourism_logo2.jpg" alt="AnimeTourism" class="header__logo-img">
                </a>
            </h1>
            <nav class="header__nav">
                <ul class="header__nav-list">
                    <li class="header__nav-item">
                        <a href="business.html" class="header__nav-link">
                            <i class="fas fa-briefcase"></i>事業内容
                        </a>
                    </li>
                    <li class="header__nav-item">
                        <a href="news.html" class="header__nav-link">
                            <i class="fas fa-newspaper"></i>お知らせ
                        </a>
                    </li>
                    <li class="header__nav-item">
                        <a href="recruit.html" class="header__nav-link">
                            <i class="fas fa-user-plus"></i>採用情報
                        </a>
                    </li>
                    <li class="header__nav-item">
                        <a href="aboutus.html" class="header__nav-link">
                            <i class="fas fa-building"></i>企業情報
                        </a>
                    </li>
                    <li class="header__nav-item">
                        <a href="contact.php" class="header__nav-link header__nav-link--contact">
                            <i class="fas fa-envelope"></i>お問い合わせ
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    
    <main>
        <!-- Floating decoration elements -->
        <div class="floating-element"></div>
        <div class="floating-element"></div>
        <div class="floating-element"></div>

        <div class="thanks-container">
            <div class="success-icon">
                <i class="fas fa-check"></i>
            </div>
            
            <h1 class="thanks-title">お問い合わせを受付いたしました</h1>
            
            <!-- PHP部分はサンプルデータで表示 -->
            <div class="inquiry-id-badge">
                お問い合わせ管理番号：INQ-2025-001234
            </div>
            
            <p class="message-text">
                この度は、株式会社アニメツーリズムにお問い合わせいただき、<br>
                ありがとうございます。
            </p>
            
            <div class="highlight-box">
                <p class="message-text">
                    <strong>担当者より3営業日以内にメールにてご連絡させていただきます。</strong><br>
                    また、ご入力いただいたメールアドレス宛に確認メールをお送りしております。
                </p>
            </div>

            <div class="process-steps">
                <div class="process-step">
                    <div class="step-number">1</div>
                    <div class="step-text">確認メール送信完了</div>
                </div>
                <div class="process-step">
                    <div class="step-number">2</div>
                    <div class="step-text">担当者が内容を確認</div>
                </div>
                <div class="process-step">
                    <div class="step-number">3</div>
                    <div class="step-text">3営業日以内にご返信</div>
                </div>
            </div>
            
            <a href="https://animetourism.co.jp" class="back-home-btn">
                <i class="fas fa-home"></i>
                トップページに戻る
            </a>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer__content">
                <div class="footer__info">
                    <a href="/" class="footer__logo">
                        <img src="img/company_logo.png" alt="AnimeTourism" class="footer__logo-img">
                    </a>
                    <p class="footer__address">
                        〒150-0043<br>
                        東京都渋谷区道玄坂1-10-8 渋谷道玄坂東急ビル
                    </p>
                    <div class="footer__social">
                        <a href="https://x.com/JapanAnimeMaps" class="social-link" aria-label="Twitter">
                            <i class="fab fa-x-twitter"></i>
                        </a>
                        <a href="https://www.tiktok.com/@japan_anime_maps" class="social-link" aria-label="TikTok">
                            <i class="fab fa-tiktok"></i>
                        </a>
                        <a href="https://www.instagram.com/japananimemaps_seichi_junrei" class="social-link" aria-label="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <nav class="footer__nav">
                    <ul class="footer__nav-list">
                        <li><a href="business.html">事業内容</a></li>
                        <li><a href="news.html">お知らせ</a></li>
                        <li><a href="recruit.html">採用情報</a></li>
                        <li><a href="aboutus.html">企業情報</a></li>
                        <li><a href="contact.php">お問い合わせ</a></li>
                    </ul>
                </nav>
            </div>
            
            <div class="footer__links">
                <ul class="footer__links-list">
                    <li class="footer__links-item">
                        <a href="sitemap.html" class="footer__links-link">サイトマップ</a>
                    </li>
                    <li class="footer__links-item">
                        <a href="privacy.html" class="footer__links-link">プライバシーポリシー</a>
                    </li>
                    <li class="footer__links-item">
                        <a href="terms.html" class="footer__links-link">利用規約</a>
                    </li>
                    <li class="footer__links-item">
                        <a href="faq.html" class="footer__links-link">よくある問い合わせ</a>
                    </li>
                </ul>
            </div>
            
            <p class="footer__copyright">© 2024-2025 AnimeTourism Inc. All Rights Reserved.</p>
        </div>
    </footer>
</body>
</html>
# 株式会社アニメツーリズム コーポレートサイト

株式会社アニメツーリズムの企業公式サイト (https://animetourism.co.jp) のソースコードリポジトリです。

## 技術スタック

### フロントエンド
- **HTML5** - セマンティックマークアップ
- **CSS3** - Flexbox/Grid レイアウト、カスタムプロパティ
- **Vanilla JavaScript** - ES6+、モジュール化
- **レスポンシブデザイン** - モバイルファースト設計

### バックエンド
- **PHP 7.4+** - フォーム処理、サーバーサイド機能
- **Apache** - Webサーバー（.htaccess設定）

### 開発・ビルドツール
- ネイティブCSS（プリプロセッサ不使用）
- バニラJavaScript（フレームワーク不使用）
- 手動最適化・圧縮

## プロジェクト構造

```
/
├── .htaccess                    # Apache設定（リダイレクト、キャッシュ）
├── index.html                   # トップページ
├── sitemap.html                 # サイトマップ
│
├── company/                     # 企業情報
│   ├── aboutus.html            # 会社概要
│   ├── corporate.html          # 企業情報
│   ├── corporate-philosophy.html # 企業理念
│   ├── member.html             # 役員・メンバー
│   └── local-activities.html   # 地域活動
│
├── business/                    # 事業内容
│   ├── business.html           # 事業案内
│   ├── apps.html              # アプリケーション事業
│   └── contract-development.html # 受託開発事業
│
├── recruit/                     # 採用情報
│   ├── recruit.html            # 採用トップ
│   ├── recruit-entry.html      # エントリーフォーム
│   └── recruit_more.html       # 採用詳細
│
├── info/                        # 各種情報
│   ├── news.html               # ニュース・お知らせ
│   ├── faq.html                # よくある質問
│   ├── contact.html            # お問い合わせ
│   └── thanks.html             # 送信完了ページ
│
├── legal/                       # 法的文書
│   ├── terms.html              # 利用規約
│   └── privacy.html            # プライバシーポリシー
│
├── assets/
│   ├── css/                    # スタイルシート
│   │   ├── reset.css           # CSSリセット
│   │   ├── style.css           # グローバルスタイル
│   │   ├── site.css            # サイト共通コンポーネント
│   │   ├── index-page.css      # トップページ専用
│   │   ├── apps.css            # アプリページ専用
│   │   ├── business.css        # 事業案内専用
│   │   ├── contact.css         # お問い合わせ専用
│   │   ├── contract-development.css
│   │   ├── contract-development-supplement.css
│   │   ├── corporate-philosophy.css
│   │   ├── faq.css
│   │   ├── member.css
│   │   ├── news.css
│   │   ├── privacy.css
│   │   ├── recruit.css
│   │   ├── recruit-entry.css
│   │   ├── recruit-more.css
│   │   └── terms.css
│   │
│   ├── js/                     # JavaScript
│   │   ├── main.js             # 共通機能（ナビゲーション、Utils）
│   │   ├── apps.js             # アプリページ機能
│   │   ├── contact.js          # お問い合わせフォーム
│   │   ├── contract-development.js
│   │   ├── corporate-philosophy.js
│   │   ├── faq.js              # FAQ展開・検索
│   │   ├── member.js           # メンバー表示制御
│   │   ├── news.js             # ニュース一覧・フィルタ
│   │   ├── recruit.js          # 採用ページ機能
│   │   └── work-card-link.js   # 求人カード機能
│   │
│   └── img/                    # 画像アセット
│       ├── common/             # 共通画像（ロゴ、アイコン等）
│       ├── company/            # 企業情報関連画像
│       ├── business/           # 事業内容関連画像
│       └── recruit/            # 採用関連画像
│
└── php/                        # サーバーサイド処理
    └── process_form.php        # フォーム送信処理
```

## セットアップ・開発環境

### 必要な環境
- **Webサーバー**: Apache 2.4+ または Nginx
- **PHP**: 7.4 以上
- **ブラウザ**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

### ローカル開発環境構築

```bash
# リポジトリクローン
git clone [repository-url]
cd animetourism-corporate

# ローカルサーバー起動（PHP内蔵サーバー使用）
php -S localhost:8000

# または Apache/Nginx の DocumentRoot に配置
```

### 開発時の注意点

1. **ファイル編集時**
   - HTML: セマンティックマークアップを維持
   - CSS: BEM記法に準拠、カスタムプロパティを活用
   - JS: ES6+ 構文使用、strict mode

2. **画像最適化**
   - WebP形式推奨、フォールバック実装
   - レスポンシブ画像（srcset）対応

3. **パフォーマンス**
   - CSS/JS の適切な分割とローディング
   - 不要なHTTPリクエスト削減

## 主要機能・特徴

### フロントエンド機能
- **レスポンシブナビゲーション** - ハンバーガーメニュー、スムーススクロール
- **フォームバリデーション** - リアルタイム検証、エラーハンドリング
- **アニメーション** - CSS Transitions/Animations、Intersection Observer API
- **アクセシビリティ** - ARIA属性、キーボードナビゲーション対応

### バックエンド機能
- **フォーム処理** - お問い合わせ、採用エントリー
- **セキュリティ** - CSRF対策、XSS対策、入力値サニタイズ
- **メール送信** - 自動返信、管理者通知

### SEO・パフォーマンス最適化
- **メタタグ最適化** - OGP、Twitter Cards対応
- **構造化データ** - JSON-LD実装
- **サイトマップ** - HTML/XML対応
- **パフォーマンス** - 画像最適化、キャッシュ設定

## デプロイメント

### 本番環境要件
- **サーバー**: Apache 2.4+ / PHP 7.4+
- **SSL証明書**: 必須（Let's Encrypt推奨）
- **ドメイン**: animetourism.co.jp

### デプロイ手順
1. ファイルをサーバーにアップロード
2. `.htaccess` 設定確認
3. PHP設定確認（エラー表示OFF、メール設定）
4. SSL証明書設定
5. 動作確認（全ページ、フォーム機能）

## セキュリティ

### 実装済み対策
- **XSS対策**: 出力エスケープ処理
- **CSRF対策**: トークンベース検証
- **SQLインジェクション対策**: prepared statements使用
- **ファイルアップロード制限**: 拡張子・サイズ制限

### セキュリティヘッダー
```apache
# .htaccess 設定例
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set X-XSS-Protection "1; mode=block"
Header always set Strict-Transport-Security "max-age=31536000"
```

## パフォーマンス指標

### 目標値
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.0s

### 最適化手法
- 画像遅延読み込み（Lazy Loading）
- CSS/JS の非同期読み込み
- キャッシュ戦略（.htaccess）
- 不要なリソース削除

## 保守・運用

### 定期メンテナンス
- **月次**: セキュリティアップデート確認
- **四半期**: パフォーマンス監査
- **年次**: 依存関係・技術スタック見直し

### モニタリング
- Google Analytics 4
- Google Search Console
- PageSpeed Insights
- アクセスログ監視

## 開発ガイドライン

### コーディング規約
- **HTML**: HTML5 Validator準拠
- **CSS**: BEM記法、プロパティの論理的順序
- **JavaScript**: ESLint準拠、関数型プログラミング推奨

### Git ワークフロー
```bash
# 機能開発
git checkout -b feature/feature-name
git commit -m "feat: 新機能の説明"

# バグ修正
git checkout -b fix/bug-description
git commit -m "fix: バグ修正の説明"
```

## ライセンス・著作権

© 2025 株式会社アニメツーリズム. All rights reserved.

本プロジェクトのソースコードは企業の知的財産です。
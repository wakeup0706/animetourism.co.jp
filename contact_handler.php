<?php
// エラー報告を有効にする（開発時のみ、本番では無効にすること）
error_reporting(E_ALL);
ini_set('display_errors', 1);

// POSTリクエストのみ受け付ける
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die('Method Not Allowed');
}

// CSRFトークンの検証（セキュリティ強化）
session_start();
if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    http_response_code(403);
    die('CSRF token mismatch');
}

// 入力データの取得とサニタイズ
$company = isset($_POST['company']) ? trim($_POST['company']) : '';
$lastname = isset($_POST['lastname']) ? trim($_POST['lastname']) : '';
$firstname = isset($_POST['firstname']) ? trim($_POST['firstname']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';
$privacy = isset($_POST['privacy']) ? true : false;

// バリデーション
$errors = [];

if (empty($company)) {
    $errors[] = "会社名は必須項目です。";
}

if (empty($lastname)) {
    $errors[] = "姓は必須項目です。";
}

if (empty($firstname)) {
    $errors[] = "名は必須項目です。";
}

if (empty($email)) {
    $errors[] = "メールアドレスは必須項目です。";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "有効なメールアドレスを入力してください。";
}

if (empty($message)) {
    $errors[] = "メッセージは必須項目です。";
}

if (!$privacy) {
    $errors[] = "プライバシーポリシーへの同意が必要です。";
}

// エラーがある場合は元のページに戻る
if (!empty($errors)) {
    $_SESSION['form_errors'] = $errors;
    $_SESSION['form_data'] = $_POST;
    header('Location: contact.html');
    exit;
}

// お問い合わせ管理番号を生成
function generateRandomId($length = 13) {
    $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
    $result = '';
    $charactersLength = strlen($characters);
    
    for ($i = 0; $i < $length; $i++) {
        $result .= $characters[rand(0, $charactersLength - 1)];
    }
    
    return $result;
}

function getCurrentDateString() {
    return date('Ymd');
}

$dateString = getCurrentDateString();
$randomId = generateRandomId();
$inquiryId = $dateString . '-' . $randomId;

// メール本文を作成
$mailBody = "以下の内容でウェブサイトからお問い合わせいただきました。\n\n";
$mailBody .= "お問い合わせ管理番号：" . $inquiryId . "\n\n";
$mailBody .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
$mailBody .= "【会社名】\n" . $company . "\n\n";
$mailBody .= "【お名前】\n" . $lastname . " " . $firstname . "\n\n";
$mailBody .= "【メールアドレス】\n" . $email . "\n\n";

if (!empty($phone)) {
    $mailBody .= "【電話番号】\n" . $phone . "\n\n";
}

$mailBody .= "【メッセージ】\n" . $message . "\n\n";
$mailBody .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
$mailBody .= "送信日時：" . date('Y年m月d日 H:i:s') . "\n";
$mailBody .= "送信元IP：" . $_SERVER['REMOTE_ADDR'] . "\n";

// メール送信設定
$to = 'contact@animetourism.co.jp';
$subject = '【ウェブサイト】お問い合わせ - ' . $company;

// メールヘッダー設定
$headers = [];
$headers[] = 'From: noreply@animetourism.co.jp';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'X-Mailer: PHP/' . phpversion();
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'Content-Transfer-Encoding: 8bit';

// お名前.comのメールサーバー設定
ini_set('SMTP', 'mail19.onamae.ne.jp');
ini_set('smtp_port', 587);

// メール送信
$mailSent = false;

try {
    // PHPのmail()関数を使用
    $mailSent = mail($to, $subject, $mailBody, implode("\r\n", $headers));
    
    if (!$mailSent) {
        throw new Exception('メール送信に失敗しました。');
    }
    
    // 自動返信メールを送信（お客様向け）
    $autoReplySubject = '【AnimeTourism】お問い合わせを受付いたしました';
    $autoReplyBody = $lastname . " " . $firstname . " 様\n\n";
    $autoReplyBody .= "この度は、株式会社アニメツーリズムにお問い合わせいただき、ありがとうございます。\n\n";
    $autoReplyBody .= "以下の内容でお問い合わせを受付いたしました。\n";
    $autoReplyBody .= "担当者より3営業日以内にご連絡させていただきます。\n\n";
    $autoReplyBody .= "お問い合わせ管理番号：" . $inquiryId . "\n\n";
    $autoReplyBody .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    $autoReplyBody .= "【会社名】\n" . $company . "\n\n";
    $autoReplyBody .= "【お名前】\n" . $lastname . " " . $firstname . "\n\n";
    $autoReplyBody .= "【メールアドレス】\n" . $email . "\n\n";
    
    if (!empty($phone)) {
        $autoReplyBody .= "【電話番号】\n" . $phone . "\n\n";
    }
    
    $autoReplyBody .= "【メッセージ】\n" . $message . "\n\n";
    $autoReplyBody .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    $autoReplyBody .= "※このメールは自動送信されています。\n";
    $autoReplyBody .= "※お心当たりのない場合は、お手数ですが下記までご連絡ください。\n\n";
    $autoReplyBody .= "株式会社アニメツーリズム\n";
    $autoReplyBody .= "Email: contact@animetourism.co.jp\n";
    $autoReplyBody .= "〒150-0043 東京都渋谷区道玄坂1-10-8 渋谷道玄坂東急ビル\n";
    
    $autoReplyHeaders = [];
    $autoReplyHeaders[] = 'From: contact@animetourism.co.jp';
    $autoReplyHeaders[] = 'Reply-To: contact@animetourism.co.jp';
    $autoReplyHeaders[] = 'X-Mailer: PHP/' . phpversion();
    $autoReplyHeaders[] = 'MIME-Version: 1.0';
    $autoReplyHeaders[] = 'Content-Type: text/plain; charset=UTF-8';
    $autoReplyHeaders[] = 'Content-Transfer-Encoding: 8bit';
    
    // 自動返信メール送信
    mail($email, $autoReplySubject, $autoReplyBody, implode("\r\n", $autoReplyHeaders));
    
    // 成功時の処理 - 修正箇所：ルートディレクトリへの絶対パスで指定
    $_SESSION['success_message'] = 'お問い合わせを送信しました。3営業日以内にご連絡いたします。';
    $_SESSION['inquiry_id'] = $inquiryId;
    unset($_SESSION['form_data']);
    unset($_SESSION['form_errors']);
    
    header('Location: https://animetourism.co.jp/contact_thanks.php');
    exit;
    
} catch (Exception $e) {
    // エラーログに記録
    error_log('Contact form error: ' . $e->getMessage());
    
    $_SESSION['form_errors'] = ['送信エラーが発生しました。しばらく時間をおいてから再度お試しください。'];
    $_SESSION['form_data'] = $_POST;
    header('Location: contact.php');
    exit;
}
?>
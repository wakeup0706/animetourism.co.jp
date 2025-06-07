<?php
/**
 * メール設定ファイル
 * お名前.comのサーバー設定に対応
 */

// メールサーバーの設定
define('MAIL_HOST', 'mail19.onamae.ne.jp');
define('MAIL_PORT', 587);
define('MAIL_USERNAME', 'noreply-contactform@animetourism.co.jp'); // 実際のメールアドレス
define('MAIL_PASSWORD', '10172002Sota@'); // 実際のパスワードに変更
define('MAIL_FROM', 'noreply-contactform@animetourism.co.jp');
define('MAIL_FROM_NAME', '株式会社アニメツーリズム');

// 管理者メールアドレス
define('ADMIN_EMAIL', 'sota@jam-info.com');

// SMTPを使用する場合の設定（PHPMailerライブラリが必要）
function sendMailWithSMTP($to, $subject, $body, $from = MAIL_FROM, $fromName = MAIL_FROM_NAME) {
    // PHPMailerを使用する場合はここに実装
    // 現在はPHPの標準mail()関数を使用
    
    $headers = [];
    $headers[] = 'From: ' . $fromName . ' <' . $from . '>';
    $headers[] = 'Reply-To: ' . $from;
    $headers[] = 'X-Mailer: PHP/' . phpversion();
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $headers[] = 'Content-Transfer-Encoding: 8bit';
    
    // お名前.comのSMTPサーバーを設定
    ini_set('SMTP', MAIL_HOST);
    ini_set('smtp_port', MAIL_PORT);
    
    return mail($to, $subject, $body, implode("\r\n", $headers));
}

// メールテンプレート関数
function getContactMailTemplate($data, $inquiryId) {
    $template = "以下の内容でウェブサイトからお問い合わせいただきました。\n\n";
    $template .= "お問い合わせ管理番号：{$inquiryId}\n\n";
    $template .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    $template .= "【会社名】\n{$data['company']}\n\n";
    $template .= "【お名前】\n{$data['lastname']} {$data['firstname']}\n\n";
    $template .= "【メールアドレス】\n{$data['email']}\n\n";
    
    if (!empty($data['phone'])) {
        $template .= "【電話番号】\n{$data['phone']}\n\n";
    }
    
    $template .= "【メッセージ】\n{$data['message']}\n\n";
    $template .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    $template .= "送信日時：" . date('Y年m月d日 H:i:s') . "\n";
    $template .= "送信元IP：" . $_SERVER['REMOTE_ADDR'] . "\n";
    
    return $template;
}

function getAutoReplyTemplate($data, $inquiryId) {
    $template = "{$data['lastname']} {$data['firstname']} 様\n\n";
    $template .= "この度は、株式会社アニメツーリズムにお問い合わせいただき、ありがとうございます。\n\n";
    $template .= "以下の内容でお問い合わせを受付いたしました。\n";
    $template .= "担当者より3営業日以内にご連絡させていただきます。\n\n";
    $template .= "お問い合わせ管理番号：{$inquiryId}\n\n";
    $template .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    $template .= "【会社名】\n{$data['company']}\n\n";
    $template .= "【お名前】\n{$data['lastname']} {$data['firstname']}\n\n";
    $template .= "【メールアドレス】\n{$data['email']}\n\n";
    
    if (!empty($data['phone'])) {
        $template .= "【電話番号】\n{$data['phone']}\n\n";
    }
    
    $template .= "【メッセージ】\n{$data['message']}\n\n";
    $template .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    $template .= "※このメールは自動送信されています。\n";
    $template .= "※お心当たりのない場合は、お手数ですが下記までご連絡ください。\n\n";
    $template .= "株式会社アニメツーリズム\n";
    $template .= "Email: contact@animetourism.co.jp\n";
    $template .= "〒150-0043 東京都渋谷区道玄坂1-10-8 渋谷道玄坂東急ビル\n";
    
    return $template;
}
?>
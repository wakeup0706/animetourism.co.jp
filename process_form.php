<?php
// 日本語の文字化けを防ぐための設定
mb_language("japanese");
mb_internal_encoding("UTF-8");

// フォームが送信されたか確認
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // フォームから送信されたデータを取得
    $company = isset($_POST['company']) ? htmlspecialchars($_POST['company']) : '';
    $lastname = isset($_POST['lastname']) ? htmlspecialchars($_POST['lastname']) : '';
    $firstname = isset($_POST['firstname']) ? htmlspecialchars($_POST['firstname']) : '';
    $email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : '';
    $message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';
    $privacy = isset($_POST['privacy']) ? true : false;
    
    // バリデーション（必須項目の確認）
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
    
    // エラーがなければメール送信処理
    if (empty($errors)) {
        // 送信先のメールアドレス
        $to = "sota@jam-info.com";
        
        // メールの件名
        $subject = "【ウェブサイト】お問い合わせがありました";
        
        // メール本文の作成
        $email_content = "以下の内容でウェブサイトからお問い合わせがありました。\n\n";
        $email_content .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
        $email_content .= "【会社名】\n$company\n\n";
        $email_content .= "【お名前】\n$lastname $firstname\n\n";
        $email_content .= "【メールアドレス】\n$email\n\n";
        
        if (!empty($phone)) {
            $email_content .= "【電話番号】\n$phone\n\n";
        }
        
        $email_content .= "【メッセージ】\n$message\n\n";
        $email_content .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
        $email_content .= "送信日時：" . date("Y年m月d日 H時i分") . "\n";
        $email_content .= "IPアドレス：" . $_SERVER["REMOTE_ADDR"] . "\n";
        
        // メールヘッダーの設定
        $headers = "From: $email\n";
        $headers .= "Reply-To: $email\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\n";
        
        // メールの送信
        if (mb_send_mail($to, $subject, $email_content, $headers)) {
            // 自動返信メール（お客様向け）の送信
            $auto_subject = "【株式会社AnimeTourism】お問い合わせありがとうございます";
            
            $auto_message = "{$lastname} {$firstname} 様\n\n";
            $auto_message .= "この度は株式会社AnimeTourismにお問い合わせいただき、誠にありがとうございます。\n";
            $auto_message .= "以下の内容でお問い合わせを受け付けました。\n\n";
            $auto_message .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
            $auto_message .= "【会社名】\n$company\n\n";
            $auto_message .= "【お名前】\n$lastname $firstname\n\n";
            $auto_message .= "【メッセージ】\n$message\n";
            $auto_message .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
            $auto_message .= "内容を確認のうえ、担当者より折り返しご連絡いたします。\n";
            $auto_message .= "なお、お問い合わせの内容によっては、ご回答までにお時間をいただく場合がございます。\n";
            $auto_message .= "あらかじめご了承くださいますよう、よろしくお願い申し上げます。\n\n";
            $auto_message .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
            $auto_message .= "株式会社AnimeTourism\n";
            $auto_message .= "〒150-0043\n";
            $auto_message .= "東京都渋谷区道玄坂1-10-8 渋谷道玄坂東急ビル\n";
            $auto_message .= "Email: info@animetourism.com\n"; // 実際のドメインに変更
            $auto_message .= "URL: https://animetourism.com\n"; // 実際のドメインに変更
            
            $auto_headers = "From: info@animetourism.com\n"; // 実際のドメインに変更
            $auto_headers .= "Content-Type: text/plain; charset=UTF-8\n";
            
            mb_send_mail($email, $auto_subject, $auto_message, $auto_headers);
            
            // 送信完了ページにリダイレクト
            header("Location: thanks.html");
            exit;
        } else {
            $error_message = "メールの送信に失敗しました。しばらく経ってからもう一度お試しください。";
        }
    } else {
        // エラーがある場合は、エラーメッセージを表示するためにcontact.phpに戻る
        // セッションを使ってエラーメッセージを保持するか、URLパラメータで渡す
        $error_query = http_build_query(['errors' => $errors]);
        header("Location: contact.php?" . $error_query);
        exit;
    }
}
?>
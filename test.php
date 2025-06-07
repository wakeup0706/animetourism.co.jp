<?php
// PHPの動作確認用ファイル
echo "PHP is working!<br>";
echo "Current time: " . date('Y-m-d H:i:s') . "<br>";
echo "Server: " . $_SERVER['SERVER_NAME'] . "<br>";
echo "Document Root: " . $_SERVER['DOCUMENT_ROOT'] . "<br>";

// PHPのバージョン確認
echo "PHP Version: " . phpversion() . "<br>";

// メール関数の確認
if (function_exists('mail')) {
    echo "mail() function is available<br>";
} else {
    echo "mail() function is NOT available<br>";
}

// ディレクトリ内容の確認
echo "<h3>Current directory contents:</h3>";
$files = scandir('.');
foreach ($files as $file) {
    if ($file != '.' && $file != '..') {
        echo $file . "<br>";
    }
}
?>
<h1>サイトのセットアップ</h1>

**GITHUB からフォルダーをダウンロードする**
RUN： </br>
docker-compose up -d

<h3>別のターミナルで</h3>
</br>
src/fruits内に.envファイルを作成
</br>
Run: </br>
cp .env.example .env
</br>
</br>

<h3>PHPコンテナを入力してください</h3>
</br>
docker-compose exec php bash
</br>
cd fruits
</br>

**composerをプロジェクトにインストールする**
</br>
composer update
</br>
</br>

**データベースをマイグレトロ**
</br>
php artisan key:generate
</br>
php artisan migrate

</br>
<h3>PHPコンテナを終了する</h3>
</br>

**アプリのルートフォルダでNPMインストール**：
<br>
npm install
<br>npm run dev</br>










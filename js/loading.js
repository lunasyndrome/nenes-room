// ローディング画面
// 定数定義
// ロード画面全体
const loading = document.getElementById('loading');
// 文字
const typing = document.querySelector('.typing');
// 入力したい文字列
const text = 'sakamoto nene';
// 表示文字数を変数に
let letter = 1;

// 関数宣言
function typing_text() {
  // 全文字数より少ない時繰り返し
  if (letter < text.length + 1) {
    typing.textContent = text.slice(0, letter);
    letter++;
    // 50~400までの整数の乱数
    const random = Math.floor(Math.random() * 350) + 50;
    // 上記乱数ms間隔で再実行
    setTimeout(typing_text, random);
    // 全文字表示が終わったら
  } else {
    // loading_closeファンクションへ飛ぶ
    setTimeout(loading_close, 1000);
  }
}

// ローディング画面を消す
function loading_close() {
  loading.classList.add('close');
}

// 初回のみローディング画面表示
// セッションストレージからフラグを取得
const first = sessionStorage.getItem('first');

// ロード時
window.addEventListener('load', function () {
  // フラグがない場合（初回アクセス時）
  if (!first) {
    // 1秒待機し発火
    setTimeout(typing_text, 1000);
    // セッションストレージにフラグを保存
    sessionStorage.setItem('first', true);
  } else {
    loading.style.display = 'none';
  }
});
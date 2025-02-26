'use strict';
// ローディング画面
// 定数定義
// ロード画面全体
const loading = document.getElementById('loading');
// 文字
const typing = document.querySelector('.typing');
const text = typing.children;
// 表示文字数を変数に
let letter = 0;

// 関数宣言
function typing_text() {
  // 全文字数より少ない時繰り返し
  if (letter < text.length) {
    // typing.textContent = text.slice(0, letter);
    text[letter].style.opacity = '1';
    letter++;
    // 100ms間隔で再実行
    setTimeout(typing_text, 100);
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
const body = document.querySelector('body');

// ロード時
window.addEventListener('load', function () {
  // ローディング画面のちらつき防止
  body.style.opacity = '1';
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



// メニュー
// ボタンを定数に定義
const btn = document.getElementById('menu_btn');

// メニューの項目を配列化
const menu_item = document.getElementById('menu_item').children;

// 関数宣言

// メニューボタン押下時
function menu_control() {
  // i=0から開始して、メニュー内の項目分繰り返し
  for (let i = 0; i < menu_item.length; i++) {
    // itemはmenu_itemのi番目
    let item = menu_item[i];
    setTimeout(function () {

      item.classList.toggle('open');

      // 表示を80msずつずらす
    }, 80 * i);
  }
  // ボタンを切り替え
  btn.classList.toggle('open');
}

// ボタンとファンクションの紐づけ
btn.addEventListener('click', menu_control);




// 画面に入ったら表示
//アニメーションさせたい要素を取得
let targets = document.querySelectorAll('.js_scroll_fade');

// scrollしたとき
window.addEventListener('scroll', function () {
  //スクロール量を取得
  var scroll = window.scrollY;
  //画面の高さを取得
  var windowHeight = window.innerHeight;

  //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
  for (let target of targets) {
    //ターゲット要素の位置を取得（スクロールを+することで相対位置を絶対位置に）
    var targetPos = target.getBoundingClientRect().top + scroll;
    //スクロール量 > ターゲット要素の位置+200pxくらい（かすめただけででてくると味気ないので）
    if (scroll > targetPos - windowHeight + 200) {
      target.classList.add('is-animated'); //is-animatedクラスを加える
    }
  }
});



// モーダル
// 定数定義
// モーダル
const modal = document.querySelectorAll('.modal');

// 開くボタン
const modal_btn = document.querySelectorAll('.modal_btn');

// 閉じるボタン
const close_btn = document.querySelectorAll('.close_button');

// 関数宣言
// モーダル開く
function modal_on() {
  modal[this.name].showModal();
}

// モーダル閉じる
function modal_off() {
  for (let item of modal) {
    item.close();
  }
}

// ボタンと関数の紐づけ

// モーダル開く
for (let i = 0; i < modal_btn.length; i++) {
  modal_btn[i].addEventListener('click', { name: i, handleEvent: modal_on });
}

// モーダル閉じる
for (let item of close_btn) {
  item.addEventListener('click', modal_off);
}
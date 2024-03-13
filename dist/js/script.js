
jQuery(function ($) {
  
  // ページトップボタン
  var topBtn = $('.js-pagetop');
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  
let mySwiper1 = new Swiper ('.swiper1', {
  // 以下にオプションを設定
	loop: true, //最後に達したら先頭に戻る
 
  //ページネーション表示の設定
  pagination: { 
    el: '.swiper1-pagination', //ページネーションの要素
    type: 'fraction', //ページネーションの種類
    clickable: true, //クリックに反応させる
  },
 
  //ナビゲーションボタン（矢印）表示の設定
  navigation: { 
    nextEl: '.swiper1-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper1-button-prev', //「前へボタン」要素の指定
  },
 
});

let mySwiper2 = new Swiper ('.swiper2', {
  // 以下にオプションを設定
	loop: true, //最後に達したら先頭に戻る
 
  //ページネーション表示の設定
  pagination: { 
    el: '.swiper2-pagination', //ページネーションの要素
    type: 'fraction', //ページネーションの種類
    clickable: true, //クリックに反応させる
  },
 
  //ナビゲーションボタン（矢印）表示の設定
  navigation: { 
    nextEl: '.swiper2-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper2-button-prev', //「前へボタン」要素の指定
  },
 
});

let mySwiper3 = new Swiper ('.swiper3', {
  // 以下にオプションを設定
	loop: true, //最後に達したら先頭に戻る
 
  //ページネーション表示の設定
  pagination: { 
    el: '.swiper3-pagination', //ページネーションの要素
    type: 'fraction', //ページネーションの種類
    clickable: true, //クリックに反応させる
  },
 
  //ナビゲーションボタン（矢印）表示の設定
  navigation: { 
    nextEl: '.swiper3-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper3-button-prev', //「前へボタン」要素の指定
  },
 
});

let mySwiper4 = new Swiper ('.swiper4', {
  // 以下にオプションを設定
	loop: true, //最後に達したら先頭に戻る
  slidesPerView: 'auto',
  breakpoints: {
    600: {
      spaceBetween: 120,
    },
  },
  spaceBetween: 60,
  //ページネーション表示の設定
  pagination: { 
    el: '.swiper4-pagination', //ページネーションの要素
    type: 'fraction', //ページネーションの種類
    clickable: true, //クリックに反応させる
  },
 
  //ナビゲーションボタン（矢印）表示の設定
  navigation: { 
    nextEl: '.swiper4-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper4-button-prev', //「前へボタン」要素の指定
  },
 
});

});

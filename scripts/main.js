


btn.addEventListener("click", () => {
    home.classList.toggle('menu-open');
});

cover.addEventListener("click", () => {
    home.classList.toggle('menu-open');
});

/*
1.elementsを変数に格納し、DOMに格納
2.タッチ対応検証のためのメソッド作成
3.toggleメソッド作成
4.イベント付与のためのメソッドを作成
5.検証メソッドを変数に格納
6.イベントメソッドに検証メソッドとtoggleメソッドを格納
7.イベントメソッドをコンストラクターに格納
*/

class MobileMenu {
    constructor() {
        this.DOM = {};

        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.home = document.querySelector('#global-home');
    }




}
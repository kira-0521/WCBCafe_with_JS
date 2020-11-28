/*
1.elementsを変数に格納し、DOMに格納
2.タッチ対応検証のためのメソッド作成
3.toggleメソッド作成
4.イベント付与のためのメソッドを作成
5.検証メソッドを変数に格納
　-ontouchstartが存在するか判定。存在する場合はtouchstart,存在しない場合はclickイベントとする。
6.イベントメソッドに検証メソッドとtoggleメソッドを格納
7.イベントメソッドをコンストラクターに格納
※基本的にクリックイベントに対してタッチでも反応するが、タッチイベントを登録した方が早くなる。
*/

class MobileMenu {
    constructor() {
        this.DOM = {};

        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.home = document.querySelector('#global-home');

        // ontouchstartプロパティが存在する場合はtouchstart、しない場合はclick
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle() {
        this.DOM.home.classList.toggle('menu-open');
    }

    _addEvent() {
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    }
}

new MobileMenu();
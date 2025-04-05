// ==UserScript==
// @name         禁止 Bing Keydown 监听
// @namespace    none
// @version      0.1
// @description  Bing 的 Keydown 监听会导致 vimkey 失效, 所以需要禁止
// @author       Luxury
// @match        *://bing.com/*
// @match        *://cn.bing.com/*
// @match        *://www.bing.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 阻止事件监听器安装
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (type === 'keydown' && String(listener).includes('KeyPressScroll')) {
            console.log('脚本 "禁用 Bing Keydown 监听" 已执行');
            return;
        }
        return originalAddEventListener.call(this, type, listener, options);
    };
})();
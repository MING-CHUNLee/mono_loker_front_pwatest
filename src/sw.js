/*
 * @Author: your name
 * @Date: 2022-03-03 11:48:44
 * @LastEditTime: 2022-03-03 12:10:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lockmono\sw.js
 */
// install

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/serviceWorker.js') // 註冊 Service Worker
    .then(function(reg) {
      console.log('Registration succeeded. Scope is ' + reg.scope); // 註冊成功
    })
    .catch(function(error) {
      console.log('Registration failed with ' + error); // 註冊失敗
    });
}
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll(['../src/*.*']);
    }),
  );
});

this.addEventListener('activate', function(event) {
  console.log('activated!');
});
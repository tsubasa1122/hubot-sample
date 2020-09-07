'use strict';

const waitPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 1000);
});

waitPromise.then(() => console.log('hoge'));
console.log('fuga');

new Promise((resolve) => {
  resolve(2);
}).then((v1) => {
  new Promise((resolve) => {
    resolve(v1 * 3);
  }).then((v2) => {
    new Promise((resolve) => {
      resolve(v2 * 4);
    }).then((v3) => {
      console.log(v3);
    })
  })
})

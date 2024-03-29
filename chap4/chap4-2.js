const {log,map,filter,reduce} = require('./chap4');

//이전에 배웠던 filter, reduce를 이용하여 중첩적인 함수를 만들어보자

const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];

const add = (a, b) => a + b;

log(
  reduce(add,
    map(p => p.price, filter(p => p.price < 20000, products)))
);//30000

log(
  reduce(add,
    filter(p => p >= 20000, map(p => p.price, products)))
);//75000
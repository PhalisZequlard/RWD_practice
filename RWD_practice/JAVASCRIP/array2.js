let drinks = ["水","紅茶","綠茶","咖啡"];

//push(),pop()
drinks.push("拿鐵","梅子綠茶");
drinks.pop();

drinks.unshift("可樂");
drinks.shift();
// splice() 拼接
// drinks.splice(1,0,"雪碧","黑松沙士");
// drinks.splice(1,1,"雪碧","黑松沙士");
// drinks.splice(2,1);

// slice() 切片
let mydrinks = drinks.slice(0,1);

console.log(drinks);
console.log(mydrinks);

// join() 陣列->字串
let drinks_join = drinks.join("!!");
console.log(drinks_join);

// toString 陣列->字串
let drinks_str = drinks.toString();
console.log(drinks_str);

// split 字串->陣列
let str = "水 紅茶 綠茶 咖啡";
console.log(str.split(' '));

// sort 排序
let myArray = ['Banana','Apple','Fork','Yoyo','Kite'];
console.log(myArray.sort());

// reverse() 反轉
console.log(myArray.sort().reverse());

let s = 'hello';
console.log(s.split('').reverse().join());
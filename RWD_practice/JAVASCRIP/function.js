// 函式宣告式
function test(){
    let x = 100;
    return x;
}
console.log(test());

// 函式表達式
let test2 = function(){
    let y = 999;
    return y;
}
console.log(test2());

function square(w,h){
    return w*h;
}
console.log(square(200,128));
console.log(square());

function go(x){
    return x;
}
console.log(go());

// 箭頭函式 

// function asdf(){
//     return 'asdf';
// }

// let asdf = ()=>{
//     return 'asdf';
// }

//如果大括號內只有 return ，則大括號跟 return 皆可省略
// let asdf = () => 'asdf';

// 如果只有一個參數，則小括號可以省略
// let asdf = x => {return x};
// let asdf = x => x;

// let asdf = (x,y) => x + y;
// let asdf = function(x,y){
//     return x + y; 
// }
// let asdf = function(x,y){
//     return this;
// }
// let asdf = () => this;
// console.log(asdf(123,234));

let obj = {
    name:'test',
    active:function(){
        return this;
    }
}
let obj2 = {
    name:'test2',
    active:() => {
        return this;
    }
}
console.log(obj.active());
console.log(obj2.active());